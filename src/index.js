import React from 'react';
import ReactDOM from 'react-dom';
import CourseManager from './containers/CourseManager.js'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import  "./css/CourseListStyleClient.css";

ReactDOM.render(
    //<CourseManager/>,
    <div className="container-fluid">
     {/*<ModuleList/>
     <Stateless message="hello anuroopa!!!"/>*/}
     <CourseManager/>
    </div>,
    document.getElementById('root')
);