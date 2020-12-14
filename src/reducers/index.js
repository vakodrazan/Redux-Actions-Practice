// incomplete reducer function that consumes an action prop type return a counter number
function currentCount(state=0, action){
  switch (action.type) {
    case "INCREASE_COUNTER":
      // increment state by 1 below

    case "DECREASE_COUNTER":
      // decrease state by 1 below
    default:
      return state;
  }
}

// incomplete reducer function that consumes an action prop type to return an array of users
function users(state =[], action){
  switch (action.type) {
    case "ADD_USER":
      //push the value onto the 'users' state below

    case "REMOVE_USER":
      // remove a single user from 'users' state below

    default:
      return state;
  }
}

// complete reducer function that consumes an action prop type to return a text string
function specialText(state = "", action){
  if(action.type === "SET_SPECIAL_TEXT"){
    return action.value;
  }
  return state;
}