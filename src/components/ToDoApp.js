import React from 'react';
import List from './List';

class ToDoApp extends React.Component {

  componentWillMount(){
    this.setState({
      list: ['thing1', 'thing2', 'thing3']
    })
  };

  render(){
    console.log('state', this.state)
    return (
      <div className="row">
        <div className="col-md-10 col-md-offset-1">
          <div className="panel panel-default">
            <div className="panel-body">
              <h1>My To Do App</h1>
              <hr/>
              <List listItems={this.state.list} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ToDoApp;