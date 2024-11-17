import { Text, View} from "react-native";
import { StatusBar } from 'expo-status-bar';
import { Link} from "expo-router";
import Toast from "react-native-toast-message";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">

      <Text className="text-4xl" style={{fontFamily: 'chilispepper'}}>Study Buddy</Text>
      <StatusBar style="auto" />
        <Link 
            href="/(auth_onBoardings)/sign-in" 
            style={{fontSize: 28,
            color: '#FF7900',
            fontWeight: 700
            }}>
            Go login
        </Link>

        <Link 
            href="/(auth_onBoardings)/sign-up" 
            style={{fontSize: 28,
            color: '#FF7900',
            fontWeight: 700
            }}>
            Go to Signup
        </Link>

        <Link 
            href="/(tabs)/usr_match" 
            style={{fontSize: 28,
            color: '#FF7900',
            fontWeight: 700
            }}>
            usr match
        </Link>

        <Toast/>
    </View>
  );
}
