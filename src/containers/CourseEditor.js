import React from 'react';
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

                <div style={{"paddingBottom": "100%"}} >
                    <ModuleList courseId={this.state.course.id} course={this.state.course}/>
                </div>


        );
    }
}


