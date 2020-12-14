import React from 'react';

function Users(props) {
  var usersDivs = null;

  if(props.users){

    let userNames = props.users.map(u => {
      let nameArray = u.name.split(' ');
      return {
        'first_name': nameArray[0],
        'last_name': nameArray[1] ? nameArray[1] : ''
      }
    });

    var sorted = userNames.sort((a,b) => {
      return a[props.sortOn].localeCompare(b[props.sortOn]);
    });

    usersDivs = sorted.filter(function(u){
      return !props.firstNameFilter || 
      (props.firstNameFilter && 
      u.first_name.indexOf(props.firstNameFilter) > -1);
    });

    usersDivs = usersDivs.map(function(u){
      return <div>{u.first_name} {u.last_name}</div>
    })
  }
  return (
      <div>
       {usersDivs}
      </div>
  );
}

export default Users;