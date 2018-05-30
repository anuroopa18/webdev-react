import React from 'react'
import {connect} from "react-redux";
import * as actions from '../actions/index'

const Image = ({widget,widgetNameChanged,imageLinkChanged}) => {
    let someInputElem
    let linkInputElem
    return (
        <div>
            <p></p>
            <input type="text" onChange={() => imageLinkChanged(widget.id, linkInputElem.value)}
                   ref={node => linkInputElem = node}
                   value={widget.src} className="form-control form-control" id="imageText" placeholder="Image URL"></input>
            <p></p>

            <input type="text"
                   className="form-control form-control"
                   type="text" onChange={() => widgetNameChanged(widget.id, someInputElem.value)}
                   ref={node => someInputElem = node}
                   value={widget.name} id="widgetName" placeholder="Widget Name"/>
            <p></p>
            <h4> Preview </h4>
            <img src={widget.src}/>
        </div>
    )}

const dispatchToPropsMapper = dispatch => ({
    widgetNameChanged: (widgetId,newWidgetName) =>
        actions.widgetNameChanged(dispatch,widgetId,newWidgetName),
    imageLinkChanged: (widgetId,newImageLink) =>
        actions.imageLinkChanged(dispatch,widgetId,newImageLink)
})

const ImageContainer = connect(null,dispatchToPropsMapper) (Image)
export default ImageContainer