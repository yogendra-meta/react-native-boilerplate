import { createAsyncThunk } from "@reduxjs/toolkit";
import type store from "./store";

export type RecursivePartial<T> = {
  [P in keyof T]?: T[P] extends (infer U)[]
    ? RecursivePartial<U>[]
    : T[P] extends object
    ? RecursivePartial<T[P]>
    : T[P];
};

export interface AsyncThunkConfig {
  state: RootState;
  dispatch: Dispatch;
  rejectValue?: unknown;
}

export const createAppAsyncThunk =
  createAsyncThunk.withTypes<AsyncThunkConfig>();

export type Dispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
