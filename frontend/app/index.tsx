import { useState } from "react";
import { Text, View, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";

import { Colors } from "@/constants/Colors";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>This is the homepage</Text>
    </View>
  );
}
