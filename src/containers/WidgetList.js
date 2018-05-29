import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addWidget, findAllWidgets,save} from "../actions/index";
import WidgetContainer from '../components/Widget'

class WidgetList extends Component  {
    constructor(props){
        super(props)
        this.props.findAllWidgets();
    }

    render(){
        return(
            <div>
                <div className="container" style={{"paddingBottom": "18px", "width": "150%", "marginTop": "14px"}}>
                    <div style={{"display": "inline-flex", "float": "right"}}>
                        <button style={{"marginRight": "6px", "marginTop": "0px", "marginBottom": "11px"}}
                                className="btn btn-success" onClick={this.props.save} >Save
                        </button>
                        <label style={{"fontWeight": "bold", "paddingTop": "6px"}}>Preview</label>
                        <label className="switch"><input type="checkbox" value="checked"/>
                            <span className="slider round" style={{"marginRight": "-6px", "marginLeft": "3px"}}></span>
                        </label>
                    </div>
                </div>
                <ul>
                    {this.props.widgets.map(widget => (
                        <WidgetContainer widget={widget}
                                         key={widget.id}/>
                    ))}
                </ul>
                <button onClick={this.props.addWidget}>Add widget
                </button>
            </div>
        )
    }

}

const stateToPropertiesMapper =(state) => (
    {
        widgets: state.widgets
    }
)

const dispatcherToPropsMapper = dispatch => ({
    findAllWidgets : () => findAllWidgets(dispatch),
    addWidget : () => addWidget(dispatch),
    save:() => save(dispatch)
})

export const App = connect(stateToPropertiesMapper,dispatcherToPropsMapper)(WidgetList)
