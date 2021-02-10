import { connect } from "react-redux"
import CurrentCity from "../components/CurrentCity"


export default connect( (globalState) => ({text: globalState.currentCity}), null)(CurrentCity)