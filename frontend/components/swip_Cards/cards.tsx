import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'


const profile = {
    id: 1,
    image: 'https://www.facebook.com/photo/?fbid=1102716257881580&set=a.322648372555043',
    name: 'CR7',
}

const usrCards = () => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={{uri: profile.image}}/>
    </View>
  )
}

const styles = StyleSheet.create({

    card:{},
    image:{},



})

export default usrCards