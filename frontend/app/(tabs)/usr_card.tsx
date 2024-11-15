import { Button, Platform, Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import images from '@/assets/images/user_profile_photos/photos';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const android = Platform.OS === "android";

const usr_card = () => {
  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          paddingTop: android ? hp(2) : 0,
        },
      ]}
    >
      {/* Header view */}
      <View style={styles.headerView}></View>

      {/* Image */}
      <View style={styles.imageContainer}>
        <Image
          source={images.elon_musk}
          style={styles.image}
        />
      </View>

      {/* Notification icon */}
      <View>
        <TouchableOpacity>
        <FontAwesome5 icon="fa-regular fa-bell" />
        </TouchableOpacity>
      </View>

      {/* <Text style={styles.textContainer}>usr_card</Text> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'space-between',
  },
  headerView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 4,
    marginBottom: 8,
  },
  imageContainer: {
    // alignItems: 'center',
    // justifyContent: 'center',
    position: 'absolute',
    top: 10,
    left: 38,
    borderRadius: hp(4.25),
  },
  image: {
    width: hp(5.5),
    height: hp(5.5),
    resizeMode: 'cover',
    borderRadius: hp(4.25), // Makes the image rounded
  },

  // textContainer: {
  //   fontSize: 18,
  //   fontWeight: 'bold',
  //   textAlign: 'center',
  // }
});

export default usr_card;