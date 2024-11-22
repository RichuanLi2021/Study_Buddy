import { Platform, Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
// eslint-disable-next-line import/no-unresolved
import images from '@/assets/images/user_profile_photos/photos';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Usr_Cards from '@/components/swip_Cards/cards';
import { Usr_Data } from '@/constants/usrData';

const android = Platform.OS === "android";

const usr_match = () => {



  return (
    <SafeAreaView style={styles.container} edges={['left', 'right']}>
      {/* Header view */}
      <View style={styles.headerView}>

        {/* Image */}
        <View style={styles.imageContainer}>
          <TouchableOpacity>
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
      <View style={styles.cards}>
        {Usr_Data.map((user, index) => (
          <Usr_Cards 
            key={user.id} 
            user={user} 
            numberOfcards={Usr_Data.length} 
            currentIndex={index}
          />
        ))}

      </View>


    </SafeAreaView>
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