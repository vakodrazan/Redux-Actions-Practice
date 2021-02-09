import { connect } from "react-redux"
import ImagePreview from "../components/ImagePreview"

function mapStateToProps(globalState) {
    return {
        imageUrl: globalState.imageUrl,
        scale: globalState.imageScale
    }
}

export default connect(mapStateToProps, null)(ImagePreview)