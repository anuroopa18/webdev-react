import {
    ADD_WIDGET,
    DELETE_WIDGET,
    FIND_ALL_WIDGETS,
    SAVE,
    FIND_WIDGETS_FOR_LESSON,
    HEADING_SIZE_CHANGED,
    PARAGRAPH_TEXT_CHANGED,
    LINK_CHANGED,
    LINK_NAME_CHANGED,
    LINK_TEXT_CHANGED,
    WIDGET_NAME_CHANGED,
    HEADING_TEXT_CHANGED,
    SELECT_WIDGET_TYPE,
    LIST_TYPE_CHANGED,
    LIST_TEXT_CHANGED,
    PREVIEW,
    MOVE_UP,
    MOVE_DOWN
} from "../constants/index";

import 'array.prototype.move';

export const widgetReducer = (state={widgets:[],preview:false,changes:false},action) => {
    let newState
    switch(action.type){
        case MOVE_UP:
           let index= state.widgets.indexOf(action.widget)
            if(index !== 0) {
                state.widgets.move(index, index - 1)
            }
            else
            {
                alert('Cannot move up further :)')
            }
            return Object.assign({} ,{
                widgets:state.widgets.splice(0),
                changes:true
            })

        case MOVE_DOWN :
            let indx= state.widgets.indexOf(action.widget);
            if(indx + 1  !== state.widgets.length)
            {
            state.widgets.move(indx,indx+1)}

            else{

                alert('Cannot stoop lower than this :p')
            }
            return Object.assign({} ,{
                widgets:state.widgets.splice(0),
                changes:true
            })

        case PREVIEW:

            return Object.assign({} , {
                widgets:state.widgets,
                preview: !state.preview,
                changes: false


            })

        case LIST_TEXT_CHANGED:

            return {
                changes:true,
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id) {
                        widget.listItems = action.listItems
                    }
                    return Object.assign({}, widget)
                })
            }

        case LIST_TYPE_CHANGED:
            return {
                changes:true,
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id) {
                        widget.listType = action.listType
                    }
                    return Object.assign({}, widget)
                })
            }

        case LINK_TEXT_CHANGED:
            return {
                changes:true,
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id) {
                        widget.text = action.text
                    }
                    return Object.assign({}, widget)
                })
            }

        case LINK_NAME_CHANGED:
            return {
                changes:true,
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id) {
                        widget.href = action.href
                    }
                    return Object.assign({}, widget)
                })
            }

        case LINK_CHANGED:
            return {

                changes:true,
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id) {
                        widget.src = action.src
                    }
                    return Object.assign({}, widget)
                })
            }

        case PARAGRAPH_TEXT_CHANGED:
            return {
                changes:true,
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id) {
                        widget.text = action.text
                    }
                    return Object.assign({}, widget)
                })
            }
        case WIDGET_NAME_CHANGED:
            return {
                changes:true,
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id) {
                        widget.name = action.name
                    }
                    return Object.assign({}, widget)
                })
            }

        case HEADING_TEXT_CHANGED:
            return {
                changes:true,
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id) {
                        widget.text = action.text
                    }
                    return Object.assign({}, widget)
                })
            }
        case HEADING_SIZE_CHANGED:
            return {
                changes:true,
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id) {
                        widget.size = action.size
                    }
                    return Object.assign({}, widget)
                })
            }

        case FIND_WIDGETS_FOR_LESSON:

            return{
                widgets:action.widgets,
                lessonId:action.lessonId,
                preview: state.preview,
                changes:true

            }
        case SELECT_WIDGET_TYPE:
            let newState = {
                changes:true,
               widgets: state.widgets.filter((widget) => {
                  if(widget.id === action.id) {
                      widget.widgetType = action.widgetType
                  }
                  return true;
               })
            }
            return JSON.parse(JSON.stringify(newState))
        case SAVE:
            fetch('https://webdev-smr1.herokuapp.com/api/lesson/'+ action.lessonId +'/widget/save',{
                method:'post',
                body: JSON.stringify(state.widgets),
                headers: {
                    'content-type' : 'application/json'
                }}).then(response => {
                    if(response.ok){
                        alert("Details saved successfully");
                    }else{
                        alert("Widget name already exists!!!");
                    }
            })
            state.changes = false;

            return Object.assign({},state);
        case FIND_ALL_WIDGETS:
            return{
                widgets:action.widgets,
                changes:true

            }
        case DELETE_WIDGET:
            return {
                changes:true,
                widgets: state.widgets.filter(widget => (
                    widget.id !== action.id
                )),

            }
        case ADD_WIDGET:
            return {
                widgets: [
                    ...state.widgets,
                    {id:state.widgets.length + 1,
                        widgetType: 'Paragraph',
                        listType:'unordered',
                        listItems:'Put each element in a separate row',
                    size: 1}
                ],
                changes:true

            }
        default:
            return state
    }
}