// export const GET_DETAILS = "GET_DETAILS";
// export const POST_DETAILS = "POST_DETAILS";

import { GET_DETAILS, POST_DETAILS, DELETE_DETAILS } from "../type";

const initialState = {
    details: [],
    isResponse: false,
    isDELETEdata: false,
};

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DETAILS:
            return {
                details: action.payload,
            };

        case POST_DETAILS:
            return {
                isResponse: action.payload,
            };

        case DELETE_DETAILS:
            return {
                isDELETEdata: action.payload,
            };

        default:
            return state;
    }
};

export default Reducer;

// Step-4
