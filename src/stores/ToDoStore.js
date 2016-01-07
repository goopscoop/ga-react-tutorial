import { Store } from 'flummox';

class ToDoStore extends Store {
  constructor(flux){
    super();
    this.flux = flux;
    const ToDoActionIds = flux.getActionIds('toDoApp');
    this.register(ToDoActionIds.test, this.handleTest);
    this.register(ToDoActionIds.addItemToList, this.handleAddItemToList);
    this.register(ToDoActionIds.toggleComplete, this.handleToggleComplete);

    this.state = {
      list: [{item: 'hi', complete: false}]
    }
  }

  handleToggleComplete({ i }){
    console.log('click')
    this.setState((previousState)=>{
      let list = previousState.list
      list[i].complete = !list[i].complete
      return {list}
    })
  }

  handleTest(){
    console.log('hi agian')
  }

  handleAddItemToList({item}){
    this.setState((previousState)=>{
      list: previousState.list.push({
        item,
        complete: false
      })
    })
  }
}

export default ToDoStore;