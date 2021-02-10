import { connect } from "react-redux"
import { setImageScale  } from "../actions"
import ScaleImage from "../components/ScaleImage"

export default connect(null, { set: setImageScale  })(ScaleImage)