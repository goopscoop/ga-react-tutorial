import { Actions } from 'flummox';

class ToDoActions extends Actions {
  constructor() {
    super();
  }

  test() {
    return {
      thing: 'thing'
    }
  }
}

export default ToDoActions;