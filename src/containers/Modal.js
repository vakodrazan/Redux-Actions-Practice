import { connect } from "react-redux"
import { toggleModal } from "../actions"
import Modal from "../components/Modal"

export default connect((globalState) => ({displayModal: globalState.displayModal}), {toggleModal})(Modal)