import {connect} from 'react-redux';
import Users from '../components/Users';

function mapStateToProps(state){
    return {
        users: state.users,
        sortOn: state.currentUserSort,
        firstNameFilter: state.searchText,
    }
}

export default connect(mapStateToProps, null)(Users)