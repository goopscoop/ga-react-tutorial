import React from 'react';
import List from './List';
import { Flux } from 'flummox';
import FluxComponent from 'flummox/component';
import ToDoActions from '../actions/ToDoActions';
import ToDoStore from '../stores/ToDoStore';

class ToDoFlux extends Flux {

  constructor(){
    super();
    this.createActions('toDoApp', ToDoActions);
    this.createStore('toDoApp', ToDoStore);
  }
}

class ToDo extends React.Component {

  componentWillMount(){
    this.setState({
      list: ['thing1', 'thing2', 'thing3']
    })
  }

  addOne = ()=> {
    this.setState((previousState)=>{
      return {total: previousState.total + 1}
    });
  }

  render(){
    return (
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <div className="panel panel-default">
            <div className="panel-body">
              <List title="List1" list={this.state.list} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ToDo;
