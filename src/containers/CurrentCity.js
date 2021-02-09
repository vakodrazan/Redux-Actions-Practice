import { connect } from "react-redux"
import CurrentCity from "../components/CurrentCity"

function mapStateToProps(globalState) {
    return {
        text: globalState.currentCity
    }
}

export default connect(mapStateToProps, null)(CurrentCity)