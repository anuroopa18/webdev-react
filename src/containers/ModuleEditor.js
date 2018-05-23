import React from 'react';
import LessonTabs from './LessonTabs';
import ModuleService from '../services/ModuleService';

export default class ModuleEditor
    extends React.Component {
    constructor(props) {
        super(props);
        this.setCourseId =
            this.setCourseId.bind(this);
        this.setModuleId =
            this.setModuleId.bind(this);
        this.state = {
            courseId: '',
            moduleId: '',
            module:[]
        };
        this.selectModule = this.selectModule.bind(this);
        this.moduleService = ModuleService.instance;
    }



    selectModule(moduleId) {
        this.moduleService.findModuleById(moduleId)
            .then((module) => {
                this.setState({module: module});
                console.log(this.state.module);
            })
    }

    setCourseId(courseId) {
        this.setState
        ({courseId: courseId});

    }
    setModuleId(moduleId) {
        this.setState
        ({moduleId: moduleId});
    }
    componentDidMount() {
        this.setCourseId(
            this.props.match.params.courseId);

        this.setModuleId(
            this.props.match.params.moduleId);

        this.selectModule(this.props.match.params.moduleId);
    }

    componentWillReceiveProps(newProps) {
        this.setCourseId(newProps.match.params.courseId);

        this.setModuleId(newProps.match.params.moduleId);
    }


    render() {
        return (
            <div>
            <LessonTabs courseId={this.state.courseId} moduleId={this.state.moduleId} />
            </div>
        )}}
