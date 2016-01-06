import { Store } from 'flummox';

class ToDoStore extends Store {
  constructor(flux){
    super();
    this.flux = flux;
    const ToDoActionIds = flux.getActionIds('toDoApp');
    this.register(ToDoActionIds.test, this.handleTest);
  }

  handleTest(){
    console.log('hi')
  }
}

export default ToDoStore;