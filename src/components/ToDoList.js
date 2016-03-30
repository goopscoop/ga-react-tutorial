import React from 'react';

class ToDoList extends React.Component {

  render() {
    return (
      <div>
        <ul>
        {
          this.props.buildList()
        }
        </ul>
      </div>
    );
  }
}

export default ToDoList;