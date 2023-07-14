// import { AxiosError } from "axios";
import { createAppAsyncThunk } from "..";
import ApiClient from "../api";
import storage from "../utils/storage";

export const fetchAuthUser = createAppAsyncThunk(
  "authUser/fetchAuthUser",
  async (onError: ((error?: Error) => void) | undefined) => {
    try {
      const authUserData = await ApiClient.auth.getAuthUser();
      await storage.setToken(authUserData.token);
      return authUserData;
    } catch (error) {
      // if (error instanceof AxiosError && error.response?.status !== 401) {
      //   if (onError) {
      //     onError(error);
      //   } else {
      //     dispatch(hasReceivedError(true));
      //   }
      // }
      throw error;
    }
  },
);

export default {};
