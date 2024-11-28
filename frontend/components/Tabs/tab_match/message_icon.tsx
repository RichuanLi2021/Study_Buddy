import { View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import { router } from 'expo-router';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


//Get device's width
const { width } = Dimensions.get('window');

const onPress = () => {
    router.push('/(tabs)/usr_chat');
  }

export const Message_icon = () => {
    return(
        <View style={styles.iconContainer}>
        <TouchableOpacity onPress={onPress}>
            <FontAwesome name="paper-plane" size={24}/>
        </TouchableOpacity>
      </View>
    )
};

const styles = StyleSheet.create({
    iconContainer: {
        overflow: 'hidden',
        marginLeft: wp(8),
        width: hp(10),
        height: hp(10),
        justifyContent: 'center',
        alignItems: 'center'
      }
})