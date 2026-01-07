import AuthFormContainer from "@/components/auth/AuthFormContainer";
import React, { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

interface OtpConfirmationFormProps {
  onVerify: (otp: string) => void;
  onResend: () => void;
  isLoading: boolean;
}

const OtpConfirmationForm = ({
  onVerify,
  onResend,
  isLoading,
}: OtpConfirmationFormProps) => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(120);
  const inputs = useRef<Array<TextInput | null>>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleOtpChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Focus next input
    if (text && index < 5) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    // Handle backspace
    if (e.nativeEvent.key === "Backspace") {
      if (!otp[index] && index > 0) {
        // If current is empty, move back
        inputs.current[index - 1]?.focus();
      }
    }
  };

  const handleVerify = () => {
    const otpString = otp.join("");
    onVerify(otpString);
  };

  const handleResend = () => {
    setTimer(120);
    setOtp(["", "", "", "", "", ""]);
    inputs.current[0]?.focus();
    onResend();
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const isOtpComplete = otp.every((digit) => digit !== "");

  return (
    <AuthFormContainer title="Enter the 6-digit OTP sent to your number">
      <View className="w-full gap-6">
        {/* OTP Inputs */}
        <View className="flex-row justify-between w-full">
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={(ref) => {
                inputs.current[index] = ref;
              }}
              className="w-12 h-14 bg-white/20 border border-white/30 rounded-xl text-center text-xl text-white font-bold"
              maxLength={1}
              keyboardType="number-pad"
              value={digit}
              placeholder="-"
              placeholderTextColor="#9ca3af"
              onChangeText={(text) => handleOtpChange(text, index)}
              onKeyPress={(e) => handleKeyPress(e, index)}
              selectTextOnFocus
              editable={!isLoading}
            />
          ))}
        </View>

        {/* Timer & Resend */}
        <View className="flex-row justify-center items-center">
          <Text className="text-gray-300 text-base">
            {timer > 0
              ? `Resend OTP in ${formatTime(timer)}`
              : "Didn't receive code?"}
          </Text>
          {timer === 0 && (
            <TouchableOpacity
              onPress={handleResend}
              className="ml-2"
              disabled={isLoading}
            >
              <Text
                className={`font-bold text-base ${
                  isLoading ? "text-gray-500" : "text-primary"
                }`}
              >
                Resend
              </Text>
            </TouchableOpacity>
          )}
        </View>

        {/* Verify Button */}
        <TouchableOpacity
          onPress={handleVerify}
          className={`w-full py-4 rounded-xl items-center ${
            isOtpComplete && !isLoading
              ? "bg-primary active:bg-primary/80"
              : "bg-gray-500"
          }`}
          disabled={!isOtpComplete || isLoading}
        >
          {isLoading ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text className="text-white text-lg font-bold">
              Verify & Proceed
            </Text>
          )}
        </TouchableOpacity>
      </View>
    </AuthFormContainer>
  );
};

export default OtpConfirmationForm;
