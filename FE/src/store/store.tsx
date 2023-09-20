import { combineReducers, configureStore } from "@reduxjs/toolkit";
import sampleSlice from "./sample-slice";
import uiSlice from "./ui-slice";
import userSlice from "./user-slice";
import transHistorySlice from "./transHistory-slice";
//슬라이스 import
import { persistReducer, PERSIST, PURGE } from "redux-persist";
import storage from "redux-persist/lib/storage";

// test code
const reducers = combineReducers({
  sample: sampleSlice.reducer,

  ui: uiSlice.reducer,
  user: userSlice.reducer,
  transHistory: transHistorySlice.reducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    //미들웨어 작성시 에러 주의
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST, PURGE],
      },
    }),
});

export default store;
