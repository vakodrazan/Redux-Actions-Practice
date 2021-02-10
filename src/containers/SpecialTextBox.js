import { connect } from 'react-redux';
import { setSpecialText } from '../actions';
import SpecialTextBox from "../components/SpecialTextBox";

//map the "setSpecialText" action function to a prop function called "set"

export default connect(null, {set: setSpecialText})(SpecialTextBox);
