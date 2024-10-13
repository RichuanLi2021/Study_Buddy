import { View, Text, Image } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native';

const usr_profile = () => {
    const displayImage = () => {
        return(
            <Image
                style={styles.logo}
                source={require('../../assets/images/icon.png')}
            />
        );
    }

  return (
    <ScrollView>
        <View>
            <View style={{flexDirection: "row"}}>
                <Image
                    style={{
                        width: 150,
                        height: 150,
                        }}
                    source={require('../../assets/images/icon.png')}
                />
                <View>
                    <Text style={{fontSize: "25px", marginLeft: 10}}>Name: </Text>
                    <Text style={{fontSize: "25px", marginLeft: 10}}>Phone: </Text>
                </View>
            </View>
            <Text style={{marginLeft: 10, marginTop: 10}}>University Name: </Text>
            <Text style={{marginLeft: 10}}>Major: </Text>
            <Text style={{marginLeft: 10}}>Year: </Text>
            <Text style={{marginLeft: 10}}>Study Preference: </Text>
            <Text style={{marginLeft: 10}}>Availability: </Text>
        </View>
    </ScrollView>
  )
}

export default usr_profile