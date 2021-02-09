import { connect } from "react-redux"
import { setImageUrl } from "../actions"
import ImageUrlTextBox from "../components/ImageUrlTextBox"

const mapDispatchToProps = {
    set: setImageUrl 
}

export default connect(null, mapDispatchToProps)(ImageUrlTextBox)