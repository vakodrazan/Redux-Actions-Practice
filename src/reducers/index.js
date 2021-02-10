import { combineReducers } from "redux";

// incomplete reducer function that checks an action prop type to detemine a counter number


function currentCount(count = 0, action){
  switch (action.type) {
    case "INCREASE_COUNTER":
      return count + 1
    case "DENCREASE_COUNTER":
      return count - 1
    default:
      return count;
  }
}

// incomplete reducer function that should check an action prop type to return an array of users
function users(state =[], action){
  switch (action.type) {
    case "ADD_USER":
      return [...state, action.value]
    case "REMOVE_USER": 
      return state.slice(0, state.length - 1)
    case "GET_USERS": 
      return action.value
    default:
      return state
  }
}

function currentCity(state="", action){
  switch (action.type) {
    case "SET_CURRENT_CITY":
      return action.value;
    default:
      return state;
  }
}

function currentTemp(state=0, action){
  switch (action.type) {
    case "SET_TEMP":
      return action.value
  
      default:
      return state;
  }
}

function displayModal(state=false, action){
  switch (action.type) {
    case "TOGGLE_MODAL":
      return !state  
    default:
      return state;
  }
}

function imageUrl(state="", action){
  switch (action.type) {
    case "SET_IMAGE_URL":
      return action.value 
    default:
      return state
  }
}

function currentUserSort(state="first_name", action){
  switch (action.type) {
    case "CURRENT_USER_SORT":
      return action.value
    default:
      return state;
  }
}

function imageScale(state=1, action){
  switch (action.type) {
    case "SET_IMAGE_SCALE":
      return action.value
  
    default:
      return state
  }
}

function searchText(state="", action){
  switch (action.type) {
    case "SET_SEARCH_TEXT":
      return action.value

    default:
      return state;
  }
}

// complete reducer function that should check action prop type ""SET_SPECIAL_TEXT" to determine state value
function specialText(state="", action){
  switch (action.type) {
    case "SET_SPECIAL_TEXT" :
    return  action.value
    default:
      return state;
  }
}

export default combineReducers({
  currentCount,
  specialText,
  currentCity,
  searchText,
  currentTemp,
  displayModal,
  imageUrl,
  currentUserSort,
  imageScale,
  users
});
