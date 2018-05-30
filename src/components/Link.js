import React from 'react'
import {connect} from "react-redux";
import * as actions from '../actions/index'

const Link = ({widget,widgetNameChanged,linkChanged,textNameChanged}) => {
    let someInputElem
    let linkInputElem
    let textInputElem
    return (

    <div>
        <p></p>
        <input type="text"
               onChange={() => linkChanged(widget.id, linkInputElem.value)}
               ref={node => linkInputElem = node}
               value={widget.href} className="form-control form-control" id="link" placeholder="Link"></input>
        <p></p>

        <input type="text"  onChange={() => textNameChanged(widget.id, textInputElem.value)}
               ref={node => textInputElem = node}
               value={widget.text} className="form-control form-control" id="linkText" placeholder="Link text"></input>
        <p></p>

        <input className="form-control form-control"
               type="text" onChange={() => widgetNameChanged(widget.id, someInputElem.value)}
               ref={node => someInputElem = node}
               value={widget.name}
               className="form-control form-control" id="widgetName" placeholder="Widget Name"/>
        <p></p>
        <h4> Preview </h4>
        <a href={widget.href}> {widget.text}</a>
        <p></p>
    </div>
)}

const dispatchToPropsMapper = dispatch => ({
    widgetNameChanged: (widgetId,newWidgetName) =>
        actions.widgetNameChanged(dispatch,widgetId,newWidgetName),
    linkChanged: (widgetId,newLink) =>
        actions.linkChanged(dispatch,widgetId,newLink),
    textNameChanged: (widgetId,newText) =>
        actions.textNameChanged(dispatch,widgetId,newText)
})

const LinkContainer = connect(null,dispatchToPropsMapper) (Link)
export default LinkContainer