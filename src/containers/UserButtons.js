import { connect } from "react-redux"
import { addUser, removeUser  } from "../actions"
import UserButtons from "../components/UserButtons"

const mapDispatchToProps = {
    add: addUser,
    remove: removeUser,
}

export default connect(null, mapDispatchToProps)(UserButtons)