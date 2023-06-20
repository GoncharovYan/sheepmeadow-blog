import communityReducer from "./reducers/communityReducer";
import SankerClassicPic from "../sources/img/games/sankerClassic.png";
import Sanker2Pic from "../sources/img/games/sanker2.png";
import OverallPic from "../sources/img/moroccan-flower-dark.png";

import FirstPostImage from "../sources/img/posts/4.jpg";
import SecondPostImage from "../sources/img/posts/5.jpg";

let store = {
    rerender()  {
        console.log("asd");
    },
    
    _state: {
        games: {
            cards: [
                {title: "Sanker 2", image: Sanker2Pic, category: "endure"},
                {title: "Sanker Classic", image: SankerClassicPic, category: "awful"},
                {title: "Sanker 2", image: Sanker2Pic, category: "endure"},
                {title: "Sanker Classic", image: SankerClassicPic, category: "awful"},
            ],
        },

        welcome: {
            libraryTabs: [
                {title: "all games", link: "all"},
                {title: "awful games", link: "awful"},
                {title: "games you can endure", link: "endure"},
                {title: "actually good games", link: "good"},
            ],
        },

        blog: {
            posts: [
                {image: FirstPostImage, title: "First post", description: "Hello!", link: ""},
                {image: SecondPostImage, title: "Whoao it's another post?", description: "Yes, it is!", link: ""},
                {image: FirstPostImage, title: "I like pizza", description: "With ananas too", link: ""},
                {image: SecondPostImage, title: "How many day are gone", description: "before we met again", link: ""},
                {image: FirstPostImage, title: "123", description: "222", link: ""},
                {image: "", title: "222", description: "321", link: ""},
                {image: "", title: "222", description: "321", link: ""},
            ]
        },
        
        community: {
            raw_chats: [{title:'Sanker Classic', url:'sanker-classic', image: SankerClassicPic},
            {title:'Sanker 2',  url:'sanker-2', image: Sanker2Pic},
            {title:'Overall',  url:'overall', image: OverallPic},],
        
            raw_messages: [{message: "Hello!"},
            {message: "Potato is better than cabbage"},
            {message: "Please leave if you don't agree."},
            {message: "Hi, this message about Sanker Classic"},
            {message: "This game is suck"},
            {message: "Let's talk about Sanker 2..."},],
    
            tmp_message: "",
        },
    },
    
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this.rerender = observer;
    },

    dispatch(action) {
        this._state.community = communityReducer(this._state.community, action);
        this.rerender(this._state);
    }
    
}

export default store;