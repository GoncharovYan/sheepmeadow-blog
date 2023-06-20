import { render } from '@testing-library/react';
import axios from 'axios';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Routes, Route, NavLink } from 'react-router-dom';
import ShowGames from '../../../components-ui/Welcome/CShowGames';
import { uploadGamesActionCreator } from '../../../state/reducers/gamesReducer';

let mapStateToProps = (state) => {
    return {
        games: state.games.list,
        tabs: state.welcome.showGames.tabs,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        uploadGames: (games) => {
            dispatch(uploadGamesActionCreator(games));
        }
    }
}

const ShowGamesContainer = connect(mapStateToProps, mapDispatchToProps)(ShowGames);

export default ShowGamesContainer;