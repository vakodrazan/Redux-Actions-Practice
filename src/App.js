import React from 'react';

// containers
import Users from "./containers/Users";

// components
import CounterButton from "./containers/CounterButton";
import SpecialTextBox from "./containers/SpecialTextBox";
import Counter from "./containers/Counter";
import SpecialText from "./containers/SpecialText";
import UserButtons from "./containers/UserButtons";
import Thermostat from "./containers/Thermostat";
import ChangeTemperature from "./containers/ChangeTemperature";
import ImagePreview from "./containers/ImagePreview";
import ImageUrlTextBox from "./containers/ImageUrlTextBox";
import CurrentCity from "./containers/CurrentCity";
import CityDropDown from "./containers/CityDropDown";
import SearchTextBox from "./containers/SearchTextBox";
import SortUsers from "./containers/SortUsers";
import ScaleImage from "./containers/ScaleImage";
import Modal from "./containers/Modal";
import ShowModal from "./containers/ShowModal";

function App() {
  return (
      <div className="App">
        <div className="container">
          <h2>Inputs</h2>
          <CounterButton />
          <br />
          <SpecialTextBox />
          <br/>
          <SearchTextBox />
          <br/>
          <SortUsers />
          <br />
          <UserButtons />
          <br />
          <CityDropDown />
           <br />
          <ChangeTemperature />
          <br />
          <ImageUrlTextBox />
          <br />
          <ScaleImage />
          <br />
          <ShowModal />
        </div>
        <div className="container">
          <h2>Outputs</h2>
          <Counter />
          <br />
          <SpecialText />
          <br />
          <CurrentCity />
          <br />
          <Thermostat />
          <br />
          <ImagePreview />
          <br />
          
          
        </div>
        <div className="container">
          <h2>Users</h2>
          <Users />
        </div>
        <Modal />
      </div>
  );
}
export default App;