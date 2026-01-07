import AuthFormContainer from "@/components/auth/AuthFormContainer";
import CountryPickerModal from "@/components/ui/CountryPickerModal";
import { Country } from "@/constants/countries";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

interface MobileNumberFormProps {
  onSubmit: (phone: string, callingCode: string) => void;
  isLoading: boolean;
}

const MobileNumberForm = ({ onSubmit, isLoading }: MobileNumberFormProps) => {
  const [callingCode, setCallingCode] = useState("+91");
  const [flag, setFlag] = useState("🇮🇳");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [pickerVisible, setPickerVisible] = useState(false);

  const onSelectCountry = (country: Country) => {
    setCallingCode(country.dial_code);
    setFlag(country.flag);
  };

  const handleSubmit = () => {
    onSubmit(phoneNumber, callingCode);
  };

  return (
    <AuthFormContainer title="Enter your mobile number to continue">
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
            disabled={isLoading}
          >
            <Text
              className={`text-lg font-bold ${
                isLoading ? "text-gray-400" : "text-white"
              }`}
            >
              {flag} {callingCode}
            </Text>
          </TouchableOpacity>

          {/* Single Long Input */}
          <TextInput
            className="flex-1 h-14 bg-white/20 border border-white/30 rounded-xl px-4 text-lg text-white font-medium"
            placeholder="Mobile Number"
            placeholderTextColor="#9ca3af" // gray-400
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="number-pad"
            editable={!isLoading}
          />
        </View>
      </View>

      <TouchableOpacity
        onPress={handleSubmit}
        className="w-full py-4 bg-primary rounded-xl items-center mt-4 active:bg-primary/80 disabled:bg-gray-500"
        disabled={phoneNumber.length !== 10 || isLoading}
      >
        {isLoading ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text className="text-white text-lg font-bold">Send OTP</Text>
        )}
      </TouchableOpacity>
    </AuthFormContainer>
  );
};

export default MobileNumberForm;
