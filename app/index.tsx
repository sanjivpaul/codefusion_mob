import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";
import { Redirect } from "expo-router";

export default function index() {
  const [loggedInUser, setLoggedInUser] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const subscription = async () => {
      const token = SecureStore.getItem("accessToken");
      console.log("token===>", token);
      
      setLoggedInUser(token ? true : false);
      setLoading(false)
    };
    subscription();
  }, []);

  return (
    <>
      {loading ? (
        <></>
      ) : (
        <Redirect href={!loggedInUser ? "/(routes)/onboarding" : "/(tabs)"} />
      )}
    </>
  );
}
