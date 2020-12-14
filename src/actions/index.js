// function that returns an action type and a text value
export function setSpecialText(txt){
  return {
    type:"SET_SPECIAL_TEXT",
    value:txt
  }
}

// function that returns an action type and a user value
export function addUser(user){
  return {
    type:"ADD_USER",
    value:user
  }
}