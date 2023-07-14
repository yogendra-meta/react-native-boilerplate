import AsyncStorage from "@react-native-async-storage/async-storage";

class Storage {
  async setToken(token: string) {
    await AsyncStorage.setItem("token", token);
  }

  async getToken() {
    return await AsyncStorage.getItem("token");
  }

  async removeToken() {
    await AsyncStorage.removeItem("token");
  }
}

const storage = new Storage();
export default storage;
