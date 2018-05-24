import React from 'react';
import { Link } from 'react-router-dom';


export default class ModuleListItem
    extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <li className="list-group-item" style={{"marginBottom":"10px","backgroundColor":"#4b5154"}}>
                <Link  className="aref" to={`/course/${this.props.courseId}/module/${this.props.module.id}`}>
                    {this.props.module.title}
                </Link>

                <span><i className="delete fa-2x fa fa-times" style={{"float":"right","color":"white"}} onClick={() =>
        {if (window.confirm('Are you sure you wish to delete this item?')) this.props.delete(this.props.module.id)}}/></span>

        </li>

    );
    }
}
