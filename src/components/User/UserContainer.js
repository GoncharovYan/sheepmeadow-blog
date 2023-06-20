import React from 'react';
import { connect } from 'react-redux';
import User from '../../components-ui/User/CUser';

let mapStateToProps = (state) => {
    let user = state.user.users.find(el => el.id === 1);

    return {
        nickname: user.nickname,
        avatar: user.avatar,
        online: user.online,
        status: user.status,
        messages: user.messages,
        join: user.join,
        quote: user.quote,
    }
}

let mapDispatchToProps = (dispatch) => {

}

export default connect(mapStateToProps, mapDispatchToProps)(User);