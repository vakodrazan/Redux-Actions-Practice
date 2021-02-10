import { connect } from "react-redux"
import { setImageUrl } from "../actions"
import ImageUrlTextBox from "../components/ImageUrlTextBox"

export default connect(null, { set: setImageUrl })(ImageUrlTextBox)