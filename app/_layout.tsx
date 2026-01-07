import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";
import Toast from "react-native-toast-message";

import { onLogout } from "@/events/authEvents";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Provider } from "jotai";
import { Platform } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  useEffect(() => {
    const unsub = onLogout(() => {
      router.replace({ pathname: "/(auth)/login" });
    });
    return unsub;
  }, [router]);

  const SafeWrapper = Platform.OS === "ios" ? SafeAreaView : SafeAreaProvider;
  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <SafeWrapper style={{ flex: 1, backgroundColor: "transparent" }}>
        <Provider>
          <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen
              name="(auth)/login/index"
              options={{ headerShown: false }}
            />
            <Stack.Screen name="home/index" options={{ headerShown: false }} />
          </Stack>
          <StatusBar translucent backgroundColor="transparent" />
        </Provider>
        <Toast />
      </SafeWrapper>
    </ThemeProvider>
  );

  
}
