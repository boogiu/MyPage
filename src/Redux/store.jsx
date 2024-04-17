import { createStore } from "redux"
import reducer from "./Reducers/reducer"

let store = createStore(reducer);

export default store;
