import React,{Component} from 'react';

export default class CourseRow extends Component{
    constructor(props){
        super(props);
    }
    render(){ return(
        <tr id="template">
            <td><span><i className="fa fa-file"></i></span></td>
            <td>{this.props.course.title}</td>
            <td>me</td>
            <td>{this.props.course.modified}</td>
            <td>
                <span><i onClick={() =>
                {this.props.delete(this.props.course.id)}} className="delete fa-2x fa fa-times"></i></span>
            </td>

        </tr>
    )

    }
}

