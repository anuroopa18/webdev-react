import React from 'react'
import {DELETE_WIDGET} from "../constants/index";
import {connect} from "react-redux";
import HeadingContainer from './Heading'
import ParagraphContainer from './Paragraph'
import ImageContainer from './Image'
import LinkContainer from './Link'
import ListContainer from './List'

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
            {widget.widgetType === 'Paragraph' && <ParagraphContainer widget={widget}/>}
            {widget.widgetType === 'Link' && <LinkContainer widget={widget}/>}
            {widget.widgetType === 'List' && <ListContainer widget={widget}/>}
            {widget.widgetType === 'Image' && <ImageContainer widget={widget}/>}
        </div>
    </form>)

}

const WidgetContainer = connect() (Widget)
export default WidgetContainer