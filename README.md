# Setup (Before Class)

## Make sure you have the following tools:
- A Mac computer (Linix and Windows welcome, but I'll be able to offer very limited support if any issues pop up, especially with Windows)
- An IDE (Sublime, Atom, VIM or something similar)
- Google Chrome or FireFox
- Node.js installed

## Steps to take before class

### If you don't have Node.js installed
If you've already installed node, you can skip this step.

- Visit https://nodejs.org/en/ and download node 4.2.4 (or the latest version of 4.x.x). Don't download version 5.x.x unless you know what you're doing.
- Open the installer and follow the instructions.

### Once node is installed

1. Clone this repo, then in terminal enter the following commands
2.  `git clone git@github.com:goopscoop/ga-react-tutorial.git`
3. `cd ga-react-tutorial`
4.  `npm install`
5.  `npm start`
6. In your web browser, enter the url `http://localhost:8080/webpack-dev-server/#/`. 
- You should see a bar at the top of the page that says "App ready." Below that, it'll say "Hello General Assembly. Welcome to React". If you see this, you're ready for class.
- If you don't see this, please let me know at the beginning of class.
- If you feel adventurous, go ahead and poke around the files. Most of what you'll find is general boilerplate that will make your dev experiance nicer.

# Continued Ed Links

## React
- https://github.com/facebook/react/wiki/Sites-Using-React
- https://facebook.github.io/react/docs/thinking-in-react.html
- https://egghead.io/technologies/react
- https://github.com/reactjs/react-basic

## Virtual DOM
- http://calendar.perfplanet.com/2013/diff/
- http://conferences.oreilly.com/fluent/fluent2014/public/schedule/detail/32395
- http://stackoverflow.com/questions/21109361/why-is-reacts-concept-of-virtual-dom-said-to-be-more-performant-than-dirty-mode
- https://github.com/Matt-Esch/virtual-dom

## JSX

JSX is the HTML looking code that you'll find within the render method (and sprinkled throughout other custom methods) in React. While it looks like HTML, it's actually just JavaScript.

*Example*

```
// JSX
<h1 className="heading">Hello, world! I am an H1.</h1>

// Compiles to this
React.createElement('h1', {className: "heading"},
    "Hello, world! I am an H1."
)
```

- https://facebook.github.io/react/docs/jsx-in-depth.html
- https://facebook.github.io/react/jsx-compiler.html
- http://babeljs.io/docs/usage/transformers/other/react/

## Flux (old) and Redux (new) - (Advanced Data Handling)

###Flux

Flux is a data handling methodology created by Facebook for React. One of the best implementations of Flux come in the form of Flummox. However, the React community is starting to move away from Flux towards a new data handling methodology called Redux.

Learn more about Flux:
- https://code-cartoons.com/a-cartoon-intro-to-redux-3afb775501a6#.ewluyug9y
- http://acdlite.github.io/flummox

### Redux

Many Flux implementations are slowly being abandoned for the new Redux methodology. In fact, the creator of Flummox has joined the Redux team. This is new tech and not as widely documented as Flux, so it has a steeper learning curve. However, it appears to be the way data handling is headed for React (as well as many other frameworks).

Learn more about Redux
- https://code-cartoons.com/a-cartoon-guide-to-flux-6157355ab207#.wz28eywrv
- https://github.com/rackt/redux
- https://egghead.io/series/getting-started-with-redux
- https://www.youtube.com/watch?v=xsSnOQynTHs
- https://github.com/erikras/ducks-modular-redux
- Ducks - https://github.com/erikras/ducks-modular-redux

## ES6 (ES2015)

ES6 aka ES2015 is the newest itteration of JavaScript that comes packaged with a lot of handy new features. Some of my favorites include new variable types (`let` and `const`), arrow functions `() => {}`, spread opperators `{...props}`, destructuring `const {thing1, thing2, thing3} = object`, and a bunch of other useful features. Well worth looking into.

- http://babeljs.io/docs/learn-es2015/
- https://babeljs.io/ - transpiler

## React Router (may not cover in class)

React Router is a package used by most React Single Page Apps. It's easy to use and written in JSX syntax.

- https://github.com/rackt/react-router

Here's an example of how you would set up routes with the completed app we build in the workshop:

```javascript
import { Router, Route, hashHistory } from 'react-router'


const store = configureStore();

class App extends React.Component {
  render(){
    return(
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path="/" component={ToDoApp}/>
          <Route path="/foo" component={Bar}/>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
```

## Webpack

Webpack is a very complicated but useful bundler. It allows for things like hot reloading, `import`, `export`, etc. Webpack is set up by a single `webpack.config.js` file/

- https://webpack.github.io/

## Other

- Fetch - https://github.com/github/fetch
- Test w/ Unexpected - http://unexpected.js.org/
- Test w/ Webpack, Karma & Expect - https://medium.com/@scbarrus/how-to-get-test-coverage-on-react-with-karma-babel-and-webpack-c9273d805063#.uvl9e6hm4
