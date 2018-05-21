import React from 'react';
import ModuleList from './ModuleList.js';
import LessonTabs from './LessonTabs.js';

export default class CourseEditor
    extends React.Component {
    render() { return(
        <div className="row">
            <div className="col-4">
               <ModuleList/>
            </div>
            <div className="col-8">
               <LessonTabs/>
            </div>
        </div>
    );}}


