import React, {Component} from 'react';
import ModuleEditor from "./ModuleEditor";
import LessonListItem from "../components/LessonListItem"
import LessonService from "../services/LessonService"

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

    setLessonTitle(event) {
        this.setState({lesson: {
                title: event.target.value
            }});}

    setLessons(lessons) {
        this.setState({lessons: lessons});
    }

    findAllLessonsForModule(courseId,moduleId) {
        this.lessonService
            .findAllLessonsForModule(courseId,moduleId)
            .then((lessons) => {this.setLessons(lessons)});
    }


    renderLessons() {
        let lessons = this.state.lessons.map((lesson) => {
            return <LessonListItem lesson={lesson} key={lesson.id} courseId={this.state.courseId} moduleId={this.state.moduleId}/>
        });
        return lessons;
    }

    render(){ return(
        <div className="row">
            <div className="col-4" >
                <span><input onChange={this.setLessonTitle} style={{"paddingTop":"10px"}} className="form-control"  placeholder="New Lesson"/></span>
                <span><button className="btn btn-dark btn-block"><i className="fa fa-plus fa-2x" >
                    </i></button></span>
                <div style={{"paddingBottom":"100%"}}>
                    <ul className="list-group">
                        {this.renderLessons()}
                    </ul>
                </div>
            </div>
            <div className="col-8">
               <h2> Test </h2>
            </div>
        </div>
    )

    }
}