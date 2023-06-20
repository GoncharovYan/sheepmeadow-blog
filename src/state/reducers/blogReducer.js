import FirstPostImage from "../../sources/img/posts/4.jpg";
import SecondPostImage from "../../sources/img/posts/5.jpg";

let initialState = {
    posts: [
        {id: 0, image: FirstPostImage, title: "First post", description: "Hello!", link: ""},
        {id: 1, image: SecondPostImage, title: "Whoao it's another post?", description: "Yes, it is!", link: ""},
        {id: 2, image: FirstPostImage, title: "I like pizza", description: "With ananas too", link: ""},
        {id: 3, image: SecondPostImage, title: "How many day are gone", description: "before we met again", link: ""},
        {id: 4, image: FirstPostImage, title: "123", description: "222", link: ""},
        {id: 5, image: "", title: "222", description: "321", link: ""},
        {id: 6, image: "", title: "222", description: "321", link: ""},
    ]
};

const blogReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state;
        }
}

export default blogReducer;