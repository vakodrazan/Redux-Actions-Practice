import { connect } from "react-redux"
import { toggleModal } from "../actions"
import Modal from "../components/Modal"

const mapStateToProps = (globalState) => ({displayModal: globalState.displayModal})

const mapDispatchToProps = {
    toggleModal
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)