import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SvgGradientBg from "../homescreen/GradientBg";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "transparent" }}>
      <SvgGradientBg />
      <SafeAreaView style={{ flex: 1 }}>{children}</SafeAreaView>
    </View>
  );
};

export default RootLayout;
