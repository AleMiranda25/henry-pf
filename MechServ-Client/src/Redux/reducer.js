import { GET_SERVICES } from "./actions";

const initialState = {
    services: [],
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SERVICES:
            return { ...state, services: action.payload}
        default:
            return {...state}
    }
}

export default rootReducer;