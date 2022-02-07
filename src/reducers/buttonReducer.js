import { types } from "../types/types";

const initialState = {
    buttonFavsSelected: false
}

export const buttonReducer = (state = initialState, action) =>{
    switch (action.type) {
        case types.buttonFavsNotices:
            return {
                ...state,
                buttonFavsSelected: true
            }
            
        case types.buttonAllNotices: 
            return {
                ...state,
                buttonFavsSelected: false
            }
    
        default:
            return state;
    }
}