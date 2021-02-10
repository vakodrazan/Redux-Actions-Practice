// function that returns an action type and a text value
export function setSpecialText( state ){
  return {
    type: "SET_SPECIAL_TEXT",
    value: state
  }
}

export function increaseCounter() {
  return {
    type: "INCREASE_COUNTER"
  }
}
export function decreaseCounter() {
  return {
    type: "DENCREASE_COUNTER"
  }
}

export function setTemp(temp) {
  return {
    type: "SET_TEMP",
    value: temp
  }
}

export function toggleModal() {
  return {
    type: "TOGGLE_MODAL",
  }
}
export function setImageUrl(url) {
  return {
    type: "SET_IMAGE_URL",
    value: url
  }
}

export function setImageScale(scale) {
  return {
    type: "SET_IMAGE_SCALE",
    value: scale
  }
}

export function setCurrentCity(city) {
  return {
    type: "SET_CURRENT_CITY",
    value: city
  }
}

// User 

export function setSearchText(firstName) {
  return {
    type: "SET_SEARCH_TEXT",
    value: firstName
  }
}
export function sortUsers(currentUserSort) {
  return {
    type: "CURRENT_USER_SORT",
    value: currentUserSort
  }
}

export function addUser(user) {
  return {
    type: "ADD_USER",
    value: user
  }
}

export function removeUser() {
  return {
    type: "REMOVE_USER",
  }
}

export function getUsers() {
  return async (dispatch) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    dispatch({
      type: 'GET_USERS',
      value: users
    })
  }
}