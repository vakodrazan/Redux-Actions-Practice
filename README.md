
### Intro to Redux Actions
This project is designed to help practice using redux actions to control data that is changed through user interactions. On the left hand side of the page is a collection of different inputs that are available on a web page. When the user interacts with the input it will change some data that should update the right hand side of the page. All you need to do is build the redux containers such that it will connect redux actions and data to the components. You do not need to alter the existing components themselves to complete this project.

![screenshot1](/public/img/screenshot.png)

### Setup
* fork
* clone
* npm install
* npm start

### Key vocabulary
Redux actions, reducers, store & containers. mapStateToProps and mapDispatchToProps.

### Objective
* Use the inputs and buttons on the left side of the page to modify the UI on the right side of the page.

### Evidence of Completion
* Every component inside `App.js` has been replaced by a container.

### Sub Objectives
  * Clicking on the button `Increase Counter By One` should increment the `Counter` by 1
  * Clicking on the button `Decrease Counter By One` should decrease the `Counter` by 1
  * Inputting text inside the `Enter Special Text` field display a value next to `Special Text`
  * Inputting text inside the `name` field should filter users by first name
  * Selecting a sort option inside `Sort Users` should sort users by first or last name
  * Clicking on the button `Add User` should add a single user to the user list
  * Clicking on the button `Remove User` should remove a single user from the user list
  * Selecting a city in the `Select Current City` dropdown should display a value next to `Current City`
  * Inputting a number inside the `Temp` field should change the tempature assign to the donut chart
  * Inputting a image url inside the `url` field should display a image under `Image Preview`
  * Moving the slider should change the size of the image displayed under `Image Preview`
  * Clicking `Display Modal` should display the modal nested inside the `Modal` component
  * Do one thing at a time, save and refresh to check for errors

### Sub Objective checklist
* Create the desired action
* Create or modify a reducer to handle the action
* Create or modify a container to map the action to the desired component prop function
* Create or modify a container to map the reducer state to the desired component prop
* Replace components in `App.js` with appropriate containers

### How to create Actions
  * Locate the actions file in actions/index.js
  * Create a action for each piece of state.
  * Each action should return a `type` and `value` property

###  How to create Reducers
  * Locate the reducers file in reducers/index.js
  * Create or modify reducer for each piece of state listed below.
    * currentCount,
    * currentCity,
    * searchText,
    * currentTemp,
    * displayModal,
    * imageUrl,
    * currentUserSort,
    * imageScale,
    * users,
    * specialText
  * Reducers take 2 parameters: `state`, and `action`
  * Reducers should return a state value based on action type
  * Reducers should return a default state value
  * Reducers should be combined and exported

### How to create Containers
  * Leave the components alone and create containers to interact with your new Redux logic.
  * In the `containers` folder, create a container file for the following components:
    * SpecialText.js
      * map a prop called `text` to the state `specialText`
    * Users.js
      * map a prop called `users` to the state `users`
      * map a prop called `firstNameFilter` to the state `searchText`
      * map a prop called `sortOn` to the state `currentUserSort`
    * Counter.js
      * map a prop called `count` to the state `currentCount`
    * CurrentCity.js
      * map a prop called `text` to the state `currentCity`
    * Thermostat.js
      * map a prop called `temp` to the state `currentTemp`
    * ImagePreview.js
      * map a prop called `URL` to the state `imagrUrl`
      * map a prop called `scale` to the state `imageScale`
    * Modal.js
      * map a prop called `displayModal` to the state `displayModal`
    * UserButtons.js
      * map prop `add` to `addUser` action
      * map prop `remove` to `removeUser` action
    * CityDropDown.js
      * map prop `set` to `setCurrentCity` action
    * CounterButton.js
      * map prop `increase` to `increaseCounter` action
      * map prop `decrease` to `decreaseCounter` action
    * SearchTextBox.js
      * map prop `set` to `setSearchText` action
    * ChangeTemperature.js
      * map prop `set` to action `setTemp` action
    * ImageUrlTextBox.js
      * map prop `set` to `setImageUrl`  action
    * SortUsers.js
      * map prop `set` to `setCurrentUserSort` action
    * ScaleImage.js
      * map prop `set` to action `setImageScale` action
    * ShowModal.js
      * map prop `toggleModal` to `toggleModal` action
    * Modal.js
      * map prop `toggleModal` to `toggleModal` action
  * Import the appropriate component and actions into the container file
  * Create a mapStateToProps function to map props to the appropriate state
  * Create a mapDispatchToProps object to map props to the appropriate actions
  * Export the container using the react-redux `connect` function

### App
  * Modify App.js to use the containers you created instead of components

### Bonus - Add Fetch
Currently, the users are hard coded in the state.js file. Change that data so it is coming from an api. https://jsonplaceholder.typicode.com/users
* Things to consider:
  * We should know how to make a fetch call by now. Where does the fetch call go? 
  * What do you do with the data when the fetch call is complete? Not setState.
  * Is there an action message that could represent that the redux store needs to be updated with the list of users you just fetched from the api.
  * Does any reducer need to be aware of this message?


