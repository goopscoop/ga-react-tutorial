import React from 'react';

const Input = ({ onChange, onSubmit }) => (
  <div className="form-group">
    <label htmlFor="listInput">Email address</label>
    <input
      onChange={onChange}
      type="text"
      className="form-control"
      id="listItemInput"
      placeholder="Add new todo"
    />
    <button
      className="btn btn-primary"
      onSubmit={onSubmit}>
      Add Item
    </button>
  </div>
)

export default Input;