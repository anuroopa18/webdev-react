import React,{Component} from 'react';
import {  Link } from 'react-router-dom'


export default class CourseRow extends Component{
    constructor(props){
        super(props);
    }
    render(){ return(
        <tr id="template">
            <td><span><i className="fa fa-file"></i></span></td>
            <td>
                <Link to=
                          {`/course/${this.props.course.id}`}>
                    {this.props.course.title}
                </Link>
                </td>
            <td>me</td>
            <td>{this.props.course.modified}</td>
            <td>
                <span><i onClick={() =>
                { if (window.confirm('Are you sure you wish to delete this item?')) this.props.delete(this.props.course.id)}} className="delete fa-2x fa fa-times"></i></span>
            </td>

        </tr>
    )

    }
}

