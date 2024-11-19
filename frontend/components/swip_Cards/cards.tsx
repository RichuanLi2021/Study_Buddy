import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'
import React from 'react'
import images from '@/assets/images/user_profile_photos/photos'
import { Usr_Data, Usr_DataType } from '@/constants/usrData';
import { LinearGradient } from 'expo-linear-gradient';

export const Card_Width = Dimensions.get('screen').width * 0.8;


const Usr_Cards = ({ user, numberOfcards, currentIndex }: Usr_DataType) => {
  return (
    <View style={[styles.card_container, {zIndex: numberOfcards - currentIndex}]}>
      <Image
        style={[StyleSheet.absoluteFillObject, styles.image]} 
        source={user.imgPath}
      />

      <LinearGradient
        // Background Linear Gradient
        colors={['rgba(0,0,0,0.8)', 'transparent']}
        style={[StyleSheet.absoluteFillObject, styles.overlay]}
      />

      <View style={styles.footer}>
        <Text style={styles.text}>{user.name}</Text>
        <Text style={styles.subText}>{user.university}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

    card_container:{
      // borderWidth: 1,
      // borderColor: 'red',

      width: Card_Width,
      // height: Card_Width * 1.67,
      aspectRatio: 1 / 1.67,
      borderRadius: 20,
      justifyContent: 'flex-end',
      position: 'absolute',
      top: '5%',
      // left: '50%',
      // transform: [
      //   { translateX: -Card_Width / 2 },
      //   { translateY: -(Card_Width * 1.67) / 2 }],

      // shadow
      shadowColor:"#000",
      shadowOffset: {
        width: 0,
        height: 1
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3
    },

    image:{
      flex: 1,
      borderRadius: 20,
      width: Card_Width,
      height: Card_Width * 1.67,
    },

    footer: {
      padding: 10,
    },

    overlay: {
      top: '100%',
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15
    },

    text: {
      fontSize: 24,
      color: 'white',
      fontFamily: 'InterBold'
    },

    subText: {
      fontSize: 20,
      color: 'black',
      fontWeight: 'bold',
    }
})

export default Usr_Cards