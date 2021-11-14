import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import phonebookReducer from "./phonebook/phonebook-reducer";

import logger from "redux-logger";

// const rootReducer = combineReducers({
//     phonebok: phonebookReducer,

// })
const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: phonebookReducer,

  middleware,

  devTools: process.env.NODE_ENV === "development",
});

export default store;
