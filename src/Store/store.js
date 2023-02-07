import { createStore } from "redux"
import reducers from "./Reducer/index"

export const store = createStore(
    reducers, 
    {}
)