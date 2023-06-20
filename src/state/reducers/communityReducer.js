import SankerClassicPic from "../../sources/img/games/sankerClassic.png";
import Sanker2Pic from "../../sources/img/games/sanker2.png";
import OverallPic from "../../sources/img/moroccan-flower-dark.png";

const SUBMIT_NEW_MESSAGE = "submitNewMessage";
const UPDATE_NEW_MESSAGE = "updateNewMessage";


let initialState = {
    selectors: [{title:'Sanker Classic', url:'sanker-classic', image: SankerClassicPic},
    {title:'Sanker 2',  url:'sanker-2', image: Sanker2Pic},
    {title:'Overall',  url:'overall', image: OverallPic},],

    chats: 
        [{title:'Sanker Classic', url:'sanker-classic', messages: [
            {message: "Hi, this message about Sanker Classic"},
            {message: "This game is suck"},],
            tmp_message: "",},

        {title:'Sanker 2', url:'sanker-2', messages: [
            {message: "Let's talk about Sanker 2..."},],
            tmp_message: "",},

        {title:'Overall', url:'overall', messages: [
            {message: "Potato is better than cabbage"},
            {message: "Please leave if you don't agree."},],
            tmp_message: "",},],
};

const communityReducer = (state = initialState, action) => {
    let stateCopy = {...state};
    switch (action.type) {

        case UPDATE_NEW_MESSAGE:
            stateCopy.chats = [...state.chats];
            stateCopy.chats.map((el) => {
                if (el.url === action.chatID) el.tmp_message = action.newMessage;
            });
            return stateCopy;

        case SUBMIT_NEW_MESSAGE:
            stateCopy.chats = [...state.chats];

            let chatIndex;
            stateCopy.chats.forEach((el, index) => { 
                if (el.url === action.chatID) chatIndex = index;
            });

            stateCopy.chats[chatIndex].messages = [...state.chats[chatIndex].messages];

            let message = {
                message: stateCopy.chats[chatIndex].tmp_message,
            };

            stateCopy.chats[chatIndex].messages.push(message);
            stateCopy.chats[chatIndex].tmp_message = "";

            return stateCopy;

        default:
            return state;
        }
}

export const submitNewMessageActionCreator = (id) => ({
    type: SUBMIT_NEW_MESSAGE,
    chatID: id,
 });
export const updateNewMessageActionCreator = (id, message) => ({ 
    type: UPDATE_NEW_MESSAGE,
    chatID: id,
    newMessage: message,
});

export default communityReducer;