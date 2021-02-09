import { connect } from 'react-redux';
import { setSpecialText } from '../actions';
import SpecialTextBox from "../components/SpecialTextBox";

//map the "setSpecialText" action function to a prop function called "set"
const mapDispatchToProps = {
    set: setSpecialText
}

export default connect(null, mapDispatchToProps)(SpecialTextBox);
