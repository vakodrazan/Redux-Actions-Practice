import Counter from "../components/Counter"
import { connect } from 'react-redux';

function mapStateToProps(globalState) {
    return {
      count: globalState.currentCount,
    }
}

export default connect( mapStateToProps, null)(Counter)