import React from 'react';

class AddItem extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.flux.getActions('toDoApp').addItemToList(e.target.iteminput.value);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input name="iteminput"/>
          <button
            className="btn btn-primary"
            >Add Item</button>
        </form>
        <hr />
      </div>
    );
  }
}

export default AddItem;