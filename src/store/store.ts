import { combineReducers, createStore } from "redux";
import reducer from "./reducers/reducer";

const rootReducer = combineReducers({
    initialSum: () => reducer,
});
const store = createStore(rootReducer);

export default store;
export type rootState = ReturnType<typeof rootReducer>; 