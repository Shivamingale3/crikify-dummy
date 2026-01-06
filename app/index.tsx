import React from "react";
import { Image, ScrollView, StatusBar, Text, View } from "react-native";
import "../global.css";

import {
  LiquidGlassContainerView,
  LiquidGlassView,
  isLiquidGlassSupported,
} from "@callstack/liquid-glass";
import Header from "../components/Header";

const HomeScreen = () => {
  return (
    <View className="flex-1 bg-background">
      <StatusBar barStyle="light-content" />
      {/* Optional: Add a subtle efficient gradient background to enhance glass effect if needed, 
          but keeping solid background for now to match strict design unless requested */}
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        <Header />
        <View className="px-2 mt-5">
          <LiquidGlassView
            style={[
              { width: "100%", borderRadius: 20, borderWidth: 2, padding: 20 },
              !isLiquidGlassSupported && {
                backgroundColor: "rgba(255,255,255,0.2)",
                flexDirection: "row",
                alignItems: "center",
              },
            ]}
            interactive
            effect="regular"
          >
            <View className="flex-1 gap-2">
              <Text className="font-bold text-[17px] text-white">
                Good Morning, Shivam!
              </Text>
              <Text className="font-light text-[12px] text-white">
                Perfect weather for cricket today!
              </Text>
            </View>
            <View className="items-center">
              <Image
                source={require("../assets/images/icons/sun.png")}
                style={{ width: 30, height: 30 }}
              />
              <Text className="font-bold text-[15px] text-white">28° C</Text>
            </View>
          </LiquidGlassView>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

// For combining multiple glass elements
function MergingGlassElements() {
  return (
    <LiquidGlassContainerView spacing={20}>
      <LiquidGlassView style={{ width: 100, height: 100, borderRadius: 50 }} />
      <LiquidGlassView style={{ width: 100, height: 100, borderRadius: 50 }} />
    </LiquidGlassContainerView>
  );
}
