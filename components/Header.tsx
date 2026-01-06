import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const Header = () => {
  return (
    <View className="w-full flex-row items-center justify-between px-4 py-2 bg-background pt-12">
      {/* Menu Icon */}
      <TouchableOpacity className="w-[33.3%]">
        <Ionicons name="menu" size={28} color="white" />
      </TouchableOpacity>

      {/* Logo */}
      <View className="w-[33.3%] items-center">
        <Text className="text-white text-2xl font-bold font-serif">
          Crikify
        </Text>
        <Text className="text-gray-400 text-xs">(by Bencos)</Text>
      </View>

      {/* Right Side Icons */}
      <View className="flex-row items-center gap-4 w-[33.3%]">
        {/* Notification */}
        <TouchableOpacity className="relative">
          <View className="bg-card p-2 rounded-xl border border-gray-700">
            <Ionicons name="notifications-outline" size={24} color="white" />
          </View>
          <View className="absolute -top-1 -right-1 bg-secondary w-4 h-4 rounded-full justify-center items-center border border-background">
            <Text className="text-white text-[10px] font-bold">1</Text>
          </View>
        </TouchableOpacity>

        {/* Coins */}
        <View className="bg-accent/20 flex-row items-center px-3 py-1.5 rounded-full border border-accent/30 bg-blue-500">
          {/* Using a coin icon placeholder */}
          <View className="bg-yellow-400 rounded-full w-4 h-4 mr-2 items-center justify-center border border-yellow-600">
            <Text className="text-[10px] font-bold text-yellow-800">$</Text>
          </View>
          <Text className="text-white font-bold ml-1">1,250</Text>
        </View>
      </View>
    </View>
  );
};

export default Header;
