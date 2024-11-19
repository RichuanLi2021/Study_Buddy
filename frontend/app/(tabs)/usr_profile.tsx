import { View, Text, Image } from 'react-native'
import { ScrollView } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import React, { useState } from 'react'
import {EditButton, SaveButton} from '@/components/profile/button/buttons'
import FormEditProfile from '@/components/profile/forEditProfile/FormEditProfile'
import * as ImagePicker from 'expo-image-picker';

const usr_profile = () => {
    const [profilePicture, setProfilePicture] = useState(null);
    const openGallery = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1,
          });
      setProfilePicture(result.assets[0].uri);
      console.log(result.assets[0].uri);
    }

    {/* Initialize profile form variables */}
    const [form, setForm] = useState({
            name: "Your Name",
            phone: "0001112222",
            university: "Your University",
            major: "Your Major",
            year: "Your Year",
        },
    )

    {/* Initialize visible to false state */}
    const [visible, setVisible] = useState(false);

    {/* Switch visible state when edit button clicked */}
    const handleEditPress = async () => {
        setVisible(!visible);
        return;
    }

  return (
    <ScrollView style={{backgroundColor: 'white'}}>
        <View style={{backgroundColor: 'lightblue', borderStyle: 'solid', borderWidth: 5, borderColor: 'black', paddingLeft: 10, paddingTop: 20, paddingBottom: 20}}>

            {/* Edit button to show/hide forms/dropdowns/text fields */}
            <View style={{alignItems: "flex-end"}}>
                <EditButton
                    title="Edit"
                    handlePress={handleEditPress}
                    buttonStyle={{width: 50, marginRight: 20}}
                    isLoading={false}
                />
            </View>

            {/* Main profile info (image, name, phone) */}
            <View style={{flexDirection: 'row', height: 170}}>
                {/* Edit profile picture (not visible until edit button clicked) */}
                <View style={{display: visible ? 'flex' : 'none'}}>
                    {/* Button to choose a profile picture from device gallery */}
                    <EditButton
                        title="Change Profile Picture"
                        onPress={openGallery}
                        buttonStyle={{
                            width: 170,
                            height: 170,
                            borderStyle: 'solid',
                            borderWidth: 2,
                            borderColor: 'black'
                        }}
                    />
                </View>

                {/* Edit main profile info forms (not visible until edit button clicked) */}
                <View style={{display: visible ? 'flex' : 'none'}}>
                    {/* Name form title + form field */}
                    <FormEditProfile
                        title="Name:"
                        value={form.name}
                        handleChangeText={(usrName) => setForm({...form, name: usrName})}
                        otherStyles={{marginTop: 10, marginLeft: 10}}
                        keyboardType="default"
                    />

                    {/* Phone form title + form field */}
                    <FormEditProfile
                        title="Phone:"
                        value={form.phone}
                        handleChangeText={(usrPhone) => setForm({...form, phone: usrPhone})}
                        otherStyles={{marginTop: 10, marginLeft: 10}}
                        keyboardType="phone-pad"
                    />
                </View>

                {/* Display profile picture */}
                <View style={{display: visible ? 'none' : 'flex'}}>
                    {/* Profile picture */}
                    <Image
                    style={{
                        width: 170,
                        height: 170,
                        borderStyle: 'solid',
                        borderWidth: 2,
                        borderColor: 'black'
                        }}
                    source={{uri:profilePicture}}
                    />
                </View>

                {/* Name and phone number (visible by default, uses info from form variables) */}
                <View style={{display: visible ? 'none' : 'flex'}}>
                    <Text style={{fontSize: 25, marginLeft: 10, marginBottom: 10, fontWeight: 700}}>Name: </Text>
                    <Text style = {{fontSize: 25, marginLeft: 10}}>{form.name}</Text>
                    <Text style={{fontSize: 25, marginLeft: 10, marginTop: 10, marginBottom: 10, fontWeight: 700}}>Phone: </Text>
                    <Text style = {{fontSize: 25, marginLeft: 10}}>({form.phone[0]}{form.phone[1]}{form.phone[2]}) {form.phone[3]}{form.phone[4]}{form.phone[5]}-{form.phone[6]}{form.phone[7]}{form.phone[8]}{form.phone[9]}</Text>
                </View>
            </View>

            {/* Edit rest of profile info forms/dropdown menus (not visible until edit button is clicked) */}
            <View style={{display: visible ? 'flex' : 'none'}}>
                {/* University form title + form field */}
                <FormEditProfile
                    title="University Name:"
                    value={form.university}
                    handleChangeText={(usrUniversity) => setForm({...form, university: usrUniversity})}
                    otherStyles={{marginTop: 10}}
                    keyboardType="default"
                />

                {/* Major form title + form field */}
                <FormEditProfile
                    title="Major:"
                    value={form.major}
                    handleChangeText={(usrMajor) => setForm({...form, major: usrMajor})}
                    otherStyles={{marginTop: 10}}
                    keyboardType="default"
                />

                {/* Year form title + form field */}
                <FormEditProfile
                    title="Year:"
                    value={form.year}
                    handleChangeText={(usrYear) => setForm({...form, year: usrYear})}
                    otherStyles={{marginTop: 10}}
                    keyboardType="default"
                />

                {/* Study Preference dropdown title */}
                <Text style={{fontWeight: 700, marginTop: 10, marginBottom: 10}}>Study Preference:</Text>
                {/* Study Preference dropdown menu */}
                <View style={{width: 250, backgroundColor: 'lightgrey', borderColor: 'black', borderStyle: 'solid', borderWidth: 2}}>
                <RNPickerSelect
                    style={{placeholder: {color: 'black'}}}
                    placeholder={{
                        label: 'Select a preference...',
                        value: null
                    }}
                    onValueChange={(value) => console.log(value)}
                    items={[{label: 'Quiet', value: 'quiet'}, {label: 'Collaborative', value: 'collaborative'}]}
                />
                </View>

                {/* Availability dropdown title */}
                <Text style={{fontWeight: 700, marginTop: 10, marginBottom: 10}}>Availability:</Text>
                <View style={{flexDirection: 'row'}}>
                    {/* Availability day dropdown menu */}
                    <View style={{width: 175, backgroundColor: 'lightgrey', borderColor: 'black', borderStyle: 'solid', borderWidth: 2}}>
                        <RNPickerSelect
                            style={{placeholder: {color: 'black'}}}
                            placeholder={{
                                label: 'Select day...',
                                value: null
                            }}
                            onValueChange={(value) => console.log(value)}
                            items={[{label: 'Monday', value: 'monday'}, {label: 'Tuesday', value: 'tuesday'}, {label: 'Wednesday', value: 'wednesday'}, {label: 'Thursday', value: 'thursday'}, {label: 'Friday', value: 'friday'}, {label: 'Saturday', value: 'saturday'}, {label: 'Sunday', value: 'sunday'}]}
                        />
                    </View>

                    {/* Availability time dropdown menu */}
                    <View style={{width: 175, marginLeft: 10, backgroundColor: 'lightgrey', borderColor: 'black', borderStyle: 'solid', borderWidth: 2}}>
                        <RNPickerSelect
                            style={{placeholder: {color: 'black'}}}
                            placeholder={{
                                label: 'Select time...',
                                value: null
                            }}
                            onValueChange={(value) => console.log(value)}
                            items={[{label: 'Morning', value: 'morning'}, {label: 'Afternoon', value: 'afternoon'}, {label: 'Evening', value: 'evening'}]}
                        />
                    </View>
                </View>

                {/* Update button to save edited form/dropdown menu information (does nothing right now) */}
                <View style={{alignItems: "center"}}>
                    <SaveButton 
                        title="Update" 
                        handlePress={handleEditPress}
                        isLoading={false}
                        buttonStyle={{width: 75, height: 40, marginTop: 10,
                    }}/>
                </View>
            </View>

            {/* Display rest of profile information (visible by default, displays form variable values) */}
            <View style={{display: visible ? 'none' : 'flex'}}>
                <Text style={{marginTop: 10, marginBottom: 10, fontWeight: 700}}>University Name: </Text>
                <Text style={{paddingRight: 10}}>{form.university}</Text>
                <Text style={{marginTop: 10, marginBottom: 10, fontWeight: 700}}>Major: </Text>
                <Text style={{paddingRight: 10}}>{form.major}</Text>
                <Text style={{marginTop: 10, marginBottom: 10, fontWeight: 700}}>Year: </Text>
                <Text style={{paddingRight: 10}}>{form.year}</Text>
                <Text style={{marginTop: 10, marginBottom: 10, fontWeight: 700}}>Study Preference: </Text>
                {/* Placeholder text, does not use selected dropdown value yet */}
                <Text style={{paddingRight: 10}}>Your study preference</Text>
                <Text style={{marginTop: 10, marginBottom: 10, fontWeight: 700}}>Availability: </Text>
                {/* Placeholder text, does not use selected dropdown value yet */}
                <Text style={{paddingRight: 10}}>Your availability day/time of day</Text>
            </View>
        </View>
    </ScrollView>
  )
}

export default usr_profile