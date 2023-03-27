import { configureStore } from "@reduxjs/toolkit";
import { testReducer } from "./reducer";

export const store = configureStore({
  reducer: { test: testReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunkDispatch = typeof store.dispatch;
// export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;

