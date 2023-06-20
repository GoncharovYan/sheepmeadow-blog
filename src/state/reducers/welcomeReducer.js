let initialState = {
    showGames: {
        tabs: [
            {id: 0, title: "all games", link: "all"},
            {id: 1, title: "awful games", link: "awful"},
            {id: 2, title: "games you can endure", link: "endure"},
            {id: 3, title: "actually good games", link: "good"},
        ],
    },

    lastNews: {
        newsCount: 5,
    }
};

const welcomeReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state;
        }
}

export default welcomeReducer;