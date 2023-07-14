import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import logger from "redux-logger";
import AuthReducer from "./slices/auth";

export const rootReducer = combineReducers({
  authUser: AuthReducer,
});

const store = configureStore({
  reducer: rootReducer,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
