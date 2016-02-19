import { connect } from 'react-redux';
import ToDoApp from '../components/ToDoApp.js'
import {
  onInputChange,
  inputSubmit
} from '../redux/modules/toDoApp';

function mapStateToProps(state) {
  return {
    toDoApp: state.toDoApp // gives our component access to state through props.toDoApp
  }
}

function mapDispatchToProps(dispatch) {
  return {
    inputChange: (value) => dispatch(onInputChange(value)),
    inputSubmit: () => dispatch(inputSubmit())
  }; // here we're mapping actions to props
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoApp);