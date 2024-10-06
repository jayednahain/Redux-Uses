const { userData } = require("./initialStates");

const initialState = {
    userData: null, // will store user data after successful login
    loading: false,  // flag to show/hide loading modal
    error: null,     // store any error messages
};

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_REQUEST':
            return { ...state, loading: true, error: null };
        case 'LOGIN_SUCCESS':
            return { ...state, loading: false, userData: action.payload };
        case 'LOGIN_FAILURE':
            return { ...state, loading: false, error: action.payload };
        case 'LOGOUT':
            return initialState;
        default:
            return state;
    }
};

export { UserReducer }