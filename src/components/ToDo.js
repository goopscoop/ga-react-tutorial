import React from 'react';
import List from './List';

class ToDo extends React.Component {

  addOne = ()=> {
    this.setState((previousState)=>{
      return {total: previousState.total + 1}
    });
  };

  render(){
    return (
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <div className="panel panel-default">
            <div className="panel-body">
              <FluxComponent flux={flux} connectToStores={['toDoApp']}>
                <List title="List1" />
              </FluxComponent>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ToDo;
