import { router } from "expo-router";
import { useState } from "react";
import Toast from "react-native-toast-message";

type LoginStep = "PHONE_INPUT" | "OTP_INPUT";

export const useLoginLogic = () => {
  const [step, setStep] = useState<LoginStep>("PHONE_INPUT");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [callingCode, setCallingCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Mock API call to send OTP
  const sendOtp = async (phone: string, code: string) => {
    setIsLoading(true);
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Success logic
    setIsLoading(false);
    setPhoneNumber(phone);
    setCallingCode(code);
    setStep("OTP_INPUT");

    Toast.show({
      type: "success",
      text1: "OTP Sent",
      text2: `Sent to ${code} ${phone}`,
    });
  };

  // Mock API call to verify OTP
  const verifyOtp = async (otp: string) => {
    setIsLoading(true);
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);

    if (otp === "000000") {
      Toast.show({
        type: "success",
        text1: "Login Successful",
        text2: "Welcome back!",
      });
      router.replace("/home");
    } else {
      Toast.show({
        type: "error",
        text1: "Invalid OTP",
        text2: "Please enter the correct OTP.",
      });
    }
  };

  const resendOtp = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);

    Toast.show({
      type: "success",
      text1: "OTP Resent",
      text2: `A new code has been sent to your number.`,
    });
  };

  return {
    step,
    isLoading,
    phoneNumber,
    callingCode,
    sendOtp,
    verifyOtp,
    resendOtp,
    setStep, // In case we need to go back
  };
};
