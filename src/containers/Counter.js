import Counter from "../components/Counter"
import { connect } from 'react-redux';

export default connect( (globalState) => ({count: globalState.currentCount,}), null)(Counter)