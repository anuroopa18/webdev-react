import React from 'react';
import ReactDOM from 'react-dom';
import CourseManager from './containers/CourseManager.js'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Hello from './components/Hello.js';
import Stateless from './components/Stateless.js';
import ModuleListItem from './components/ModuleListItem.js';
import ModuleList from "./containers/ModuleList";
import App from "./examples/App.js";

ReactDOM.render(
    //<CourseManager/>,
    <div className="container-fluid">
     {/*<ModuleList/>
     <Stateless message="hello anuroopa!!!"/>*/}
     <App/>
    </div>,
    document.getElementById('root')
);