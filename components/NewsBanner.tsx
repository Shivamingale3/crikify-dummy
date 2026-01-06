import React from "react";
import { Dimensions, Text, View } from "react-native";

const { width } = Dimensions.get("window");

const NewsBanner = () => {
  return (
    <View className="mt-6">
      <View className="px-4 mb-3 flex-row justify-between items-end">
        <Text className="text-white text-lg font-bold">Latest News</Text>
      </View>

      {/* Banner Image Placeholder with Gradient feel */}
      <View className="mx-4 h-40 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl overflow-hidden relative">
        <View className="absolute inset-0 bg-blue-900/50" />
        {/* Placeholder for the creative cricket image */}
        <View className="flex-1 justify-center items-end pr-8">
          <Text className="text-white text-3xl font-black italic tracking-tighter text-right">
            LIVE{"\n"}CRICKET
          </Text>
          <Text className="text-white text-[10px] tracking-widest text-right">
            COMING SOON
          </Text>
        </View>
        {/* Artistic element overlay (simulated) */}
        <View className="absolute left-0 bottom-0 h-full w-1/2 bg-blue-500/20 -skew-x-12" />
      </View>

      {/* Dots Indicator */}
      <View className="flex-row justify-center mt-3 gap-1.5">
        <View className="w-2 h-2 rounded-full bg-accent" />
        <View className="w-2 h-2 rounded-full bg-gray-600" />
        <View className="w-2 h-2 rounded-full bg-gray-600" />
      </View>
    </View>
  );
};

export default NewsBanner;
