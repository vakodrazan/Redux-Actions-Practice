import { connect } from "react-redux"
import ShowModal from "../components/ShowModal"
import { toggleModal } from "../actions"

const mapDisPatchToProps = {toggleModal}
export default connect(null, mapDisPatchToProps)(ShowModal)