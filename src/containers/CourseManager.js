import React , {Component} from 'react';
import CourseList from './CourseList'

export default class CourseManager extends Component {
    render() { return (
<div className="container-fluid" style={{"background-color":"#e6e6e6"}}>

        <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
            <a className="navbar-brand" href="#">Course Manager</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                <label htmlFor="newCourse"  ></label>
                <input style={{"background-color":"#4d94ff","border":"1px solid #4d94ff"}} className="form-control form-control-lg mr-sm-2" id="newCourse" type="text" placeholder="New Course Title" aria-describedby="New Course"/>

                <span>
                  <i className="fas fa-plus-circle fa-3x fa fa-times"  style={{"color": "red","background-color": "white","border-radius": "67%","height": "48px","width": "44px","font-size": "51px","margin-top": "-2px","padding-top": "-20px"}}></i>
              </span>

            </div>
        </nav>
    <CourseList/>
</div>

    )}
        }