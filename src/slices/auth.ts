import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchAuthUser } from "../thunks/auth";

interface IAuthRootState {
  isLoading: boolean;
  token: string | null;
  error: boolean;
}

const initialState: IAuthRootState = {
  isLoading: false,
  token: null,
  error: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    restoreTokenLoading(state) {
      state.isLoading = true;
      state.error = false;
    },
    restoreTokenLoaded(state, action: PayloadAction<{ token: string }>) {
      state.isLoading = false;
      state.token = action.payload.token;
      state.error = false;
    },
    logoutUser(state) {
      state.isLoading = false;
      state.token = null;
      state.error = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAuthUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(
        fetchAuthUser.fulfilled,
        (state, action: PayloadAction<{ token: string }>) => {
          console.log(action.payload);
          state.isLoading = false;
          state.token = action.payload.token;
          state.error = false;
        },
      )
      .addCase(fetchAuthUser.rejected, state => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

export const { restoreTokenLoading, restoreTokenLoaded, logoutUser } =
  authSlice.actions;
export default authSlice.reducer;
