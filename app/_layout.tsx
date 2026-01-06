import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";

import { onLogout } from "@/events/authEvents";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  useEffect(() => {
    const unsub = onLogout(() => {
      router.replace({ pathname: "/(auth)/login" });
    });
    return unsub;
  }, [router]);

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <SafeAreaProvider style={{ flex: 1 }}>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen
            name="(auth)/login/index"
            options={{ headerShown: false }}
          />
          <Stack.Screen name="home/index" options={{ headerShown: false }} />
        </Stack>
        <StatusBar translucent backgroundColor="transparent" />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
