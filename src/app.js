import React from 'react';
import ReactDOM from 'react-dom';
import ToDo from './components/ToDo';

class App extends React.Component {
  render(){
    return(
      <div>
        <ToDo/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));