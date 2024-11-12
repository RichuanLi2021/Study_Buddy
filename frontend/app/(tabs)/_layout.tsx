import { Stack, Tabs} from 'expo-router'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { StatusBar } from 'expo-status-bar'
import React from 'react'

const Tabs_layout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name = "usr_home"
        options={{
          title: 'Home',
          tabBarIcon: () => <AntDesign name="home" size={24} color="black" />
      }}
      />
      <Tabs.Screen
        name="usr_profile"
        options={{
          title: 'Profile',
          tabBarIcon: () => <MaterialCommunityIcons name="face-man-profile" size={24} color="black" />   
        }}
      />
    </Tabs>
  )
}

export default Tabs_layout