import { AxiosInstance } from "axios";

const auth = (instance: AxiosInstance) => ({
  async getAuthUser(): Promise<any> {
    // const response = await instance.get("/auth/");
    return { token: "response" };
  },
});

export default auth;
