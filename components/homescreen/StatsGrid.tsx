import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import StatsCard from "./StatsCard";

const StatsGrid = () => {
  const sampleData = [
    { icon: "bolt", count: "12", name: "Tournaments" },
    { icon: "", count: "145.6", name: "Strike Rate" },
    { icon: "bolt", count: "89", name: "Wickets" },
  ];
  return (
    <View className="flex flex-row justify-between">
      <FlatList
        data={sampleData}
        scrollEnabled={false}
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: "space-between",
          marginBottom: 12,
        }}
        renderItem={({ item }) => (
          <StatsCard
            count={item.count}
            iconName={item.icon}
            statName={item.name}
          />
        )}
      />
    </View>
  );
};

export default StatsGrid;

const styles = StyleSheet.create({});
