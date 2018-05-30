import React from 'react'
import {DELETE_WIDGET} from "../constants/index";
import {connect} from "react-redux";
import * as actions from '../actions/index'


const Heading = ({widget,headingSizeChanged,headingTextChanged,widgetNameChanged}) => {
    let selectElem
    let inputElem
    let inputWidgetNameElem
    return(

    <div>
        <input onChange={() => headingTextChanged(widget.id, inputElem.value)}
               ref={node => inputElem = node}
               value={widget.text} type="text" className="form-control form-control" id="headingText" placeholder="Widget text"></input>
        <p></p>
        <select className="form-control" onChange={() => headingSizeChanged(widget.id, selectElem.value)}
                value={widget.size}
                ref={node => selectElem = node}>
            <option value="1">Heading 1</option>
            <option value="2">Heading 2</option>
            <option value="3">Heading 3</option>
        </select>
        <p></p>
        <input type="text" onChange={() => widgetNameChanged(widget.id, inputWidgetNameElem.value)}
                           ref={node => inputWidgetNameElem = node}
                           value={widget.name} className="form-control form-control" id="widgetName" placeholder="Widget Name" />
        <p></p>
        <h4> Preview </h4>
        {widget.size == 1 && <h1>{widget.text}</h1>}
        {widget.size == 2 && <h2>{widget.text}</h2>}
        {widget.size == 3 && <h3>{widget.text}</h3>}
        <p></p>
    </div>
    )
}

const dispatchToPropsMapper = dispatch => ({
    headingTextChanged: (widgetId,newText) =>
        actions.headingTextChanged(dispatch,widgetId,newText),
    headingSizeChanged: (widgetId, newSize) =>
        actions.headingSizeChanged(dispatch, widgetId, newSize),
    widgetNameChanged: (widgetId,newWidgetName) =>
        actions.widgetNameChanged(dispatch,widgetId,newWidgetName)

})


const HeadingContainer = connect(null,dispatchToPropsMapper) (Heading)

const Paragraph = (widget) => (
  <div>
      <p></p>
      <textarea type="text" className="form-control form-control" id="paragraphText" placeholder="Paragraph"></textarea>
      <p></p>

      <input type="text" className="form-control form-control" id="widgetName" placeholder="Widget Name"/>
      <p></p>
      <h4> Preview </h4>
      <label> <h1>Paragraph</h1> </label>
      <p></p>

  </div>
)

const List = (widget) => (
<div>
    <p></p>
    <textarea type="text" className="form-control form-control" id="headingText" placeholder="Put each item in a separate row"></textarea>
    <p></p>

    <select className="form-control" id="listType">
        <option>Ordered</option>
        <option>Unordered</option>
    </select>
    <p></p>

    <input type="text" className="form-control form-control" id="widgetName" placeholder="Widget Name"/>
    <p></p>
    <h4> Preview </h4>
    <ul style={{"listStyleType":"circle"}}>
        <li> Put each</li>
        <li> item in </li>
        <li> separate row </li>
    </ul>
    <p></p>
</div>
)

const Link = (widget) => (
        <div>
        <p></p>
        <input type="text" className="form-control form-control" id="link" placeholder="Link"></input>
    <p></p>

    <input type="text" className="form-control form-control" id="linkText" placeholder="Link text"></input>
    <p></p>

    <input type="text" className="form-control form-control" id="widgetName" placeholder="Widget Name"/>
        <p></p>
    <h4> Preview </h4>
    <p></p>
        </div>
)

const Image = (widget) =>(
    <div>
        <p></p>
        <input type="text" className="form-control form-control" id="headingText" placeholder="Image URL"></input>
        <p></p>

        <input type="text" className="form-control form-control" id="widgetName" placeholder="Widget Name"/>
        <p></p>
        <h4> Preview </h4>
        <p></p>
    </div>

)



const Widget = ({widget, dispatch}) => {
    let selectElement
    return (
    <form>
        <div className="container" style={{"border": "solid #dcdbdb 1px", "width": "150%", "marginTop": "24px","marginBottom":"-21px","backgroundColor":"white","paddingTop":"20px"}}>
            <div style={{"display": "inline-flex", "width": "100%"}}>
                <h3 style={{"width": "100%"}}> {widget.widgetType} widget </h3>
                <button style={{"marginRight": "3px", "marginTop": "5px", "marginBottom": "3px"}}
                        className="btn btn-warning"><i className="fa fa-arrow-up"></i></button>
                <button style={{"marginRight": "3px", "marginTop": "5px", "marginBottom": "3px"}}
                        className="btn btn-warning"><i className="fa fa-arrow-down"></i></button>
                <select value={widget.widgetType} onChange={e => dispatch({type:'SELECT_WIDGET_TYPE',
                                                 id: widget.id,
                                                 widgetType: selectElement.value})}
                        ref={node => selectElement = node}
                        style={{"width": "140px", "marginTop": "5px", "marginBottom": "3px", "marginRight": "3px"}}
                        className="form-control" id="widgetType1">
                    <option>Image</option>
                    <option>Heading</option>
                    <option> List</option>
                    <option>Link</option>
                    < option> Paragraph</option>
                </select>
                <button style={{"marginRight": "3px", "marginTop": "5px", "marginBottom": "3px"}}
                        className="btn btn-danger" onClick={e => (
                    dispatch({type: DELETE_WIDGET, id: widget.id})
                )}><i className="fa fa-times"></i></button>
            </div>
            {widget.widgetType==='Heading' && <HeadingContainer widget={widget}/>}
            {widget.widgetType === 'Paragraph' && <Paragraph/>}
            {widget.widgetType === 'Link' && <Link/>}
            {widget.widgetType === 'List' && <List/>}
            {widget.widgetType === 'Image' && <Image/>}
        </div>
    </form>)

}

const WidgetContainer = connect() (Widget)
export default WidgetContainer