/*
    {
        notices : [],
        favsNotices : []
    }
 */

import { types } from "../types/types";

const initialState = {
    notices: [],
    favsNotices: []
}

export const noticeReducer = (state = initialState,action) => {
    switch (action.type) {
        case types.noticeSetNews:
            return {
                ...state,
                notices: [...action.payload]
            }
            
        case types.noticeAddFavNews:
            return {
                ...state,
                favsNotices: [...state.favsNotices, action.payload]
            }
        
        case types.noticeDeleteFavNews:
            return {
                ...state,
                favsNotices: state.favsNotices.filter(notice => notice.objectID !== action.payload)
            }
        case types.noticeLoadFavNews:
            return {
                ...state,
                favsNotices: action.payload
            }
        default:
            return state;
    }
}