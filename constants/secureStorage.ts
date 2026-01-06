import * as SecureStore from "expo-secure-store";

export const tokenStorage = {
  getAccessToken: () => SecureStore.getItemAsync("accessToken"),
  getRefreshToken: () => SecureStore.getItemAsync("refreshToken"),
  setAccessToken: (token: string) =>
    SecureStore.setItemAsync("accessToken", token),
  setRefreshToken: (token: string) =>
    SecureStore.setItemAsync("refreshToken", token),
  clear: async () => {
    await SecureStore.deleteItemAsync("accessToken");
    await SecureStore.deleteItemAsync("refreshToken");
  },
};
