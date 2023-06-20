import axios from 'axios';

import SankerClassicPic from "../../sources/img/games/sankerClassic.png";
import Sanker2Pic from "../../sources/img/games/sanker2.png";

const UPLOAD_GAMES = "uploadGames";

let initialState = {
    list: [

    ],
};

const gamesReducer = (state = initialState, action) => {
    let stateCopy = {...state};
    stateCopy.list = [...state.list];

    switch (action.type) {
        case UPLOAD_GAMES:
            console.log("Uploading")
            if (!initialState.list.length) {
                action.games.forEach(el => {
                    stateCopy.list.push({
                        id: el.gameid,
                        title: el.title,
                        category: el.category,
                    });
                });
            }
            console.log(stateCopy);
            return stateCopy;

        default:
            return stateCopy;
        }
}

export const uploadGamesActionCreator = (data) => ({
    type: UPLOAD_GAMES,
    games: data,
});

export default gamesReducer;