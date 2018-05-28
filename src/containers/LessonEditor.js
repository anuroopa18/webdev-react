import React from 'react';
import {Provider,connect} from 'react-redux';
import {createStore} from 'redux';


const Widget = ({widget, dispatch}) => (
    <form >
    <div className = "container" style = {{"border": "solid #dcdbdb 1px","width":"121%","marginTop":"24px"}} >
    <div style = {{"display": "inline-flex","width": "100%"}} >
    <h3 style = {{"width": "100%"}} > Heading widget </h3>
    <button style={{"marginRight": "3px" ,"marginTop": "5px","marginBottom": "3px"}}  className="btn btn-warning"><i className="fa fa-arrow-up"></i></button>
    <button style = {{"marginRight": "3px","marginTop": "5px","marginBottom":"3px"}} className="btn btn-warning"><i className="fa fa-arrow-down"></i></button>
    <select style = {{"width":"140px", "marginTop": "5px","marginBottom": "3px","marginRight": "3px"}} className = "form-control" id = "widgetType">
    <option > List </option><option>Heading</option>
    <option > Paragraph </option><option>Image</option>< option > Link </option>
    </select>
    <button style={{"marginRight": "3px", "marginTop": "5px","marginBottom": "3px"}} className="btn btn-danger" onClick={e => (
        dispatch({type: 'DELETE_WIDGET', id:widget.id})
    )}><i className="fa fa-times"></i></button>
    </div>
    <input type="text" className="form-control form-control" id="headingText" placeholder="Heading Text"/>
    <p></p>
    <select className="form-control" id="headingSize">
    <option>Heading 1</option>
    <option>Heading 2</option>
    <option>Heading 3</option>
    <option>Heading 4</option>
    <option>Heading 5</option>
    <option>Heading 6</option>
    </select>
    <p></p>
    <input type="text" className="form-control form-control" id="widgetName" placeholder="Widget Name"/>
    <p></p>
    <h4> Preview </h4>
    <label> <h1>Heading Text</h1> </label>
    <p></p>
</div>
</form>

)

const WidgetContainer = connect() (Widget)
const WidgetList =({widgets,dispatch}) => (
    <div>
        <div class="container" style={{"paddingBottom": "18px","width":"121%","marginTop":"14px"}}>
            <div  style={{"display": "inline-flex","float":"right"}}>
                <button style={{"marginRight": "6px","marginTop": "0px","marginBottom": "11px"}} class="btn btn-success">Save</button>
            <label style={{"fontWeight": "bold","paddingTop": "6px"}}>Preview</label>
            <label class="switch"><input type="checkbox" value="checked"/>
            <span class="slider round" style={{"marginRight": "-6px","marginLeft": "3px"}}></span>
            </label>
        </div>
    </div>
        <ul>
            {widgets.map(widget => (
              <WidgetContainer widget={widget}
                      key={widget.id}/>
            ))}
        </ul>
        <button onClick={e => (
            dispatch({type:'ADD_WIDGET'})

        )}>Add widget</button>
    </div>
)

let initialState = {
    widgets:[
        {id:0, text:'Widget 1'},
        {id:1, text:'Widget 2'},
        {id:2, text:'Widget 3'}
    ]
}

let idAutoIncrement = 3

const widgetReducer = (state=initialState,action) => {
    switch(action.type){
        case 'DELETE_WIDGET':
            return {
                widgets: state.widgets.filter(widget => (
                    widget.id !== action.id
                ))
            }
        case 'ADD_WIDGET':
            return {
                widgets: [
                    ...state.widgets,
                    {id:idAutoIncrement++
                        , text:'New widget'}
                ]
            }
        default:
            return state
    }
}

const stateToPropertiesMapper =(state) => (
    {
        widgets: state.widgets
    }
)

let store = createStore(widgetReducer)

const App = connect(stateToPropertiesMapper)(WidgetList)

export default class LessonEditor extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <App/>
            </Provider>

        )}}
