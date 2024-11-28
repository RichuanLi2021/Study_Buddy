import { Image, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import images from '@/assets/images/user_profile_photos/photos';
import { router } from 'expo-router';

//Get device's width
const { width } = Dimensions.get('window');

const onPress = () => {
    router.push('/(tabs)/usr_profile');
  }

export const User_icon = () => {
    return(
        <View style={styles.imageContainer}>
        <TouchableOpacity onPress={onPress}>
          <Image
            source={images.elon_musk}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
    )
};

const styles = StyleSheet.create({
    imageContainer: {
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: hp(3),
        overflow: 'hidden',
        marginLeft: wp(8),
        width: hp(5),
        height: hp(5),
        justifyContent: 'center',
        alignItems: 'center'
      },
      image: {
        width: hp(5),
        height: hp(5),
        resizeMode: 'cover',
        borderRadius: hp(3),
      }
})