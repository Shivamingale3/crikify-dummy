import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, View } from "react-native";

const StatCard = ({
  icon,
  value,
  label,
  color,
}: {
  icon: any;
  value: string;
  label: string;
  color: string;
}) => (
  <View className="flex-1 overflow-hidden rounded-2xl">
    <BlurView intensity={30} tint="light" className="flex-1">
      <LinearGradient
        colors={["rgba(255,255,255,0.1)", "rgba(255,255,255,0.05)"]}
        className="flex-1 p-3 items-center justify-center border border-white/20 rounded-2xl min-h-[100px]"
      >
        {icon}
        <Text className="text-white text-xl font-bold mt-2">{value}</Text>
        <Text className="text-gray-400 text-[10px] text-center">{label}</Text>
      </LinearGradient>
    </BlurView>
  </View>
);

const StatsRow = () => {
  return (
    <View className="flex-row mx-4 mt-6 gap-3">
      <StatCard
        icon={<Ionicons name="trophy" size={20} color="#FFC107" />}
        value="12"
        label="Tournaments"
        color="#FFC107"
      />
      <StatCard
        icon={<Ionicons name="flash" size={20} color="#FFD700" />}
        value="145.6"
        label="Strike Rate"
        color="#FFD700"
      />
      <StatCard
        icon={
          <MaterialCommunityIcons name="cricket" size={20} color="#FF5722" />
        }
        value="89"
        label="Wickets"
        color="#FF5722"
      />
    </View>
  );
};

export default StatsRow;
