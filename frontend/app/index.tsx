import { Text, View} from "react-native";
import { StatusBar } from 'expo-status-bar';
import { Link} from "expo-router";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">

      <Text className="text-3xl" style={{fontFamily: 'chilispepper'}}>This is the homepage</Text>
      <StatusBar style="auto" />
      <Link href="/(tabs)/usr_profile" style={{color: 'blue'}}>Go profile</Link>

      <Link href="/(auth_onBoardings)/login" style={{color: 'blue'}}>Go login</Link>
    </View>
  );
}
