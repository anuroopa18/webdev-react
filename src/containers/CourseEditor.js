import React from 'react';
import '../css/CourseEditorStyleClient.css';
import '../css/CourseEditorStyleClient.css';
import ModuleList from './ModuleList.js';
import CourseService from '../services/CourseService'


export default class CourseEditor
    extends React.Component {
    constructor(props) {
        super(props);
        this.courseService = CourseService.instance;
        this.state = {courseId: '',
        course:[]};
        this.selectCourse = this.selectCourse.bind(this);
    }

    componentDidMount() {
        this.selectCourse
        (this.props.match.params.courseId);
    }

    selectCourse(courseId) {
        this.courseService.findCourseById(courseId)
            .then((course) => {
                this.setState({course: course});
                console.log(this.state.course);
            })
    }

    render() {
        return (

                <div style={{"paddingBottom": "100%"}} className="col-4">
                    <ModuleList courseId={this.state.course.id}/>

                </div>


        );
    }
}


