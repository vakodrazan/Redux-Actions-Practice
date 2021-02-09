import { connect } from "react-redux";
import Thermostat from "../components/Thermostat";

function mapStateToProps(globalState) {
    return {
        temp: globalState.currentTemp
    }
}

export default connect(mapStateToProps, null)(Thermostat)