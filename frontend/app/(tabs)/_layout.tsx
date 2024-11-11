import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React from 'react'

const Tabs_layout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="usr_profile"
          options={{
            headerShown: false
        }}
        />

        <Stack.Screen
          name="usr_home"
          options={{
            headerShown: false
        }}
        />
      </Stack>



      <StatusBar backgroundColor='#161622' style="light" />
    </>
  )
}

export default Tabs_layout