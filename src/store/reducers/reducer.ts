import { decreaseSum, increaseSum } from "../types"

const initialState = {
    sum: 0,
}

export default (state = initialState, {type, payload}) => {

    if(type === increaseSum) {
        return {...state, sum: 1}
    }
    if(type === decreaseSum) {
        return {...state, sum: payload}
    }

    return state
}