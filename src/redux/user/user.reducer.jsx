//reducer is a func that takes 2 args
//state obj: last state or init state which is an obj that we trying to store
//action obj: object that has a type which is a string, tell us what specific action is
//returns a new state 
const INITIAL_STATE = {
    currentUser: null
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            }

        default:
            return state;
    }
  
}

export default userReducer;

//depending on what the type of action is,