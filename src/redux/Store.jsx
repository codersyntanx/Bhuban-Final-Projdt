import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers";

const store = configureStore({
    reducer:{
        todo:reducers
    }
})
export default store