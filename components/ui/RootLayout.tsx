import React from "react";
import { View, ViewStyle } from "react-native";
import SvgGradientBg from "../homescreen/GradientBg";

const RootLayout = ({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: ViewStyle;
}) => {
  return (
    <View style={{ flex: 1, backgroundColor: "transparent", ...style }}>
      <SvgGradientBg />
      <View className={className}>{children}</View>
    </View>
  );
};

export default RootLayout;
