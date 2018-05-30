import {ADD_WIDGET, DELETE_WIDGET, FIND_ALL_WIDGETS, SAVE,FIND_WIDGETS_FOR_LESSON,HEADING_SIZE_CHANGED} from "../constants/index";

export const widgetReducer = (state={widgets:[]},action) => {
    switch(action.type){
        case 'WIDGET_NAME_CHANGED':
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id) {
                        widget.name = action.name
                    }
                    return Object.assign({}, widget)
                })
            }

        case 'HEADING_TEXT_CHANGED':
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id) {
                        widget.text = action.text
                    }
                    return Object.assign({}, widget)
                })
            }
        case 'HEADING_SIZE_CHANGED':
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id) {
                        widget.size = action.size
                    }
                    return Object.assign({}, widget)
                })
            }

        case 'FIND_WIDGETS_FOR_LESSON':
            return{
                widgets:action.widgets,
                lessonId:action.lessonId
            }
        case 'SELECT_WIDGET_TYPE':
            let newState = {
               widgets: state.widgets.filter((widget) => {
                  if(widget.id === action.id) {
                      widget.widgetType = action.widgetType
                  }
                  return true;
               })
            }
            return JSON.parse(JSON.stringify(newState))
        case SAVE:
            fetch('http://localhost:8080/api/lesson/'+ action.lessonId +'/widget/save',{
                method:'post',
                body: JSON.stringify(state.widgets),
                headers: {
                    'content-type' : 'application/json'
                }})

            return state
        case FIND_ALL_WIDGETS:
            return{
                widgets:action.widgets,

            }
        case DELETE_WIDGET:
            return {
                widgets: state.widgets.filter(widget => (
                    widget.id !== action.id
                )),

            }
        case ADD_WIDGET:
            return {
                widgets: [
                    ...state.widgets,
                    {id:state.widgets.length + 1
                        , text:'New widget',
                          widgetType: 'Paragraph',
                    size: 1}
                ],

            }
        default:
            return state
    }
}