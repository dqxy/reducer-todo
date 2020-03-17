export const initialState = [
  {
      item: "Make todo list",
      completed: false,
      id: 1
  }
];

export const todoReducer = (state,action) => {
  switch (action.type) {
      case "TOGGLE_COMPLETED":
          return [...state.map(item=>(
              (item.id === action.payload)? 
              {...item, completed: !item.completed} : 
              {...item}))];
      case "ADD_ITEM":
          if(action.payload){
          return [...state, {
              item: action.payload,
              completed: false,
              id: new Date()
          }];} else return [...state];
      case "CLEAR_DONE":
          return state.filter(item=>!(item.completed));
      default:
          return state;
  }
}