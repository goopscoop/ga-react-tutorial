- What is react:
    - The V in MVC
    - Built on Components
    - The Virtual DOM
    - JSX
- Getting Started
    + Setup Webpack
        * What is Webpack (Browserify)
        * Quick look at file structure
        * Quick look at webpack.config.js
- Components
    + React and ES6
    + Structure
    + Props (ViewPort)
    + Default Props
- Redux
    + What is flux/redux
    + `npm install --save redux`,
    + `npm install --save react-redux`
    + `npm install --save redux-logger`

app.js
`import { Provider, connect } from 'react-redux';`
`import configureStore from './redux/configureStore';`

configureStore.js
```javascript
import { createStore, applyMiddleware, combineReducers } from 'redux';
import createLogger from 'redux-logger';
//import duck files

const reducer = combineReducers(//reducers go here)
const loggerMiddleware = createLogger();

const createStoreWithMiddleware = applyMiddleware(loggerMiddleware)(createStore);

const configureStore = (initialState) => createStoreWithMiddleware(reducer, initialState);
export default configureStore;
```

toDoReducers.js
```
const ADD_TODO = 'ADD_TODO';

export function addTodo(){
    return {
        type: ADD_TODO,
        other stuff
    }
}

const initialState = {
    toDos: []
}

export default function reducer(state = initialState, action){
    switch(action.type){
    case ADD_TODO:
        return Object.assign({},
            state,
            {toDos: state.toDos.concat(action.todo)});
    default:
        return state
    }
}

