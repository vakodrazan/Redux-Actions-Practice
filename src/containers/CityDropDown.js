import { connect } from "react-redux"
import { setCurrentCity } from "../actions"
import CityDropDown from "../components/CityDropDown"

const mapDispatchToProps = {
    set: setCurrentCity 
}

export default connect((state) => ({currentCity: state.currentCity}), mapDispatchToProps)(CityDropDown)