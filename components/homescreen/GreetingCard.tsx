import React from "react";
import { Image, Text, View } from "react-native";
import GlassTile from "../ui/GlassTile";

const GreetingCard = () => {
  return (
    <GlassTile>
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
          source={require("../../assets/images/icons/sun.png")}
          style={{ width: 30, height: 30 }}
        />
        <Text className="font-bold text-[15px] text-white">28° C</Text>
      </View>
    </GlassTile>
  );
};

export default GreetingCard;
