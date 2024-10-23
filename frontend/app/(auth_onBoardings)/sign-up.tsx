import { View, Text, ScrollView, Alert} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormSignup from '@/components/auth/forSignup/FormSignup'
import CustomButton from '@/components/auth/button/buttons'
import { validateEmail, validatePassword } from '@/components/auth/InputValidation/Input_validation'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/config/firebaseConfig'

const Signup = () => {

  const [value, setValue] = useState({
      email: "",
      password: "",
      name: "",
      university: "",
      major: "",
      year: "",
      studyPreference: "",
      error: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);


  const handleSignupPress = async () => {
    // Handle verification logic here
    if(value.email === null && !validateEmail(value.email)){
      Alert.alert("Invalid Email format");
      return;
    }

    if(value.password ===null && !validatePassword(value.password)){
      Alert.alert("Invalid Password");
      return;
    }

    setIsSubmitting(true);

    try {
      //Sign up user
      await createUserWithEmailAndPassword(auth, value.email, value.password)
      .then((userCredential)=> {
        const user = userCredential.user;
        console.log("Hello! :" + user)
        Alert.alert("You are registered successfully")
      
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setValue({...value, error: errorMessage})
        Alert.alert("Sorry, something went wrong with your signup: " + value.error);
      });

    } catch (error) {
      setValue({
        ...value,
        error: error instanceof Error ? error.message : 'An unknown error occurred',
    });
    
    }finally {
      // Stop submitting
      setIsSubmitting(false);
    }
  }

  return (
    <SafeAreaView
      className='bg-slate-300 h-full'
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 10
      }}>
      <ScrollView>
        <View className='w-full justify-center h-full px-4 my-6'>
          <Text 
            className="text-2xl text-cyan-900 font-semibold mt-10"
            style={{
              marginBottom: 20,
              textAlign: 'center',
              fontSize: 28,
              color: '#FF7900',
              fontWeight: 700,
            }}> 
            Signup with your Email
          </Text>

          {/* Enter name */}
          <FormSignup
            title='Name'
            value={value.name}
            handleChangeText={(usrName) => {
              setValue({
                ...value, name: usrName
              })
            }}
            keyboardType='default'
          />

          {/* Enter university */}
          <FormSignup
            title='University'
            value={value.university}
            handleChangeText={(usrUniversity) => {
              setValue({
                ...value, university: usrUniversity
              })
            }}
            keyboardType='default'
          />

          {/* Enter major */}
          <FormSignup
            title='Major'
            value={value.major}
            handleChangeText={(usrMajor) => {
              setValue({
                ...value, major: usrMajor
              })
            }}
            keyboardType='default'
          />

          {/* Enter year */}
          <FormSignup
            title='Year of Study'
            value={value.year}
            handleChangeText={(usrYearOfStudy) => {
              setValue({
                ...value, year: usrYearOfStudy
              })
            }}
            keyboardType='numeric'
          />

          {/* Enter study preference */}
          <FormSignup
            title='Study Preference'
            value={value.studyPreference}
            handleChangeText={(usrPreference) => {
              setValue({
                ...value, studyPreference: usrPreference
              })
            }}
            keyboardType='default'
          />

          {/* Enter email */}
          <FormSignup
            title='Email'
            value={value.email}
            handleChangeText={(usrEmail) => {
              setValue({
                ...value, email: usrEmail
              })
            }}
            keyboardType='email-address'
          />

          {/* Enter password */}
          <FormSignup
            title='Password'
            value={value.password}
            handleChangeText={(usrPassword) => {
              setValue({
                ...value, password: usrPassword
              })
            }}
            keyboardType='default'
          />


          {/* Verify email Button */}
          <CustomButton
            title='Create Account'
            handlePress={handleSignupPress}
            buttonStyle={{ marginTop: 20 }}
            isLoading={false}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Signup