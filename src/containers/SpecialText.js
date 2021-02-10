import { connect } from 'react-redux';
import SpecialText from "../components/SpecialText";

//map a prop called text to the state specialText

export default connect((globalState) => ({text: globalState.specialText}), null)(SpecialText);