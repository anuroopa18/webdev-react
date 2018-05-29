import React,{Component} from 'react';
import {Provider,connect} from 'react-redux';
import {createStore} from 'redux';
import {widgetReducer} from '../reducers/widgetReducer'
import {App} from '../containers/WidgetList'


let store = createStore(widgetReducer)

export default class LessonEditor extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <App/>
            </Provider>

        )}}
