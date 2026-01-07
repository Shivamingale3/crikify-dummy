import React from "react";
import "../global.css";

import { Redirect } from "expo-router";

const EntryScreen = () => {
  const token = "shivam";
  return <Redirect href={token ? "/home" : "/(auth)/login"} />;
};

export default EntryScreen;
