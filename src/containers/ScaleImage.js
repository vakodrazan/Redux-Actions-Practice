import { connect } from "react-redux"
import { setImageScale  } from "../actions"
import ScaleImage from "../components/ScaleImage"

const mapDispatchToState = {
    set: setImageScale 
}

export default connect(null, mapDispatchToState)(ScaleImage)