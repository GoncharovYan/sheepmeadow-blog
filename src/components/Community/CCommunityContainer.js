import React from 'react';
import { connect } from 'react-redux';
import Community from '../../components-ui/Community/CCommunity';
import { submitNewMessageActionCreator, updateNewMessageActionCreator } from '../../state/reducers/communityReducer';

let mapStateToProps = (state) => {
    return({
        selectors: state.community.selectors,
        chats: state.community.chats,
    })
}

let mapDispatchToProps = (dispatch) => {

    return {
        sendMessage: (chatID) => {
            dispatch(submitNewMessageActionCreator(chatID));
        },
        updateMessage: (chatID, message) => {
            dispatch(updateNewMessageActionCreator(chatID, message));
        },
    };
}

const CommunityContainer = connect(mapStateToProps, mapDispatchToProps)(Community);

export default CommunityContainer;