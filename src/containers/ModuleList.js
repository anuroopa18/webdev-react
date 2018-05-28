import React from 'react';
import ModuleService from '../services/ModuleService';
import ModuleListItem from '../components/ModuleListItem';
import ModuleEditor from './ModuleEditor';
import {BrowserRouter as Router,Route} from 'react-router-dom';



export default class ModuleList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {courseId:'',
            module:{title:''},
            modules: [],
            course:[]
        };
        this.setCourseId =
            this.setCourseId.bind(this);
        this.setCourse =
            this.setCourse.bind(this);
        this.setModuleTitle =
            this.setModuleTitle.bind(this);
        this.createModule =
            this.createModule.bind(this);
        this.moduleService = ModuleService.instance;
        this.deleteModule = this.deleteModule.bind(this);

    }

    deleteModule(moduleId) {
        this.moduleService
            .deleteModule(moduleId)
            .then(() => {
                this.findAllModulesForCourse
                (this.state.courseId)
            });

    }

    setModuleTitle(event) {
        this.setState({module: {
                title: event.target.value
            }})}

    createModule() {
        this.moduleService
            .createModule(
                this.state.courseId,
                this.state.module).then(() => {
            this.findAllModulesForCourse
            (this.state.courseId);
        });

    }

    componentWillReceiveProps(newProps){
        this.findAllModulesForCourse(newProps.courseId);
        this.setCourseId(newProps.courseId);
        this.setCourse(newProps.course);
    }
    findAllModulesForCourse(courseId) {
        this.moduleService
            .findAllModulesForCourse(courseId)
            .then((modules) => {this.setModules(modules)});
    }
    setModules(modules) {
        this.setState({modules: modules})
    }

    setCourse(course){
        this.setState({course: course})
    }

    renderModules() {
        let modules = this.state.modules.map((module) => {
            return <ModuleListItem module={module} key={module.id} courseId={this.state.courseId} delete={this.deleteModule}/>
        });
        return modules;
    }


    setCourseId(courseId) {
        this.setState({courseId: courseId});
    }

    componentDidMount() {
        this.setCourseId(this.props.courseId);
    }


    render() {
        return (

            <Router>
            <div className="row">
                <div className="col-4" >
                    <div style={{
                        "backgroundColor": "#343a40","paddingBottom":"20px","paddingTop":"20px","marginBottom":"3px","marginRight":"-1px"}}><span style={{"color":"grey","paddingRight":"15px","paddingLeft":"15px"}}><i className="fa fa-2x fa-times"></i></span>
                        <span>&nbsp;</span>
                        <span style={{"color": "white", "fontSize": "27px"}}>{this.state.course.title}</span>
                    </div>
            <input style={{"paddingTop":"15px","marginBottom":"5px","paddingBottom":"15px"}} className="form-control"
             onChange={this.setModuleTitle} value={this.state.module.title} placeholder="New Module"/>
                <button className="btn btn-dark btn-block" onClick={this.createModule}><i className="fa fa-plus fa-2x" >
                    </i></button>
                <div style={{"paddingBottom":"100%","backgroundColor":"#343a40"}}>
                <ul className="list-group" style={{"marginTop":"6px"}}>
                {this.renderModules()}
                </ul>
                </div>
                </div>
                <div className="col-8 addCss" style={{"overflowX":"auto"}}>


                            <Route path="/course/:courseId/module/:moduleId"
                                   component={ModuleEditor}/>



                </div>
            </div>
            </Router>

    )}}
