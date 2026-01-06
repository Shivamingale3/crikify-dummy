import React from "react";
import "../global.css";

import { Redirect } from "expo-router";

const EntryScreen = () => {
  const token = null;
  return <Redirect href={token ? "/home" : "/(auth)/login"} />;
};

export default EntryScreen;
