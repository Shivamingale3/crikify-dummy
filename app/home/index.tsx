import React from "react";
import { ScrollView, View } from "react-native";

import GreetingCard from "@/components/homescreen/GreetingCard";
import Header from "@/components/homescreen/Header";
import RootLayout from "@/components/ui/RootLayout";

const HomeScreen = () => {
  return (
    <RootLayout>
      <ScrollView className="w-full h-full">
        <Header />
        <View className="px-2 mt-5">
          <GreetingCard />
        </View>
      </ScrollView>
    </RootLayout>
  );
};

export default HomeScreen;

// For combining multiple glass elements
// function MergingGlassElements() {
//   return (
//     <LiquidGlassContainerView spacing={20}>
//       <LiquidGlassView style={{ width: 100, height: 100, borderRadius: 50 }} />
//       <LiquidGlassView style={{ width: 100, height: 100, borderRadius: 50 }} />
//     </LiquidGlassContainerView>
//   );
// }
