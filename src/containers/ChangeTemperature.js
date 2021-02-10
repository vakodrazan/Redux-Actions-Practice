import { connect } from "react-redux"
import ChangeTemperature from "../components/ChangeTemperature";
import { setTemp } from "../actions"

export default connect(null, {set: setTemp})(ChangeTemperature)