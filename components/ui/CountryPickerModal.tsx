import { COUNTRIES, Country } from "@/constants/countries";
import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import React, { useState } from "react";
import {
  FlatList,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

interface CountryPickerModalProps {
  visible: boolean;
  onClose: () => void;
  onSelect: (country: Country) => void;
}

const CountryPickerModal = ({
  visible,
  onClose,
  onSelect,
}: CountryPickerModalProps) => {
  const [search, setSearch] = useState("");

  const filteredCountries = COUNTRIES.filter(
    (country) =>
      country.name.toLowerCase().includes(search.toLowerCase()) ||
      country.dial_code.includes(search) ||
      country.code.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View className="flex-1 justify-center items-center">
          <BlurView
            intensity={20}
            tint="dark"
            className="absolute w-full h-full"
          />
          <TouchableWithoutFeedback>
            <View className="w-[90%] max-h-[70%]">
              <View
                className="p-0 overflow-hidden w-full h-full"
                style={{
                  borderRadius: 20,
                  padding: 20,
                  backgroundColor: "rgba(0, 0, 0, 0.9)",
                }}
              >
                {/* Header with Search */}
                <View className="p-4 border-b border-white/20 gap-3">
                  <View className="flex-row justify-between items-center">
                    <Text className="text-xl font-bold text-white">
                      Select Country
                    </Text>
                    <TouchableOpacity onPress={onClose}>
                      <Ionicons name="close" size={24} color="white" />
                    </TouchableOpacity>
                  </View>
                  <View className="flex-row items-center bg-white/10 rounded-xl px-3 h-12 border border-white/20">
                    <Ionicons name="search" size={20} color="#E5E7EB" />
                    <TextInput
                      className="flex-1 ml-2 text-white font-medium"
                      placeholder="Search country name or code"
                      placeholderTextColor="#9CA3AF"
                      value={search}
                      onChangeText={setSearch}
                      autoCorrect={false}
                    />
                  </View>
                </View>

                {/* List */}
                <FlatList
                  data={filteredCountries}
                  keyExtractor={(item) => item.code}
                  className="px-2"
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      className="flex-row items-center p-4 border-b border-white/10 active:bg-white/10 rounded-lg"
                      onPress={() => {
                        onSelect(item);
                        onClose();
                        setSearch(""); // Reset search on close
                      }}
                    >
                      <Text className="text-3xl mr-3">{item.flag}</Text>
                      <View className="flex-1">
                        <Text className="text-white text-base font-semibold">
                          {item.name}
                        </Text>
                        <Text className="text-gray-400 text-sm">
                          {item.code}
                        </Text>
                      </View>
                      <Text className="text-white font-bold text-lg">
                        {item.dial_code}
                      </Text>
                    </TouchableOpacity>
                  )}
                  contentContainerStyle={{ paddingBottom: 20 }}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default CountryPickerModal;
