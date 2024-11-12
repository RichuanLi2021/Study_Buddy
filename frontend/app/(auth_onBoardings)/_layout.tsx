import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const Auth_Layout = () => {
  return (
    <>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: 'rgb(255 247 237)',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>

        <Stack.Screen
          name="sign-in"
          options={{
            headerShown: true,
            title: "Sign In"
        }}/>

        <Stack.Screen
          name="sign-up"
          options={{
            headerShown: true,
            title: "Sign Up"
          }}/>
      </Stack>

      <StatusBar backgroundColor='#000' style="dark" />
    </>
  )
}

export default Auth_Layout