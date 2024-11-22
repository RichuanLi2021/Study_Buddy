import {Tabs} from 'expo-router'
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import React from 'react'

const Tabs_layout = () => {
  return (
    <Tabs 
      screenOptions={{ 
      tabBarActiveTintColor: 'blue',
      headerShadowVisible: false,
      headerStyle: {
        borderBottomWidth: 0,
        elevation: 0,
      },
     }}>

      <Tabs.Screen
        name = "usr_match"
        options={{
          title: 'WeMit',
          tabBarIcon: () => <FontAwesome5 name="user-friends" size={24} color="black" />
      }}
      />
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