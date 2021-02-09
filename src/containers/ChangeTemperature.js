import { connect } from "react-redux"
import ChangeTemperature from "../components/ChangeTemperature";
import { setTemp } from "../actions"

const mapDispatchToProps = {
    set: setTemp
}

export default connect(null, mapDispatchToProps)(ChangeTemperature)