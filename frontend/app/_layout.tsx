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
      <Stack.Screen name="index" options={{headerShown: false}} />

    </Stack>

  )
}
