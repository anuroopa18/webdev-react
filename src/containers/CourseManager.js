import React, {Component} from 'react';
import CourseCard from '../components/CourseCard.js';
import ModuleList from './ModuleList.js';
import LessonTabs from './LessonTabs.js';
import CourseEditor from './CourseEditor.js';

export default class CourseManager
    extends Component{
    render(){
        return (
            <div className="container-fluid"><h1>Course Manager</h1>
                <CourseEditor/>
                <LessonTabs/>
                <ModuleList/>
                  <div className="card-deck">
                      <CourseCard/>
                      <CourseCard/>
                      <CourseCard/>
                      <CourseCard/>
                      <CourseCard/>
                  </div>
            </div>
        )

    }
}

