import { Text, View} from "react-native";
import { StatusBar } from 'expo-status-bar';
import { Link} from "expo-router";

import { Colors } from "@/constants/Colors";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">

      <Text className="text-3xl" style={{fontFamily: 'chilispepper'}}>This is the homepage</Text>
      <StatusBar style="auto" />
      <Link href="/(tabs)/usr_profile" style={{fontSize: 28,
              color: '#FF7900',
              fontWeight: 700}}>Go profile</Link>

      <Link href="/(auth_onBoardings)/login" style={{fontSize: 28,
              color: '#FF7900',
              fontWeight: 700}}>Go login</Link>

      <Link href="/(auth_onBoardings)/signup" style={{fontSize: 28,
              color: '#FF7900',
              fontWeight: 700}}>Go to Signup</Link>
    </View>
  );
}
