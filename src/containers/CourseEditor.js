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
                    <div style={{
                        "backgroundColor": "black"}}><span style={{"color":"grey","paddingRight":"15px","paddingLeft":"15px"}}><i className="fa fa-3x fa-times"></i></span>
                        <span>&nbsp;</span>
                        <span style={{
                            "color": "white",
                            "fontSize": "39px",
                            "paddingTop": "10px",
                            "paddingBottom": "10px"
                        }}>{this.state.course.title}</span>
                    </div>
                    <ModuleList courseId={this.state.course.id}/>

                </div>


        );
    }
}


