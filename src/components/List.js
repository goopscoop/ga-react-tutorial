import React from 'react';
import AddItem from './AddItem';

class List extends React.Component {
  renderLists(){
    return this.props.list.map((el)=>(
      <li key={el}>{el}</li>
    ));
  }

  render(){
    console.log(this.props)
    return (
      <div className="col-md-2">
        <h2>{this.props.title}</h2>
        <AddItem />
        <ul>
          { this.renderLists() }
        </ul>
      </div>
    );
  }
}

export default List;
