import React from 'react';
import { Link } from 'react-router-dom';

export default class LessonListItem
    extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <li className="list-group-item">
                {this.props.lesson.title}
                <span><i className="delete fa-2x fa fa-times" style={{"float":"right"}} onClick={() =>
                {if (window.confirm('Are you sure you wish to delete this item?')) this.props.delete(this.props.lesson.id)}}/></span>
            </li>

        );
    }
}