import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, View } from "react-native";

const GreetingCard = () => {
  return (
    <View className="mx-4 mt-6 overflow-hidden rounded-3xl">
      <BlurView
        intensity={30}
        tint="systemMaterial"
        className="flex-1 shadow-lg"
      >
        <LinearGradient
          colors={["rgba(255,255,255,0.1)", "rgba(255,255,255,0.05)"]}
          className="p-5 border border-white/20 rounded-3xl"
        >
          <View className="flex-row justify-between items-start">
            <View>
              <Text className="text-gray-300 text-sm font-medium mb-1">
                Good Morning,{" "}
                <Text className="text-white font-bold">Subhanjan</Text>
              </Text>
              <Text className="text-gray-400 text-xs">
                Perfect weather for cricket today
              </Text>
            </View>

            <View className="items-center">
              <Ionicons name="sunny" size={24} color="#FDB813" />
              <Text className="text-white font-bold text-lg mt-1">28°C</Text>
            </View>
          </View>
        </LinearGradient>
      </BlurView>
    </View>
  );
};

export default GreetingCard;
