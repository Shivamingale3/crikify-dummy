import { tokenStorage } from "@/constants/secureStorage";
import axios from "axios";

let isRefreshing = false;
let queue: ((token: string | null) => void)[] = [];

const resolveQueue = (token: string | null) => {
  queue.forEach((cb) => cb(token));
  queue = [];
};

export const refreshToken = async (): Promise<string> => {
  if (isRefreshing) {
    return new Promise((resolve, reject) => {
      queue.push((token) => {
        if (token) resolve(token);
        else reject();
      });
    });
  }

  isRefreshing = true;

  try {
    const refreshToken = await tokenStorage.getRefreshToken();

    const response = await axios.post(
      `${process.env.EXPO_PUBLIC_API_URL}/auth/refresh`,
      { refreshToken }
    );

    const newAccessToken = response.data.accessToken;

    await tokenStorage.setAccessToken(newAccessToken);

    resolveQueue(newAccessToken);
    return newAccessToken;
  } catch (err) {
    resolveQueue(null);
    throw err;
  } finally {
    isRefreshing = false;
  }
};
