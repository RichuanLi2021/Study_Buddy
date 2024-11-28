import {Tabs} from 'expo-router'
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import React from 'react'
import Toast from 'react-native-toast-message'
import { User_icon } from '@/components/Tabs/tab_match/usr_icon';
import { Message_icon } from '@/components/Tabs/tab_match/message_icon';

const Tabs_layout = () => {
  return (

    <>
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
          tabBarIcon: () => <FontAwesome5 name="user-friends" size={24} color="black" />,
          headerLeft: () => <User_icon/>,
          headerRight: () => <Message_icon/>
      }}
      />
      <Tabs.Screen
        name = "usr_chat"
        options={{
          title: 'Contact',
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

    <Toast/>
    </>
  )
}

export default Tabs_layout