const INPUT_CHANGED = 'INPUT_CHANGED';
const INPUT_SUBMIT = 'INPUT_SUBMIT';
const LIST_ITEM_CLICK = 'LIST_ITEM_CLICK';
const DELETE_LIST_ITEM = 'DELETE_LIST_ITEM';

export function listItemClick(index){
  return {
    type: {
      LIST_ITEM_CLICK,
      index
    }
  }
}

export function deleteListItem(index) {
  return {
    type: DELETE_LIST_ITEM,
    index
  }
}

export function inputSubmit(){
  return {
    type: INPUT_SUBMIT
  };
}

export function inputChange(value){
  return {
    type: INPUT_CHANGED,
    value
  }
}

const initialState = {
  list: [{item: 'test', done: false}],
  newToDo: ''
};

export default function reducer(state = initialState, action){
  switch (action.type){
  case INPUT_SUBMIT:
    return Object.assign(
      {},
      state,
      { list: [...state.list, {item: state.newToDo, done: false }],
      newToDo: ''}
    );
  case INPUT_CHANGED:
    return Object.assign(
      {},
      state,
      {newToDo: action.value}
    );
  default:
    return state;
  }
}