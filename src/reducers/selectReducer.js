import { types } from "../types/types";

const initialState = {
    technologySelected: '',
    pageSelected: 1
}

export const selectReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.selectTechnology:
            return{
                ...state,
                technologySelected: action.payload
            }
            
        case types.selectPage:
            return{
                ...state,
                pageSelected: action.payload
            }    
    
        default:
            return state;
    }
}