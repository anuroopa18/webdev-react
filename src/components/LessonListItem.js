import React from 'react';
import { Link } from 'react-router-dom';


export default class LessonListItem
    extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <li className="list-group-item" style={{"width":"270px","marginRight":"5px","backgroundColor":"#4b5154","color":"white"}}>
                <Link  className="aref" to={`/course/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lesson.id}`}>
                    {this.props.lesson.title}
                </Link>
                <span><i className="delete fa fa-times" style={{"float":"right","fontSize":"25px"}} onClick={() =>
                {if (window.confirm('Are you sure you wish to delete this item?')) this.props.delete(this.props.lesson.id)}}/></span>
            </li>

        );
    }
}