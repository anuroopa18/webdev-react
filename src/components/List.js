import React from 'react'
import {connect} from "react-redux";
import * as actions from '../actions/index'


const List = ({widget,widgetNameChanged,listTypeChanged,listTextChanged}) => {
    let someInputElem
    let selectElem
    let textElem
    return(
        <div>
            <p></p>
            <textarea onChange={() => listTextChanged(widget.id, textElem.value)}
                      value={widget.listItems}
                      ref={node => textElem = node}  type="text" className="form-control form-control" id="ListText" placeholder="Put each item in a separate row"></textarea>
            <p></p>

            <select onChange={() => listTypeChanged(widget.id, selectElem.value)}
                    value={widget.listType}
                    ref={node => selectElem = node}  className="form-control" id="listType">
                <option value="ordered">ordered</option>
                <option value="unordered">unordered</option>
            </select>
            <p></p>

            <input type="text" onChange={() => widgetNameChanged(widget.id, someInputElem.value)}
                   ref={node => someInputElem = node}
                   value={widget.name} className="form-control form-control" id="widgetName" placeholder="Widget Name"/>
            <p></p>
            <h4> Preview </h4>
            <ul style={{"listStyleType":"circle"}}>
            {widget.listType == 'unordered' && widget.listItems.split("\n").map(i => {
                return<li>{i}</li>
            })}</ul>
            <ol>
                {widget.listType == 'ordered' && widget.listItems.split("\n").map(i => {
                    return<li>{i}</li>
                })}</ol>





            <p></p>
        </div>
    )
}

const dispatchToPropsMapper = dispatch => ({
    widgetNameChanged: (widgetId,newWidgetName) =>
        actions.widgetNameChanged(dispatch,widgetId,newWidgetName),
    listTypeChanged: (widgetId,newListType) =>
        actions.listTypeChanged(dispatch,widgetId,newListType),
    listTextChanged:(widgetId,newListText) =>
        actions.listTextChanged(dispatch,widgetId,newListText)

})

const ListContainer = connect(null,dispatchToPropsMapper) (List)
export default ListContainer