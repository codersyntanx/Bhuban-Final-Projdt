import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers";
const store = configureStore({
reducer:{
    counter:reducers
}
})

export default store;