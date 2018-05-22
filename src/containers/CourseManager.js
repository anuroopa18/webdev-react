import React , {Component} from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import CourseList from './CourseList';
import '../css/CourseListStyleClient.css';


export default class CourseManager extends Component {
    render() { return (
           <Router>
            <div className="container-fluid" style={{"backgroundColor":"#e6e6e6"}}>
                <Route path="/courses" component={CourseList}></Route>
            </div>
           </Router>
        )}

}