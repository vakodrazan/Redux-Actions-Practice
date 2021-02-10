import { connect } from "react-redux"
import { setCurrentCity } from "../actions"
import CityDropDown from "../components/CityDropDown"

export default connect((state) => ({currentCity: state.currentCity}), {set: setCurrentCity })(CityDropDown)