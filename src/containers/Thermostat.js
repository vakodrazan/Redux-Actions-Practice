import { connect } from "react-redux";
import Thermostat from "../components/Thermostat";


export default connect((globalState) => ({temp: globalState.currentTemp}), null)(Thermostat)