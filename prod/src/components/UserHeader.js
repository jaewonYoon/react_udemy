import React from 'react';
import {connect} from 'react-redux';
import {fetchUser} from '../actions';

class UserHeader extends React.Component{
    componentDidMount(){
        const userId = this.props.userId; 
        this.props.fetchUser(userId);
        console.log(this.props.user);
    }

    render(){
        return <div>{this.props.user.name}</div>
    }
}

const mapStateToProps = (state) => {
    return {user: state.posts}
}
export default connect(mapStateToProps,{fetchUser})(UserHeader);