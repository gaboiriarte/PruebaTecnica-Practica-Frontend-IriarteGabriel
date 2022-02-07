import { types } from "../types/types";

export const selectTechnology = (technology) =>({
    type: types.selectTechnology,
    payload: technology
})

export const selectPage = (page) => ({
    type: types.selectPage,
    payload: page
})