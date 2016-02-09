import { Actions } from 'flummox';

class ToDoActions extends Actions {
  constructor() {
    super();
  }

  test() {
    return {
      thing: 'thing',
      otherthing: '2'
    }
  }

  addItemToList(item){
    return {
      item
    }
  }

  toggleComplete(i){
    return {
      i
    }
  }
}

export default ToDoActions;