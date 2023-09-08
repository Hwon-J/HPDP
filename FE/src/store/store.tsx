import { configureStore } from "@reduxjs/toolkit";
import sampleSlice from "./sample-slice";
//슬라이스 import

const store = configureStore({
  reducer: {
    sample: sampleSlice.reducer,
    // 슬라이스 리듀서 이름 지정하고 추가.
  },
});

export default store;
