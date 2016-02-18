import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ToDoAppContainer from './containers/ToDoAppContainer';
import configureStore from './redux/configureStore';

const store = configureStore();

class App extends React.Component {
  render(){
    return(
      <Provider store={store}>
        <ToDoAppContainer />
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));