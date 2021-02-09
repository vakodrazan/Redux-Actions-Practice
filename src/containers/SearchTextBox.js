import { connect } from "react-redux";
import { setSearchText } from "../actions";
import SearchTextBox from "../components/SearchTextBox";

export default connect(null, {set: setSearchText})(SearchTextBox)