
const initialState = [];

function home(state = initialState, action) {

    switch (action.type) {

        case 'CG':

            return action.data;
        default:

            return state;
    }
}

export default home;