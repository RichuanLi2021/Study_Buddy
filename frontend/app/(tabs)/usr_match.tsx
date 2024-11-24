import { Button, Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import images from '@/assets/images/user_profile_photos/photos';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { usr_data } from '@/constants/usrData';
import { runOnJS, useAnimatedReaction, useSharedValue} from 'react-native-reanimated';
import {GestureHandlerRootView} from "react-native-gesture-handler";
import Usr_Cards from '@/components/swip_Cards/cards';
import { router } from 'expo-router';

const usr_match = () => {
  //of which card we are currently looking at.
  const activeIndex = useSharedValue(0);
  const [index, setIndex] = useState(0);
  const [users, setUsers] = useState(usr_data);

  useAnimatedReaction(() => activeIndex.value,
  (value, prevValue) => {
    if (Math.floor(value) !== index) {
      runOnJS(setIndex)(Math.floor(value));
    }
  }
)

  const onPress = () => {
    router.push('/(tabs)/usr_profile');
  }

  useEffect(() => {
    if(index > users.length - 3){
      console.warn('last two cards remaining!')
      setUsers((usrs) => [...usrs, ...usr_data.reverse()]);
    }
  }, [index]);

  const onResponse = (res: boolean) => {
    console.log('on response ', res);
  } 

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.container} edges={['left', 'right']}>
        {/* Header view */}
        <View style={styles.headerView}>

          {/* Image */}
          <View style={styles.imageContainer}>
            <TouchableOpacity onPress={onPress}>
              <Image
                source={images.elon_musk}
                style={styles.image}
              />
            </TouchableOpacity>
          </View>

          {/* Notification icon */}
          <View>
            <TouchableOpacity style={styles.notificationContainer}>
              <MaterialCommunityIcons 
                name="bell-check-outline" 
                size={50} 
                color="black"
              />
            </TouchableOpacity>
          </View>
        </View>


          {/* cards display */}
          <Text 
            style={{top: 20, left: 130,color: 'black', position: 'absolute', justifyContent: 'center'}}> 
              Current card index: {index}
          </Text>
          <View style={styles.cards}>
            {users.map((user, index) => (
              <Usr_Cards
                key={`${user.id} - ${index}`} 
                user={user} 
                numberOfcards={users.length} 
                index={index}
                activeIndex={activeIndex}
                onResponse={onResponse}
              />
            ))}

            {/* <View style={{position='absolute', bottom: '20', backgroundColor: 'red'}}>
              <Button 
                title="Hi" 
                onPress={() => (activeIndex.value = activeIndex.value + 1)}
              />
            </View> */}
          </View>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  headerView: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'space-between', 
    paddingHorizontal: 20,
  },
  imageContainer: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: hp(3),
    overflow: 'hidden',
  },
  image: {
    width: hp(6),
    height: hp(6),
    resizeMode: 'cover',
    borderRadius: hp(3),
  },
  notificationContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 1,
  },

  cards: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }

});

export default usr_match;