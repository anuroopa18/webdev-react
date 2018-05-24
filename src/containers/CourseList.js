import React, {Component} from 'react';
import CourseRow from '../components/CourseRow';
import CourseService from '../services/CourseService'

export default class CourseList extends Component {
    constructor() {
        super();
        this.courseService = CourseService.instance;
        this.titleChanged = this.titleChanged.bind(this);
        this.createCourse = this.createCourse.bind(this);
        this.deleteCourse = this.deleteCourse.bind(this);

    }

    componentDidMount() {
        this.findAllCourses();
    }


    findAllCourses() {
        this.courseService.findAllCourses()
            .then((courses) => {
                this.setState({courses: courses});
            })
    }

    renderCourseRows() {
        let courses = null;
        if (this.state) {
            courses = this.state.courses.map(
                function (course) {
                    return <CourseRow key={course.id}
                                      course={course}
                                      delete={this.deleteCourse}/>
                },this
            )
        }
        return (
            courses
        )
    }

    deleteCourse(courseId) {
        this.courseService
            .deleteCourse(courseId).then(() => {
            this.findAllCourses();
        });
    }



    titleChanged(event) {
        this.setState({
            course: {title: event.target.value}
        });
    }

    createCourse() {
        this.courseService
            .createCourse(this.state.course)
            .then(() => {
                this.findAllCourses();
            });
    }


    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
                    <span className="navbar-brand" style={{"fontSize":"25px"}}><i className="fa fa-bars" style={{"paddingRight":"10px"}}></i> Course Manager</span>
                    <label htmlFor="newCourse"></label>
                    <input onChange={this.titleChanged}
                           style={{"backgroundColor": "#4d94ff", "border": "1px solid #4d94ff", "color": "white"}}
                           className=" mr-sm-2" id="newCourse" type="text" placeholder="New Course Title"
                           aria-describedby="New Course"/>
                    <span>
                  <i className="fas fa-plus-circle fa-3x fa fa-times" onClick={this.createCourse} style={{
                      "color": "red",
                      "backgroundColor": "white",
                      "borderRadius": "67%",
                      "height": "48px",
                      "width": "44px",
                      "fontSize": "51px",
                      "marginTop": "-2px",
                      "paddingTop": "-20px"
                  }}></i>
              </span>

                </nav>
                <div className="container-fluid col-md-10" style={{
                    "backgroundColor": "#ffffff",
                    "border": "1px solid #e6e6e6",
                    "paddingBottom": "100%",
                    "paddingLeft": "0%"
                }}>
                    < table className="table table-hover table-responsive-md">
                        < thead>
                        < tr>
                            < th></th>
                            <th className="th-lg">Title</th>
                            <th className="th-lg">Owned By</th>
                            <th className="th-lg">Last Modified By</th>
                            <th className="th-lg">&nbsp;</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.renderCourseRows()}
                        </tbody>
                    </table>
                </div>
            </div>

        )
    }
}