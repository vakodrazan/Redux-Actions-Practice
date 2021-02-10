import { connect } from "react-redux";
import { sortUsers } from "../actions";
import SortUsers from "../components/SortUsers";

export default connect((state) => ({sortUsers: state.currentUserSort}), {set: sortUsers})(SortUsers)