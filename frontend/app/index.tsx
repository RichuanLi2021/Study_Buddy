import { Text, View, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";
import Toast from "react-native-toast-message";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f9f9f9",
        paddingHorizontal: 20,
      }}
    >
      {/* App Title */}
      <Text className="text-4xl" style={{ fontFamily: "chilispepper" }}>
        Study Buddy
      </Text>

      {/* Login Button */}
      <Link href="/(auth_onBoardings)/sign-in" asChild>
        <TouchableOpacity
          style={{
            width: "80%",
            paddingVertical: 15,
            backgroundColor: "#FF7900", // Matching color for both buttons
            borderRadius: 8,
            alignItems: "center",
            marginTop: 40,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: "#fff",
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
      </Link>

      {/* Signup Button */}
      <Link href="/(auth_onBoardings)/sign-up" asChild>
        <TouchableOpacity
          style={{
            width: "80%",
            paddingVertical: 15,
            backgroundColor: "#FF7900", // Same color as Login button
            borderRadius: 8,
            alignItems: "center",
            marginTop: 15,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: "#fff",
            }}
          >
            Signup
          </Text>
        </TouchableOpacity>
      </Link>

      <StatusBar style="auto" />
      <Toast />
    </View>
  );
}
