import React from 'react';
import { useEffect } from 'react';
import uuid from 'uuid';

function Users({ users, sortOn, firstNameFilter, getUsers }) {
  let usersDivs = null;
  let sorted = [];

  useEffect(() => {
    getUsers();
  }, [])

  if(users){

    let userNames = users.map(u => {
      let nameArray = u.name.split(' ');
      return {
        'first_name': nameArray[0],
        'last_name': nameArray[1] ? nameArray[1] : ''
      }
    });

    if(sortOn){
      userNames = userNames.sort((a,b) => {
        return a[sortOn].localeCompare(b[sortOn]);
      });
    }

    usersDivs = userNames.filter(function(u){
      return !firstNameFilter || 
      (firstNameFilter && 
      u.first_name.indexOf(firstNameFilter) > -1);
    });

    usersDivs = usersDivs.map(function(u){
      return <div key={uuid()}>{u.first_name} {u.last_name}</div>
    })
  }
  return (
      <div>
       {usersDivs}
      </div>
  );
}

export default Users;