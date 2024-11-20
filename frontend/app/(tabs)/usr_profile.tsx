import { View, Text, Image } from 'react-native'
import { ScrollView } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import React, { useEffect, useState } from 'react'
import {EditButton, SaveButton} from '@/components/profile/button/buttons'
import FormEditProfile from '@/components/profile/forEditProfile/FormEditProfile'
import { validateName, validatePhone, validateUniversity, validateMajor, validateYear } from '@/components/profile/InputValidation/Input_Validation'
import Toast from 'react-native-toast-message';
import Errors from '@/components/error_message/form_error';

const usr_profile = () => {
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
    }, [form.name, form.phone, form.university, form.major, form.year, form.touched.name, form.touched.phone, form.touched.university, form.touched.major, form.touched.year]);

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
                {/* Profile picture (uses placeholder image icon.png from project directory) */}
                <Image
                    style={{
                        width: 170,
                        height: 170,
                        borderStyle: 'solid',
                        borderWidth: 2,
                        borderColor: 'black'
                    }}
                    source={require('../../assets/images/icon.png')}
                />

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
                {/* University dropdown title */}
                <Text style={{fontWeight: 700, marginTop: 10, marginBottom: 10}}>University:</Text>
                {/* University dropdown menu */}
                <View style={{width: 250, backgroundColor: 'lightgrey', borderColor: 'black', borderStyle: 'solid', borderWidth: 2}}>
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
                <Text style={{fontWeight: 700, marginTop: 10, marginBottom: 10}}>Study Major:</Text>
                {/* Study Major dropdown menu */}
                <View style={{width: 250, backgroundColor: 'lightgrey', borderColor: 'black', borderStyle: 'solid', borderWidth: 2}}>
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
                <Text style={{fontWeight: 700, marginTop: 10, marginBottom: 10}}>Year of Study:</Text>
                {/* Study Year dropdown menu */}
                <View style={{width: 250, backgroundColor: 'lightgrey', borderColor: 'black', borderStyle: 'solid', borderWidth: 2}}>
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
                <Text style={{fontWeight: 700, marginTop: 10, marginBottom: 10}}>Study Preference:</Text>
                {/* Study Preference dropdown menu */}
                <View style={{width: 250, backgroundColor: 'lightgrey', borderColor: 'black', borderStyle: 'solid', borderWidth: 2}}>
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
                            onValueChange={(value) => form.studyDay = value}
                            items={[{label: 'Monday', value: 'Monday'}, {label: 'Tuesday', value: 'Tuesday'}, {label: 'Wednesday', value: 'Wednesday'}, {label: 'Thursday', value: 'Thursday'}, {label: 'Friday', value: 'Friday'}, {label: 'Saturday', value: 'Saturday'}, {label: 'Sunday', value: 'Sunday'}]}
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
                <Text style={{marginTop: 10, marginBottom: 10, fontWeight: 700}}>University Name: </Text>
                <Text style={{paddingRight: 10}}>{form.university}</Text>
                <Text style={{marginTop: 10, marginBottom: 10, fontWeight: 700}}>Major: </Text>
                <Text style={{paddingRight: 10}}>{form.major}</Text>
                <Text style={{marginTop: 10, marginBottom: 10, fontWeight: 700}}>Year: </Text>
                <Text style={{paddingRight: 10}}>{form.year}</Text>
                <Text style={{marginTop: 10, marginBottom: 10, fontWeight: 700}}>Study Preference: </Text>
                {/* Placeholder text, does not use selected dropdown value yet */}
                <Text style={{paddingRight: 10}}>{form.studyPref}</Text>
                <Text style={{marginTop: 10, marginBottom: 10, fontWeight: 700}}>Availability: </Text>
                {/* Placeholder text, does not use selected dropdown value yet */}
                <Text style={{paddingRight: 10}}>{form.studyDay} {form.studyTime}</Text>
            </View>
        </View>
    </ScrollView>
  )
}

export default usr_profile