import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from "../actions/index";
import WidgetContainer from '../components/Widget'


let lsnId

class WidgetList extends Component  {
    constructor(props){
        super(props)
    }
    componentWillReceiveProps(newProps) {
        if(newProps.lessonId != lsnId){
            lsnId= newProps.lessonId;
            this.props.findWidgetsForLesson(lsnId);
        }


    }

    render(){
        return(
            <div>

                <div className="container" style={{"paddingBottom": "18px", "width": "150%", "marginTop": "14px"}}>
                    <div style={{"display": "inline-flex", "float": "right"}}>
                        <button hidden={this.props.previewMode} style={{"marginRight": "6px", "marginTop": "0px", "marginBottom": "11px"}}
                                className="btn btn-success" onClick={e => {this.props.save(lsnId)}} >Save
                        </button>
                        <label style={{"fontWeight": "bold", "paddingTop": "6px"}}>Preview</label>
                        <label className="switch"><input onClick={this.props.preview} type="checkbox"
                                                         value="checked"/>
                            <span className="slider round" style={{"marginRight": "-6px", "marginLeft": "3px"}}></span>
                        </label>
                    </div>
                </div>
                <ul>
                    {this.props.widgets.map(widget => (
                        <WidgetContainer widget={widget}
                                         preview={this.props.previewMode}
                                         key={widget.id}/>
                    ))}
                </ul>
                <button onClick={this.props.addWidget} style={{"marginTop":"20px"}}>Add widget
                </button>
            </div>
        )
    }

}

const stateToPropertiesMapper =(state,lessonIdProp) => (
    {
        widgets: state.widgets,
        lessonId: lessonIdProp.lessonId,
        previewMode:state.preview
    }
)

const dispatcherToPropsMapper = dispatch => ({
    findAllWidgets : () => actions.findAllWidgets(dispatch),
    addWidget : () => actions.addWidget(dispatch),
    save:(lessonId) => actions.save(dispatch,lessonId),
    findWidgetsForLesson : (lessonId) => actions.findWidgetsForLesson(dispatch,lessonId),
    preview:() => actions.preview(dispatch)

})

export const App = connect(stateToPropertiesMapper,dispatcherToPropsMapper)(WidgetList)
