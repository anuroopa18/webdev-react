import React from 'react';
import ModuleService from '../services/ModuleService';
import ModuleListItem from '../components/ModuleListItem';

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
            return <ModuleListItem module={module} key={module.id}/>
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
            <div>
            <h4>Modules courseId:
                {this.state.courseId}</h4>
            <input onChange={this.setModuleTitle} value={this.state.module.title} placeholder="New Module"/>
                <button onClick={this.createModule}>
                    Create</button>
                <ul className="list-group">
                {this.renderModules()}
                </ul>
            </div>

    )}}
