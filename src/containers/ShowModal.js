import { connect } from "react-redux"
import ShowModal from "../components/ShowModal"
import { toggleModal } from "../actions"

export default connect(null, {toggleModal})(ShowModal)