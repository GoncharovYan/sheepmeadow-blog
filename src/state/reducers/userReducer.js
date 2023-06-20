import Avatar1 from "../../sources/img/sheep.png";

const SET_USERS = "setUsers";

const status = {
    CLUB_BUDDY: "Club buddy",
    DEVELOPER: "Developer",
    TESTER: "Tester",
}

let initialState = {
    users: [
        {
            id: 1, nickname: "John Carmack", avatar: Avatar1, online: false,
            status: status.CLUB_BUDDY, messages: 32, join: "11.08.22",
            quote: "Very good place i think yeah",
        },
    ],
};

const userReducer = (state = initialState, action) => {
    let stateCopy = {...state};

    switch(action.type) {
        case SET_USERS:
            console.log(stateCopy);
            break;
    }

    return stateCopy;
};

export const setUsersActionCreator = (users) => ({
    type: SET_USERS,
    users: users,
});

export default userReducer;