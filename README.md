
### Intro to Redux Actions
This project is designed to help practice using redux actions to control data that is changed through user interactions. On the left hand side of the page is a collection of different inputs that are available on a web page. When the user interacts with the input it will change some data that should update the right hand side of the page. All you need to do is build the redux containers such that it will connect redux actions and data to the components. You do not need to alter the existing components themselves to complete this project.

![screenshot](/public/img/screenshot.png)

### Setup
* fork
* clone
* npm install
* npm start

### Key vocabulary
Redux actions, reducers, store & containers. mapStateToProps and mapDispatchToProps.

### Objective
* Use the inputs and buttons on the left side of the page to modify the UI on the right side of the page

### Evidence of Completion
* Components inside `App.js` have been replaced by containers.

### Sub Objectives
  * Clicking on the button `Increase Counter By One` should increment the `Counter` by 1
  * Clicking on the button `Decrease Counter By One` should decrease the `Counter` by 1
  * Inputting text inside the `Enter Special Text` field display a value next to `Special Text`
  * Right side of page should display users assigned to the `state` object in `state.js`
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


###  Reducers
  * Locate the reducers file in reducers/index.js
  * Create a reducer for each piece of state listed below. Three examples are already provided in the file
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
  * Each reducer should return a modified state based on action type
  * Each reducer should return a default state
  * Combine reducers and export

### Create Actions
  * Locate the actions file in actions/index.js
  * Create a action for each piece of state.
  * Each action should return a `type` and `value` property

### Provide store to components
  * In index.js:
    * Import Provider from react-redux
    * Import store from store.js
    * Use Provider component to wrap App
    * Make sure there is no whitespace between Provider and App
    * Give Provider a prop “store” and the value of the store

### Containers
  * Leave the components alone and create containers to interact with your new Redux logic.
  * In the container folder, create a container file for the following components:
    * SpecialTextContainer.js
      * map a prop called `text` to the state `specialText`
    * UsersContainer.js
      * map a prop called `users` to the state `users`
      * map a prop called `firstNameFilter` to the state `searchText`
      * map a prop called `sortOn` to the state `currentUserSort`
    * CounterContainer.js
      * map a prop called `count` to the state `currentCount`
    * CurrentCityContainer.js
      * map a prop called `text` to the state `currentCity`
    * ThermostatContainer.js
      * map a prop called `temp` to the state `currentTemp`
    * ImagePreviewContainer.js
      * map a prop called `URL` to the state `imagrUrl`
      * map a prop called `scale` to the state `imageScale`
    * ModalContainer.js
      * map a prop called `displayModal` to the state `displayModal`
    * UserButtonsContainer.js
      * import `addUser` and `removeUser` action
      * map prop `add` to action `addUser`
      * map prop `remove` to action `removeUser`
    * CityDropDownContainer.js
      * import `setCurrentCity` action
      * map prop `set` to action `setCurrentCity`
    * CounterButtonContainer.js
      * import the increaseCounter and decreaseCounter actions
      * map prop `increase` to action `increaseCounter`
      * map prop `decrease` to action `decreaseCounter`
    * SearchTextBoxContainer.js
      * import `setSearchText` action
      * map prop `set` to action `setSearchText`
    * ChangeTemperatureContainer.js
      * import `setTemp` action
      * map prop `set` to action `setTemp`
    * ImageUrlTextBoxContainer.js
      * import `setImageUrl` action
      * map prop `set` to action `setImageUrl`
    * SortUsersContainer.js
      * import `setCurrentUserSort` action
      * map prop `set` to action `setCurrentUserSort`
    * ScaleImageContainer.js
      * import `setImageScale` action
      * map prop `set` to action `setImageScale`
    * ShowModalContainer.js
      * import `toggleModal` action
      * map prop `toggleModal` to action `toggleModal` Show
    * ModalContainer.js
      * import `toggleModal` action
      * map prop `toggleModal` to action `toggleModal`
  * Import the appropriate component, actions and state props into the container file
  * When needed, create a mapStateToProps function to map props to the appropriate state
  * When needed, create a mapDispatchToProps object to map props to the appropriate actions
  * Export the container using the react-redux `connect` function

### App
  * Change App.js to use the containers you created instead of components

### Bonus - Add Fetch
Currently, the users are hard coded in the state.js file. Change that data so it is coming from an api. https://jsonplaceholder.typicode.com/users
* Things to consider:
  * We should know how to make a fetch call by now. Where does the fetch call go? 
  * What do you do with the data when the fetch call is complete? Not setState.
  * Is there an action message that could represent that the redux store needs to be updated with the list of users you just fetched from the api.
  * Does any reducer need to be aware of this message?


