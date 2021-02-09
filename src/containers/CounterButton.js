import { connect } from 'react-redux';
import CounterButton from "../components/CounterButton"
import { increaseCounter, decreaseCounter } from "../actions"

const mapDispatchToProps = {
    increase: increaseCounter,
    decrease: decreaseCounter,
}
  export default connect( null, mapDispatchToProps)(CounterButton)