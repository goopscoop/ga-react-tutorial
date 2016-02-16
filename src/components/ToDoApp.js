import React from 'react';
import List from './List';
import Input from './Input';

class ToDoApp extends React.Component {

  componentWillMount(){
    this.setState({
      list: [],
      newToDo: ''
    })
  };

  onInputChange = (event) => {
    this.setState({ newToDo: event.target.value});
  };

  onInputSubmit = (event) => {
    event.preventDefault();
    this.setState((previousState)=>({
      list: [...previousState.list, {item: previousState.newToDo, done: false }],
      newToDo: ''
    }));
  };

  onListItemClick = (i) => {
    this.setState((previousState)=>({
      list: [
        ...previousState.list.slice(0, i),
        Object.assign({}, previousState.list[i], {done: !previousState.list[i].done}),
        ...previousState.list.slice(i+1)
      ]
    }))
  };

  deleteListItem = (i) => {
    this.setState((previousState)=>({
      list: [
        ...previousState.list.slice(0, i),
        ...previousState.list.slice(i+1)
      ]
    }))
  };

  render(){
    return (
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <div className="panel panel-default">
            <div className="panel-body">
              <h1>My To Do App</h1>
              <hr/>
              <List
                onClick={this.onListItemClick}
                listItems={this.state.list}
                deleteListItem={this.deleteListItem}
              />
              <Input
                value={this.state.newToDo}
                onChange={this.onInputChange}
                onSubmit={this.onInputSubmit}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ToDoApp;