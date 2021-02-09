import { connect } from 'react-redux';
import SpecialText from "../components/SpecialText";

//map a prop called text to the state specialText
function mapStateToProps(globalState){
  return {
    text: globalState.specialText
  }
}

export default connect(mapStateToProps, null)(SpecialText);