import React from 'react';
import ToDoList from './ToDoList';
import AddListItems from './AddListItems';

class ToDo extends React.Component {
  
  state = {
    list: ['thing1', 'thing2', 'thing3'],
    input: ''
  };

  buildList = () => {
    return this.state.list.map((el, i) => <li key={i}>{el}</li>)
  };

  buildToDoListProps = () => ({
    list: this.state.list,
    buildList: this.buildList
  });

  addListItem = (e) => {
    e.preventDefault();
    this.setState((previousState)=>({
      list: previousState.list.concat(this.state.input)
    }));
  };

  updateInput = (event) => {
    this.setState({
      input: event.target.value
    })
  };

  render(){
    return (
      <div>
        <AddListItems
          updateInput={this.updateInput}
          input={this.state.input}
          addListItem={this.addListItem}/>
        <ToDoList {...this.buildToDoListProps()}/>
      </div>
    );
  }
}

export default ToDo;

