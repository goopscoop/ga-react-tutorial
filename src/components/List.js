import React from 'react';
import AddItem from './AddItem';

class List extends React.Component {
  checkOrUncheck = (i) => {
    this.props.flux.getActions('toDoApp').toggleComplete(i)
  };

  renderLists(){
    return this.props.list.map((el, i)=>(
      <li
        onClick={this.checkOrUncheck.bind(this, i)}
        key={i}>
        <span style={{textDecoration: el.complete ? 'line-through' : ''}}>{el.item}</span>
      </li>
    ));
  }

  render(){
    return (
      <div className="col-md-2">
        <h2>{this.props.title}</h2>
        <AddItem flux={this.props.flux}/>
        <ul>
          { this.renderLists() }
        </ul>
      </div>
    );
  }
}

export default List;
