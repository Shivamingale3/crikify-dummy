import { Images } from "@/assets/Images";
import CountryPickerModal from "@/components/ui/CountryPickerModal";
import GlassTile from "@/components/ui/GlassTile";
import RootLayout from "@/components/ui/RootLayout";
import { Country } from "@/constants/countries";
import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

const LogInScreen = () => {
  const [callingCode, setCallingCode] = useState("+91");
  const [flag, setFlag] = useState("🇮🇳");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [pickerVisible, setPickerVisible] = useState(false);

  const onSelectCountry = (country: Country) => {
    setCallingCode(country.dial_code);
    setFlag(country.flag);
  };

  const handleSendOTP = () => {
    console.log(`Sending OTP to: ${flag} ${callingCode} ${phoneNumber}`);
  };

  return (
    <RootLayout className="h-full items-center justify-center">
      <GlassTile className="items-center justify-center gap-6 w-[90%] py-10">
        <Image
          source={Images.logo}
          className="w-20 h-20"
          resizeMode="contain"
        />
        <View className="items-center gap-2">
          <Text className="text-3xl text-black dark:text-white font-bold">
            Log In
          </Text>
          <Text className="text-base text-gray-600 dark:text-gray-300">
            Enter your mobile number to continue
          </Text>
        </View>

        <View className="w-full gap-4">
          {/* Input Row */}
          <View className="flex-row items-center gap-3 w-full">
            <CountryPickerModal
              visible={pickerVisible}
              onClose={() => setPickerVisible(false)}
              onSelect={onSelectCountry}
            />

            {/* Custom Trigger */}
            <TouchableOpacity
              onPress={() => setPickerVisible(true)}
              className="h-14 bg-white/20 border border-white/30 rounded-xl justify-center items-center px-4"
            >
              <Text className="text-lg text-black dark:text-white font-bold">
                {flag} {callingCode}
              </Text>
            </TouchableOpacity>

            {/* Single Long Input */}
            <TextInput
              className="flex-1 h-14 bg-white/20 border border-white/30 rounded-xl px-4 text-lg text-black dark:text-white font-medium"
              placeholder="Mobile Number"
              placeholderTextColor="#9ca3af" // gray-400
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              keyboardType="number-pad"
            />
          </View>
        </View>

        <TouchableOpacity
          onPress={handleSendOTP}
          className="w-full py-4 bg-primary rounded-xl items-center mt-4 active:bg-blue-700 disabled:bg-gray-300"
          disabled={phoneNumber.length < 10}
        >
          <Text className="text-white text-lg font-bold">Send OTP</Text>
        </TouchableOpacity>
      </GlassTile>
    </RootLayout>
  );
};

export default LogInScreen;
