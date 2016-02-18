import { connect } from 'react-redux';
import ToDoApp from '../components/ToDoApp.js'

function mapStateToProps(state) {
  return {
    toDoApp: state.toDoApp // gives our component access to state through props.toDoApp
  }
}

function mapDispatchToProps(dispatch) {
  return {}; // here we'll soon be mapping actions to props
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoApp);