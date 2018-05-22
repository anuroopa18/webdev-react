import React , {Component} from 'react';
import CourseRow from '../components/CourseRow';

export default class CourseList extends Component {
    render() { return (
        <div className="container-fluid col-md-10" style={{"background-color":"#ffffff","border":"1px solid #e6e6e6","paddingBottom":"100%","paddingLeft":"0%"}}>
            < table className = "table table-hover table-responsive-md" >
                < thead>
                < tr >
                    < th > </th>
                    <th className="th-lg">Title</th>
                    <th className="th-lg">Owned By</th>
                    <th className="th-lg">Last Modified By</th>
                    <th className="th-lg">&nbsp;</th>
                </tr>
                </thead>
                <tbody>
                <CourseRow/>
                <CourseRow/>
                <CourseRow/>
                <CourseRow/>
                </tbody>


            </table>
        </div>

     )
    }
}