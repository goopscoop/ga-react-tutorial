import React from 'react';

class AddListItems extends React.Component {
  style={
    backgroundColor: 'red'
  };
  
  render(){
    return (
      <div style={this.style}>
        <form >
          <input type="text"
            onChange={this.props.updateInput}
            value={this.props.input}></input>
          <button
            onClick={this.props.addListItem}
            className="btn btn-default">Add Item</button>
        </form>
      </div>
    );
  }
}

export default AddListItems;
