import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const ActionCard = ({ title, subtitle, icon, color, buttonText }: any) => (
  <View className="flex-1 overflow-hidden rounded-2xl">
    <BlurView intensity={30} tint="light" className="flex-1">
      <LinearGradient
        colors={["rgba(255,255,255,0.1)", "rgba(255,255,255,0.05)"]}
        className="flex-1 border border-white/20 rounded-2xl"
      >
        <View className="h-24 justify-center items-center relative">
          {/* Enhanced Glow effect */}
          <View
            style={{ backgroundColor: color }}
            className="absolute w-20 h-20 rounded-full opacity-30 blur-2xl"
          />
          {icon}
        </View>
        <View className="p-4 items-center">
          <Text className="text-white font-bold text-center mb-1">{title}</Text>
          <Text className="text-gray-400 text-[10px] text-center mb-3">
            {subtitle}
          </Text>
          <TouchableOpacity>
            <Text
              style={{ color: color }}
              className="text-[10px] font-bold uppercase tracking-wider"
            >
              {buttonText}
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </BlurView>
  </View>
);

const ActionCards = () => {
  return (
    <View className="flex-row mx-4 mt-6 gap-4 mb-10">
      <ActionCard
        title="Add Tournament"
        subtitle="Create new tournament"
        buttonText="More About"
        color="#29B6F6"
        icon={<Ionicons name="trophy" size={40} color="#FFC107" />}
      />
      <ActionCard
        title="Book Turf"
        subtitle="View tournaments"
        buttonText="More About"
        color="#FF3D00"
        icon={<Ionicons name="calendar" size={40} color="#F06292" />}
      />
    </View>
  );
};

export default ActionCards;
