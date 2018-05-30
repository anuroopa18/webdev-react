import {ADD_WIDGET, FIND_ALL_WIDGETS, SAVE,FIND_WIDGETS_FOR_LESSON,HEADING_SIZE_CHANGED,HEADING_TEXT_CHANGED,WIDGET_NAME_CHANGED,PARAGRAPH_TEXT_CHANGED,LINK_CHANGED,LINK_NAME_CHANGED,LINK_TEXT_CHANGED,LIST_TYPE_CHANGED,LIST_TEXT_CHANGED} from "../constants/index";

export const findAllWidgets = dispatch => {
    fetch('http://localhost:8080/api/widget')
        .then(response => (response.json()))
        .then(widgets => dispatch({
            type:FIND_ALL_WIDGETS,
            widgets:widgets
        }))
}

export const headingSizeChanged = (dispatch, widgetId, newSize) => (
    dispatch({
        type: HEADING_SIZE_CHANGED,
        id: widgetId,
        size: newSize})
)


export const listTypeChanged = (dispatch, widgetId, newListType) => (
    dispatch({
        type: LIST_TYPE_CHANGED,
        id: widgetId,
        listType: newListType})
)

export const listTextChanged = (dispatch, widgetId, newListText) => (
    dispatch({
        type: LIST_TEXT_CHANGED,
        id: widgetId,
        listItems: newListText})
)


export const headingTextChanged = (dispatch, widgetId, newText) => (
    dispatch({
        type: HEADING_TEXT_CHANGED,
        id: widgetId,
        text: newText})
)

export const textNameChanged = (dispatch, widgetId, newText) => (
    dispatch({
        type: LINK_TEXT_CHANGED,
        id: widgetId,
        text: newText
    })
)

export const paragraphTextChanged = (dispatch, widgetId, newText) => (
    dispatch({
        type: PARAGRAPH_TEXT_CHANGED,
        id: widgetId,
        text: newText
    })
)

export const imageLinkChanged = (dispatch, widgetId, newLink) => (
    dispatch({
        type: LINK_CHANGED,
        id: widgetId,
        src: newLink
    })
)

export const linkChanged = (dispatch, widgetId, newLink) => (
    dispatch({
        type: LINK_NAME_CHANGED,
        id: widgetId,
        href: newLink
    })
)

export const widgetNameChanged = (dispatch, widgetId, newWidgetName) => (
    dispatch({
        type: WIDGET_NAME_CHANGED,
        id: widgetId,
        name: newWidgetName})
)

export const findWidgetsForLesson = (dispatch,lessonId) => {
    fetch('http://localhost:8080/api/lesson/'+lessonId+'/widget')
        .then(response => (response.json()))
        .then(widgets => dispatch({
            type:FIND_WIDGETS_FOR_LESSON,
            widgets:widgets,
            lessonId:lessonId
        }))
}

export const addWidget = dispatch => (
    dispatch({type:ADD_WIDGET})
)

export const save = (dispatch,lessonId) =>(
    dispatch({type: SAVE, lessonId:lessonId})
)