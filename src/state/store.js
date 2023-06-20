import { combineReducers, legacy_createStore as createStore} from "redux";
import blogReducer from "./reducers/blogReducer";
import communityReducer from "./reducers/communityReducer";
import gamesReducer from "./reducers/gamesReducer";
import userReducer from "./reducers/userReducer";
import welcomeReducer from "./reducers/welcomeReducer";

let reducers = combineReducers({
    welcome: welcomeReducer,
    games: gamesReducer,
    blog: blogReducer,
    community: communityReducer,
    user: userReducer,
    });
    
let store = createStore(reducers);

export default store;