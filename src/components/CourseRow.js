import React,{Component} from 'react';

export default class CourseRow extends Component{
    render(){ return(
        <tr id="template">
            <td><span><i className="fa fa-file"></i></span></td>
            <td>Foundation of artificial intelligence</td>
            <td>Anuroopa</td>
            <td>Anuroopa</td>
            <td>
                <span><i className="delete fa-2x fa fa-times"></i></span>
            </td>

        </tr>
    )

    }
}

