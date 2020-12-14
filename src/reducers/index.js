import { combineReducers } from "redux";

// incomplete reducer function that checks an action prop type to detemine a counter number
function currentCount(state=0){
  return state;
}

// incomplete reducer function that should check an action prop type to return an array of users
function users(state =[]){
  return state;
}

function currentCity(state=""){
  return state;
}

function currentTemp(state=0){
  return state;
}

function displayModal(state=false){
  return state;
}

function imageUrl(state=""){
  return state
}

function currentUserSort(state="first_name"){
  return state;
}

function imageScale(state=1){
  return state
}

function searchText(state=""){
  return state;
}

// complete reducer function that should check action prop type ""SET_SPECIAL_TEXT" to determine state value
function specialText(state=""){
  return state;
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
