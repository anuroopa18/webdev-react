import React from 'react'
import {DELETE_WIDGET} from "../constants/index";
import {connect} from "react-redux";
import * as actions from '../actions/index'

const Paragraph = ({widget,widgetNameChanged,paragraphTextChanged}) => {
    let inputWidgetNameElem
    let inputElem

    return(
    <div>
        <p></p>
        <textarea onChange={() => paragraphTextChanged(widget.id, inputElem.value)}
                  ref={node => inputElem = node}
                  value={widget.text}
                  type="text" className="form-control form-control" id="paragraphText"
                  placeholder="Paragraph"></textarea>
        <p></p>

        <input onChange={() => widgetNameChanged(widget.id, inputWidgetNameElem.value)}
               ref={node => inputWidgetNameElem = node}
               value={widget.name} type="text" className="form-control form-control" id="widgetName" placeholder="Widget Name"/>
        <p></p>
        <h4> Preview </h4>
        <label><h1>Paragraph</h1></label>
        <p></p>

    </div>)
}

const dispatchToPropsMapper = dispatch => ({
    widgetNameChanged: (widgetId,newWidgetName) =>
        actions.widgetNameChanged(dispatch,widgetId,newWidgetName),
    paragraphTextChanged: (widgetId,newText) =>
        actions.paragraphTextChanged(dispatch,widgetId,newText)

})


const ParagraphContainer = connect(null,dispatchToPropsMapper) (Paragraph)
export default ParagraphContainer