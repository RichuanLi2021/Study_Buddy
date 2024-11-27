import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'
import React from 'react'
import { Usr_dataType } from '@/constants/usrData';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, {interpolate, useAnimatedStyle, useSharedValue, withSpring, runOnJS} from 'react-native-reanimated';
import { GestureDetector, Gesture} from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// Screen Width
const screen_Width = Dimensions.get('screen').width;
export const card_width = screen_Width * 0.8;

const Usr_Cards = ({
  user, 
  numberOfcards, 
  index, 
  activeIndex, 
  onResponse
  }: Usr_dataType) => { 
    const translationX = useSharedValue(0);

  {/* Card animation */}
    const animatedCard = useAnimatedStyle(() => ({
      //index - 1: next one, index: current one, index + 1: last one
      opacity: interpolate(
        activeIndex.value, 
        [index - 1, index, index + 1], 
        [1 - 1 / 5, 1, 1]
      ),
      transform: [
        {
          scale: interpolate(
            activeIndex.value, 
            [index - 1, index, index + 1], 
            [0.95, 1, 1]
          ),
        }, 
        {
          translateY: interpolate(
          activeIndex.value, 
          [index - 1, index, index + 1], 
          [-30, 0, 0]
        )
        },
        //swip to the left
        {
          translateX: 
            activeIndex.value >= index
              ? interpolate(
                  activeIndex.value,
                  [index - 1, index, index + 1],
                  [0, translationX.value, -screen_Width]
              ) : 0,
        },
        //swipe to the right
        {
          translateX: 
            activeIndex.value >= index
              ? interpolate(
                  activeIndex.value,
                  [index + 1, index, index - 1],
                  [0, translationX.value, -screen_Width]
              ) : 0,
        },

        {
          rotateZ: `${interpolate(
                translationX.value, 
                [-screen_Width / 3, 0, screen_Width / 3], 
                [-2, 0, 2]
              )}deg`,
            }],
        }));

    {/* Swiping gesture */}
    const gesture = Gesture.Pan()
      .onChange((event) => {
        translationX.value = event.translationX;

        activeIndex.value = interpolate(
          Math.abs(translationX.value),
          [0, 500],
          [index, index + 0.8]
        );
      })
      .onEnd((event)=> {
        if (Math.abs(event.velocityX) > 400) {
          translationX.value = withSpring(Math.sign(event.velocityX) * 400, {
            velocity: event.velocityX,
          });
          activeIndex.value = withSpring(index + 1);
          runOnJS(onResponse)(event.velocityX > 0);
        } else {
          translationX.value = withSpring(0);
        }});

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View 
        style={[
          styles.card_container, 
          animatedCard,
          {
            zIndex: numberOfcards - index,
            transform: [
                {translateY: - index * 25},
              ],
            },
          ]}>
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
          <View style={styles.nameArea}>
            <Text style={styles.text}>{user.name} </Text>
            <FontAwesome name="star" size={24} color="yellow"/>
          </View>
            <Text style={styles.subText}>{user.university}</Text>
            <Text style={styles.subText}>{user.major}</Text>
        </View>
      </Animated.View>
    </GestureDetector>
  )
}

const styles = StyleSheet.create({

    card_container:{
      // borderWidth: 1,
      // borderColor: 'red',

      width: card_width,
      backgroundColor: '#fff',
      aspectRatio: 1 / 1.67,
      borderRadius: 20,
      justifyContent: 'flex-end',
      position: 'absolute',
      top: '5%',
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
      width: card_width,
      height: card_width * 1.67,
    },

    footer: {
      flex: 0,
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
      fontWeight: 'bold'
    },

    subText: {
      fontSize: 20,
      color: 'white',
      fontWeight: 'light',
    },

    nameArea: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start'
    }
})

export default Usr_Cards