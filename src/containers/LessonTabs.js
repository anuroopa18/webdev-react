import React, {Component} from 'react';
import ModuleEditor from "./ModuleEditor";
import LessonListItem from "../components/LessonListItem"
import LessonService from "../services/LessonService"
import {BrowserRouter as Router,Route} from 'react-router-dom';
import LessonEditor from "./LessonEditor"


export default class LessonTabs extends Component{
    constructor(props){
        super(props);
        this.state = {courseId:'',
            moduleId:'',
            lesson:{title:''},
            lessons:[]
        };

        this.setCourseId = this.setCourseId.bind(this);
        this.setModuleId = this.setModuleId.bind(this);
        this.setLessonTitle = this.setLessonTitle.bind(this);
        this.createLesson = this.createLesson.bind(this);
        this.deleteLesson = this.deleteLesson.bind(this);
        this.lessonService = LessonService.instance;



    }

    componentWillReceiveProps(newProps){
        this.findAllLessonsForModule(newProps.courseId,newProps.moduleId);
        this.setModuleId(newProps.moduleId);
        this.setCourseId(newProps.courseId);
    }

    setModuleId(moduleId) {
        this.setState({moduleId: moduleId});
    }

    setCourseId(courseId) {
        this.setState({courseId: courseId});

    }

    deleteLesson(lessonId) {
        this.lessonService
            .deleteLesson(lessonId)
            .then(() => {
                this.findAllLessonsForModule(this.state.courseId,this.state.moduleId);
            });

    }
    setLessonTitle(event) {
        this.setState({lesson: {
                title: event.target.value
            }});}

    setLessons(lessons) {
        this.setState({lessons: lessons});
    }

    createLesson(){
        this.lessonService
            .createLesson(this.state.courseId,this.state.moduleId,this.state.lesson).then(() => {
            this.findAllLessonsForModule(this.state.courseId,this.state.moduleId);
        });
    }

    findAllLessonsForModule(courseId,moduleId) {
        this.lessonService
            .findAllLessonsForModule(courseId,moduleId)
            .then((lessons) => {this.setLessons(lessons)});
    }


    renderLessons() {
        let lessons = this.state.lessons.map((lesson) => {
            return <LessonListItem lesson={lesson} key={lesson.id}
                                   courseId={this.state.courseId}
                                   moduleId={this.state.moduleId}
                                   delete={this.deleteLesson}/>

        });

        return lessons;
    }

    render(){ return(

        <div>
         <div>

             <div style={{"backgroundColor": "rgb(52, 58, 64)","overflowX": "auto"}}>
                 <nav className="navbar navbar-expand-lg navbar-light bg-dark" style={{"marginRight":"-20px","marginLeft":"-31px","paddingTop":"20px","paddingBottom":"20px","height":"80px"}}>

                     <ul className="nav nav-pills nav-fill">

            <ul className="navbar-nav" style={{"height":"50px"}}>
                <input onChange={this.setLessonTitle} value={this.state.lesson.title} style={{"paddingTop":"10px","width":"50%","marginLeft":"20px"}} className="form-control"  placeholder="New Lesson"/>
                <button className="btn btn-dark" onClick={this.createLesson}><i className="fa fa-plus fa-2x" >
                    </i></button>
                        {this.renderLessons()}
            </ul>
                     </ul>

                 </nav>
             </div>
         </div>

        <div>
              <div className="col-8">
                  <div >

                      <Route path="/course/:courseId/module/:moduleId/lesson/:lessonId" lessonId={this.state.lesson.id}
                             component={LessonEditor} />

                  </div>

              </div>
        </div>
        </div>


    )

    }
}