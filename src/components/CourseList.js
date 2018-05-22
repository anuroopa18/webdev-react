import React , {Component} from 'react';


export default class CourseManager extends Component {
    render() { return (
        <div className="container-fluid col-md-10" style={{"background-color":"#ffffff","border":"1px solid #e6e6e6","paddingBottom":"100%"}}>
            < table className = "table table-hover table-responsive-md" >
                < thead >
                < tr >
                    < th > </th>
                    <th className="th-lg">Title</th>
                    <th className="th-lg">Owned By</th>
                    <th className="th-lg">Modified By</th>
                </tr>
                </thead>

                <tbody>
                <tr id="template">
                    <td><span><i className="fa fa-file"></i></span></td>
                    <td>Foundation of artificial intelligence</td>
                    <td>Anuroopa</td>
                    <td>Anuroopa</td>
                    <td>
                        <span><i className="delete fa-2x fa fa-times"></i></span>
                    </td>

                </tr>
                <tr id="template">
                    <td><span><i className="fa fa-file"></i></span></td>
                    <td>Foundation of artificial intelligence</td>
                    <td>Anuroopa</td>
                    <td>Anuroopa</td>
                    <td>
                        <span><i className="delete fa-2x fa fa-times"></i></span>
                    </td>

                </tr>
                <tr id="template">
                    <td><span><i className="fa fa-file"></i></span></td>
                    <td>Foundation of artificial intelligence</td>
                    <td>Anuroopa</td>
                    <td>Anuroopa</td>
                    <td>
                        <span><i className="delete fa-2x fa fa-times"></i></span>
                    </td>

                </tr>
                <tr id="template">
                    <td><span><i className="fa fa-file"></i></span></td>
                    <td>Foundation of artificial intelligence</td>
                    <td>Anuroopa</td>
                    <td>Anuroopa</td>
                    <td>
                        <span><i className="delete fa-2x fa fa-times"></i></span>
                    </td>

                </tr>
                </tbody>


            </table>
        </div>

     )
    }
}