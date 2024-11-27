import { Text, View, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { usr_data } from '@/constants/usrData';
import { runOnJS, useAnimatedReaction, useSharedValue} from 'react-native-reanimated';
import {GestureHandlerRootView} from "react-native-gesture-handler";
import Usr_Cards from '@/components/swip_Cards/cards';
import Toast from 'react-native-toast-message';

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

  useEffect(() => {
    if(index > users.length - 3){
      Toast.show({
        type: 'info',
        text1: 'Last two cards remaining!',
        position: 'bottom',
        bottomOffset: 80
      })
      setUsers((usrs) => [...usrs, ...usr_data.reverse()]);
    }
  }, [index]);

  const onResponse = (res: boolean) => {
    console.log('on response ', res);
  } 

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.container} edges={['left', 'right']}>

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
    top: 50
  }

});

export default usr_match;