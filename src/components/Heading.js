import React from 'react'
import {connect} from "react-redux";
import * as actions from '../actions/index'

const Heading = ({widget,headingSizeChanged,headingTextChanged,widgetNameChanged,preview}) => {
    let selectElem
    let inputElem
    let inputWidgetNameElem
    return(

       <div>
        <div hidden={preview}>
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
        </div>
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

const stateToPropertiesMapper = state => (
    {
       preview:state.preview
    }
)


 const HeadingContainer = connect(stateToPropertiesMapper,dispatchToPropsMapper) (Heading)
  export default HeadingContainer