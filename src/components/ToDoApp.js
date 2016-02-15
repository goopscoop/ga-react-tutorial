import React from 'react';
import List from './List';
import Input from './Input';

class ToDoApp extends React.Component {

  componentWillMount(){
    this.setState({
      list: ['thing1', 'thing2', 'thing3'],
      newToDo: ''
    })
  };

  onInputChange = (e) => {
    this.setState({ newToDo: e.target.value});
  };

  onSubmit = () => {
    console.log(this.state.newToDo);
  };

  render(){
    console.log('state', this.state)
    return (
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <div className="panel panel-default">
            <div className="panel-body">
              <h1>My To Do App</h1>
              <hr/>
              <List
                listItems={this.state.list}
              />
              <Input
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