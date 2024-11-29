import { View, Text, Image, ImageSourcePropType } from 'react-native'
import { ScrollView } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import React, { useEffect, useState } from 'react'
import {EditButton, SaveButton, LogoutButton} from '@/components/profile/button/buttons'
import FormEditProfile from '@/components/profile/forEditProfile/FormEditProfile'
import * as ImagePicker from 'expo-image-picker';
import { validateName, validatePhone } from '@/components/profile/InputValidation/Input_Validation'
import Toast from 'react-native-toast-message';
import Errors from '@/components/error_message/form_error';
import { SafeAreaView } from 'react-native-safe-area-context'
import {router } from 'expo-router';

const usr_profile = () => {
    const [profilePicture, setProfilePicture] = useState<string | null>(null);
    const openGallery = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1,
          });
          if (!result.canceled && result.assets.length > 0) {
            setProfilePicture(result.assets[0].uri);
            console.log(result.assets[0].uri);
          }
        };

    {/* Initialize profile form variables */}
    const [form, setForm] = useState({
            name: "Your Name",
            phone: "0001112222",
            university: "Your University",
            major: "Your Major",
            year: "Your Year",
            studyPref: "",
            studyTime: "",
            studyDay: "",
            error: {},
            isFormValid: false,
            touched: {
                name: false,
                phone: false,
                university: false,
                major: false,
                year: false  
            },
        })

    {/* Initialize visible to false state */}
    const [visible, setVisible] = useState(false);

    // Handler for name field
    const handleNameChange = (usrName: string) => {
        setForm((prev) => ({
            ...prev,
            name: usrName,
            touched: {
                ...prev.touched,
                name: true,
            },
        }));
    };

    // Handler for phone field
    const handlePhoneChange = (usrPhone: string) => {
        setForm((prev) => ({
            ...prev,
            phone: usrPhone,
            touched: {
                ...prev.touched,
                phone: true,
            },
        }));
    };

    useEffect(()=>{
        validateForm();
    }, [form.name, form.phone, form.touched.name, form.touched.phone]);

    //Form validation
    const validateForm = () => {
        let errors: Errors = {};

        //Validate name
        if(form.touched.name){
            if(form.name.length === 0){
                errors.name = "Name is required"
            } else if(!validateName(form.name) ){
                errors.name = "Name is invalid"
            }
        }

        //Validate phone
        if(form.touched.phone){
            if(form.phone.length === 0){
                errors.phone = "Phone number is required"
            } else if(!validatePhone(form.phone) ){
                errors.phone = "Phone number is invalid"
            }
        }

        //Initialize error
        setForm((prev)=>({
            ...prev,
            error: errors
        }))

        let errorList = Object.keys(errors);
        //update form state
        setForm((prev)=>({
            ...prev,
            isFormValid: errorList.length === 0
        }))
    }

    {/* Switch visible state when edit button clicked */}
    const handleEditPress = async () => {
        setVisible(!visible);
        return;
    }

    const handleLogoutPress = async () => {
            router.push('/');
            return;
        }

    const handleUpdatePress = async () => {
        if(!form.isFormValid){
            Toast.show({
                type: 'error',
                text1: 'Invalid Form',
                text2: 'Check your form values to make sure they are correct'
            })
        } else {
            setVisible(!visible);
        }
        return;
    }

  return (
      <SafeAreaView
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              padding: 10
            }}>
    <ScrollView>
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
            <View style={{flexDirection: 'row', height: 200}}>
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
                        handlePress={openGallery}
                        isLoading={false}
                    />
                </View>

                {/* Edit main profile info forms (not visible until edit button clicked) */}
                <View style={{display: visible ? 'flex' : 'none'}}>
                    {/* Name form title + form field */}
                    <FormEditProfile
                        title="Name:"
                        value={form.name}
                        handleChangeText={handleNameChange}
                        otherStyles={{marginTop: 10, marginLeft: 10}}
                        keyboardType="default"
                    />

                    {/* Phone form title + form field */}
                    <FormEditProfile
                        title="Phone:"
                        value={form.phone}
                        handleChangeText={handlePhoneChange}
                        otherStyles={{marginTop: 10, marginLeft: 10}}
                        keyboardType="phone-pad"
                    />
                </View>

                {/* Display profile picture */}
                <View style={{display: visible ? 'none' : 'flex'}}>
                    {/* Profile picture */}
                    {profilePicture && (
                        <Image
                            style={{
                                width: 170,
                                height: 200,
                                borderWidth: 2,
                                borderColor: 'black'
                            }}
                            source={{uri:profilePicture}}
                        />
                    )}
                </View>

                {/* Name and phone number (visible by default, uses info from form variables) */}
                <View style={{display: visible ? 'none' : 'flex'}}>
                    <Text style={{color: '#FF7900', fontSize: 25, marginLeft: 10, marginBottom: 10, fontWeight: 700}}>Name: </Text>
                    <Text style = {{fontSize: 25, marginLeft: 10}}>{form.name}</Text>
                    <Text style={{color: '#FF7900', fontSize: 25, marginLeft: 10, marginTop: 10, marginBottom: 10, fontWeight: 700}}>Phone: </Text>
                    <Text style = {{fontSize: 25, marginLeft: 10}}>({form.phone[0]}{form.phone[1]}{form.phone[2]}) {form.phone[3]}{form.phone[4]}{form.phone[5]}-{form.phone[6]}{form.phone[7]}{form.phone[8]}{form.phone[9]}</Text>
                </View>
            </View>

            {/* Edit rest of profile info forms/dropdown menus (not visible until edit button is clicked) */}
            <View style={{display: visible ? 'flex' : 'none'}}>
                {/* University dropdown title */}
                <Text style={{color: '#FF7900', fontWeight: 700, marginTop: 10, marginBottom: 10}}>University:</Text>
                {/* University dropdown menu */}
                <View className="border-2 border-black w-full h-14 px-0 bg-amber-50 rounded-2xl" style={{width: 250}}>
                <RNPickerSelect
                    style={{placeholder: {color: 'black'}}}
                    placeholder={{
                        label: 'Select a university...',
                        value: null
                    }}
                    onValueChange={(value) => form.university = value}
                    items={[{label: 'Dalhousie', value: 'Dalhousie'}, {label: 'St. Marys', value: 'St. Marys'}, {label: 'CBU', value: 'CBU'}, {label: 'UofT', value: 'UofT'}, {label: 'NSCC', value: 'NSCC'}]}
                />
                </View>

                {/* Study Major dropdown title */}
                <Text style={{color: '#FF7900', fontWeight: 700, marginTop: 10, marginBottom: 10}}>Study Major:</Text>
                {/* Study Major dropdown menu */}
                <View className="border-2 border-black w-full h-14 px-0 bg-amber-50 rounded-2xl" style={{width: 250}}>
                <RNPickerSelect
                    style={{placeholder: {color: 'black'}}}
                    placeholder={{
                        label: 'Select a major...',
                        value: null
                    }}
                    onValueChange={(value) => form.major = value}
                    items={[{label: 'Biology', value: 'Biology'}, {label: 'Chemistry', value: 'Chemistry'}, {label: 'Comp. Sci.', value: 'Comp. Sci.'}, {label: 'Math', value: 'Math'}, {label: 'Physics', value: 'Physics'}]}
                />
                </View>

                {/* Study Year dropdown title */}
                <Text style={{color: '#FF7900', fontWeight: 700, marginTop: 10, marginBottom: 10}}>Year of Study:</Text>
                {/* Study Year dropdown menu */}
                <View className="border-2 border-black w-full h-14 px-0 bg-amber-50 rounded-2xl" style={{width: 250}}>
                <RNPickerSelect
                    style={{placeholder: {color: 'black'}}}
                    placeholder={{
                        label: 'Select a year...',
                        value: null
                    }}
                    onValueChange={(value) => form.year = value}
                    items={[{label: '1', value: '1'}, {label: '2', value: '2'}, {label: '3', value: '3'}, {label: '4', value: '4'}]}
                />
                </View>

                {/* Study Preference dropdown title */}
                <Text style={{color: '#FF7900', fontWeight: 700, marginTop: 10, marginBottom: 10}}>Study Preference:</Text>
                {/* Study Preference dropdown menu */}
                <View className="border-2 border-black w-full h-14 px-0 bg-amber-50 rounded-2xl" style={{width: 250}}>
                <RNPickerSelect
                    style={{placeholder: {color: 'black'}}}
                    placeholder={{
                        label: 'Select a preference...',
                        value: null
                    }}
                    onValueChange={(value) => form.studyPref = value}
                    items={[{label: 'Quiet', value: 'Quiet'}, {label: 'Collaborative', value: 'Collaborative'}]}
                />
                </View>

                {/* Availability dropdown title */}
                <Text style={{color: '#FF7900', fontWeight: 700, marginTop: 10, marginBottom: 10}}>Availability:</Text>
                <View style={{flexDirection: 'row'}}>
                    {/* Availability day dropdown menu */}
                    <View className="border-2 border-black w-full h-14 px-0 bg-amber-50 rounded-2xl" style={{width: 175}}>
                        <RNPickerSelect
                            style={{placeholder: {color: 'black'}}}
                            placeholder={{
                                label: 'Select day...',
                                value: null
                            }}
                            onValueChange={(value) => form.studyDay = value}
                            items={[{label: 'Monday', value: 'Monday'}, {label: 'Tuesday', value: 'Tuesday'}, {label: 'Wednesday', value: 'Wednesday'}, {label: 'Thursday', value: 'Thursday'}, {label: 'Friday', value: 'Friday'}, {label: 'Saturday', value: 'Saturday'}, {label: 'Sunday', value: 'Sunday'}]}
                        />
                    </View>

                    {/* Availability time dropdown menu */}
                    <View className="border-2 border-black w-full h-14 px-0 bg-amber-50 rounded-2xl" style={{width: 175}}>
                        <RNPickerSelect
                            style={{placeholder: {color: 'black'}}}
                            placeholder={{
                                label: 'Select time...',
                                value: null
                            }}
                            onValueChange={(value) => form.studyTime = value}
                            items={[{label: 'Morning', value: 'morning'}, {label: 'Afternoon', value: 'afternoon'}, {label: 'Evening', value: 'evening'}]}
                        />
                    </View>
                </View>

                <View style={{alignItems: "center"}}>
                    {/* Display error message */}
                    {(form.touched.name || form.touched.phone || form.touched.university || form.touched.major || form.touched.year) && Object.values(form.error).length > 0 && (
                        <Text style={{color: 'red', marginTop: 10 }}>
                            {Object.values(form.error).join("\n")}
                        </Text>
                    )}
                </View>

                {/* Update button to save edited form/dropdown menu information (does nothing right now) */}
                <View style={{alignItems: "center"}}>
                    <SaveButton 
                        title="Update" 
                        handlePress={handleUpdatePress}
                        isLoading={false}
                        buttonStyle={{width: 75, height: 40, marginTop: 10,
                    }}/>
                </View>
            </View>

            {/* Display rest of profile information (visible by default, displays form variable values) */}
            <View style={{display: visible ? 'none' : 'flex'}}>
                <Text style={{color: '#FF7900', marginTop: 10, marginBottom: 10, fontWeight: 700}}>University Name: </Text>
                <Text style={{paddingRight: 10}}>{form.university}</Text>
                <Text style={{color: '#FF7900', marginTop: 10, marginBottom: 10, fontWeight: 700}}>Major: </Text>
                <Text style={{paddingRight: 10}}>{form.major}</Text>
                <Text style={{color: '#FF7900', marginTop: 10, marginBottom: 10, fontWeight: 700}}>Year: </Text>
                <Text style={{paddingRight: 10}}>{form.year}</Text>
                <Text style={{color: '#FF7900', marginTop: 10, marginBottom: 10, fontWeight: 700}}>Study Preference: </Text>
                {/* Placeholder text, does not use selected dropdown value yet */}
                <Text style={{paddingRight: 10}}>{form.studyPref}</Text>
                <Text style={{color: '#FF7900', marginTop: 10, marginBottom: 10, fontWeight: 700}}>Availability: </Text>
                {/* Placeholder text, does not use selected dropdown value yet */}
                <Text style={{paddingRight: 10}}>{form.studyDay} {form.studyTime}</Text>
                <View style={{alignItems: 'center', paddingTop: 20}}>
                <LogoutButton
                    title="Log Out"
                    handlePress={handleLogoutPress}
                    buttonStyle={{width: 100, height: 50}}
                    isLoading={false}
                />
                </View>
            </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default usr_profile