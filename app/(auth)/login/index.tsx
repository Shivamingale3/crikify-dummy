import RootLayout from "@/components/ui/RootLayout";
import React from "react";
import MobileNumberForm from "./MobileNumberForm";
import OtpConfirmationForm from "./OtpConfirmationForm";
import { useLoginLogic } from "./useLoginLogic";

export default function index() {
  const { step, isLoading, sendOtp, verifyOtp, resendOtp } = useLoginLogic();

  return (
    <RootLayout className="h-full items-center justify-center">
      {step === "OTP_INPUT" ? (
        <OtpConfirmationForm
          onVerify={verifyOtp}
          onResend={resendOtp}
          isLoading={isLoading}
        />
      ) : (
        <MobileNumberForm onSubmit={sendOtp} isLoading={isLoading} />
      )}
    </RootLayout>
  );
}
