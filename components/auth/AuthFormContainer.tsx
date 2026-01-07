import { Images } from "@/assets/Images";
import React from "react";
import { Image, Text } from "react-native";
import GlassTile from "../ui/GlassTile";

const AuthFormContainer = ({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) => {
  return (
    <GlassTile className="items-center justify-center gap-6 w-[90%] py-10">
      <GlassTile>
        <Image
          source={Images.logo}
          className="w-20 h-10"
          resizeMode="contain"
        />
      </GlassTile>
      {title && (
        <Text className="text-lg text-gray-300 w-full text-center">
          {title}
        </Text>
      )}
      {children}
    </GlassTile>
  );
};

export default AuthFormContainer;
