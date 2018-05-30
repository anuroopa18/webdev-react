import React,{Component} from 'react';
import {Provider,connect} from 'react-redux';
import {createStore} from 'redux';
import {widgetReducer} from '../reducers/widgetReducer'
import {App} from '../containers/WidgetList'
import LessonService from '../services/LessonService'



let store = createStore(widgetReducer)

export default class LessonEditor extends React.Component {
    constructor(props){
        super(props);
        this.state={
                    courseId:'',
                    moduleId:'',
                    lessonId:'',
                    lesson:[]}
        this.setCourseId = this.setCourseId.bind(this);
        this.setModuleId = this.setModuleId.bind(this);
        this.setLessonId = this.setLessonId.bind(this);
        this.selectLesson = this.selectLesson.bind(this);
        this.lessonService = LessonService.instance;
    }

    setCourseId(courseId) {
        this.setState
        ({courseId: courseId});


    }
    setModuleId(moduleId) {
        this.setState
        ({moduleId: moduleId});
    }

    setLessonId(lessonId){
        this.setState({lessonId: lessonId});
        console.log(this.state.lessonId);

    }

    selectLesson(lessonId) {
        this.lessonService.findLessonById(lessonId)
            .then((lesson) => {
                this.setState({lesson: lesson});
            })
    }


    componentDidMount() {
        this.setCourseId(
            this.props.match.params.courseId);

        this.setModuleId(
            this.props.match.params.moduleId);

        this.selectLesson(this.props.match.params.lessonId);

        this.setLessonId(this.props.match.params.lessonId);
    }

    componentWillReceiveProps(newProps) {
        this.setCourseId(newProps.match.params.courseId);

        this.setModuleId(newProps.match.params.moduleId);

        this.setLessonId(newProps.match.params.lessonId);
    }

    render() {
        return (
            <Provider store={store}>
                <App lessonId={this.state.lessonId}/>
            </Provider>

        )}}
