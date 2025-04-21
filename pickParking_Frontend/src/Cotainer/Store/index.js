import { configureStore } from "@reduxjs/toolkit";
// import tokenMiddleware from "./tokenMiddleWare/MiddleWare";

import reducers from "../reducers/index";

const Store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
  // getDefaultMiddleware().concat(tokenMiddleware),
});

export default Store;
