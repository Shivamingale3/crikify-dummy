import { StyleSheet, Text, View } from "react-native";
import React from "react";
import GlassTile from "../ui/GlassTile";
import { IconSymbol } from "../ui/icon-symbol";

const ServiceCard = () => {
  return (
    <GlassTile
      className="w-[50%] items-center gap-1 flex flex-col h-[200px]"
      style={{ paddingHorizontal: 0, paddingTop: 0, borderRadius: 20, borderColor:"white", borderBottomWidth:2 }}
    >
      <View className="mb-2 bg-[#4585AD] w-full items-center flex-1">
        <IconSymbol name="bolt" color="yellow" size={30} />
      </View>
      <View className="gap-1 items-center ">
        <Text className="text-white font-bold text-2xl">Add Tournament</Text>
        <Text className="text-white font-bold text-xl ">
          Create new tournament
        </Text>
        <Text className="text-white font-bold text-xs ">More About</Text>
      </View>
    </GlassTile>
  );
};

export default ServiceCard;

const styles = StyleSheet.create({});
