import React from 'react';
import ModuleService from '../services/ModuleService';
import ModuleListItem from '../components/ModuleListItem';
import ModuleEditor from './ModuleEditor';
import  '../css/ModuleEditorStyleClient.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';



export default class ModuleList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {courseId:'',
            module:{title:''},
            modules: []
        };
        this.setCourseId =
            this.setCourseId.bind(this);
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
    }
    findAllModulesForCourse(courseId) {
        this.moduleService
            .findAllModulesForCourse(courseId)
            .then((modules) => {this.setModules(modules)});
    }
    setModules(modules) {
        this.setState({modules: modules})
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
            <span><input style={{"paddingTop":"10px"}} className="form-control"
             onChange={this.setModuleTitle} value={this.state.module.title} placeholder="New Module"/></span>
                <span><button className="btn btn-dark btn-block" onClick={this.createModule}><i className="fa fa-plus fa-2x" >
                    </i></button></span>
                <div style={{"paddingBottom":"100%"}}>
                <ul className="list-group">
                {this.renderModules()}
                </ul>
                </div>
                </div>
                <div className="col-8">
                    <Route path="/course/:courseId/module/:moduleId"
                           component={ModuleEditor}/>
                </div>
            </div>
            </Router>

    )}}
