import { Stack, SplashScreen } from "expo-router";
import {useFonts} from 'expo-font'
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    "CableDingbats": require("../assets/fonts/CableDingbats.ttf"),
    "chilispepper": require("../assets/fonts/chilispepper.ttf"),
    "SpaceMono": require("../assets/fonts/SpaceMono-Regular.ttf")
  });

  useEffect(() =>{
    if(error) throw error;
    if(fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error])

  if(!fontsLoaded && ! error) return null;

  return (

    <Stack>
    {/* Configure the global header style if necessary
      // screenOptions={{
      //   headerStyle: {
      //     backgroundColor: '#80ced6',
      //   },
      //   headerTintColor: '#fff',
      //   headerTitleStyle: {
      //     fontWeight: 'bold',
      //   },
      // }}>
    */}

      <Stack.Screen name="index" options={{headerShown: false}}/>
      <Stack.Screen name="(auth_onBoardings)" options={{headerShown: false}}/>
      <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
    </Stack>

  )
}
