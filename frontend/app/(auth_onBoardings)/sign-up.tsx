import { View, Text, ScrollView, Alert} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormSignup from '@/components/auth/forSignup/FormSignup'
import CustomButton from '@/components/auth/button/buttons'
import { validateEmail, validatePassword } from '@/components/auth/InputValidation/Input_validation'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/config/firebaseConfig'
import RNPickerSelect from 'react-native-picker-select';

const Signup = () => {
  const router = useRouter(); // Initialize the router

  const [value, setValue] = useState({
    email: '',
    password: '',
    name: '',
    university: '',
    major: '',
    year: '',
    studyPreference: '',
    error: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSignupPress = async () => {
    // Handle verification logic here
    if (value.email === null && !validateEmail(value.email)) {
      Alert.alert('Invalid Email format');
      return;
    }

    if (value.password === null && !validatePassword(value.password)) {
      Alert.alert('Invalid Password');
      return;
    }

    setIsSubmitting(true);

    try {
      // Sign up user
      await createUserWithEmailAndPassword(auth, value.email, value.password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log('Hello! : ' + user);
          Alert.alert('You are registered successfully');
          router.push('/sign-in'); // Redirect to usr_home
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setValue({ ...value, error: errorMessage });
          Alert.alert('Sorry, something went wrong with your signup: ' + value.error);
        });
    } catch (error) {
      setValue({
        ...value,
        error: error instanceof Error ? error.message : 'An unknown error occurred',
      });
    } finally {
      // Stop submitting
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView
      className="bg-orange-50 h-full"
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
      }}
    >
      <ScrollView>
        <View className="w-full justify-center h-full px-4 my-6">
          <Text
            className="text-2xl text-cyan-900 font-semibold mt-10"
            style={{
              marginBottom: 20,
              textAlign: 'center',
              fontSize: 28,
              color: '#FF7900',
              fontWeight: 700,
            }}
          >
            Signup with your Email
          </Text>

          {/* Enter name */}
          <FormSignup
            title="Name"
            value={value.name}
            handleChangeText={(usrName) => {
              setValue({
                ...value,
                name: usrName,
              });
            }}
            keyboardType="default"
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

          {/* University dropdown title */}
          <Text style={{fontWeight: 700, marginTop: 10, marginBottom: 10}}>University:</Text>
          {/* University dropdown menu */}
          <View className="border-2 border-black w-full h-14 px-0 bg-amber-50 rounded-2xl">
                <RNPickerSelect
                    style={{placeholder: {color: 'black'}}}
                    placeholder={{
                        label: 'Select a university...',
                        value: ''
                    }}
                    onValueChange={(value) => value.university = value}
                    items={[{label: 'Dalhousie', value: 'Dalhousie'}, {label: 'St. Marys', value: 'St. Marys'}, {label: 'CBU', value: 'CBU'}, {label: 'UofT', value: 'UofT'}, {label: 'NSCC', value: 'NSCC'}]}
                />
          </View>

          {/* Study Major dropdown title */}
          <Text style={{fontWeight: 700, marginTop: 10, marginBottom: 10}}>Study Major:</Text>
          {/* Study Major dropdown menu */}
          <View className="border-2 border-black w-full h-14 px-0 bg-amber-50 rounded-2xl">
                <RNPickerSelect
                    style={{placeholder: {color: 'black'}}}
                    placeholder={{
                        label: 'Select a major...',
                        value: ''
                    }}
                    onValueChange={(value) => value.major = value}
                    items={[{label: 'Biology', value: 'Biology'}, {label: 'Chemistry', value: 'Chemistry'}, {label: 'Comp. Sci.', value: 'Comp. Sci.'}, {label: 'Math', value: 'Math'}, {label: 'Physics', value: 'Physics'}]}
                />
          </View>

          {/* Study Year dropdown title */}
          <Text style={{fontWeight: 700, marginTop: 10, marginBottom: 10}}>Year of Study:</Text>
          {/* Study Year dropdown menu */}
          <View className="border-2 border-black w-full h-14 px-0 bg-amber-50 rounded-2xl">
                <RNPickerSelect
                    style={{placeholder: {color: 'black'}}}
                    placeholder={{
                        label: 'Select a year...',
                        value: ''
                    }}
                    onValueChange={(value) => value.year = value}
                    items={[{label: '1', value: '1'}, {label: '2', value: '2'}, {label: '3', value: '3'}, {label: '4', value: '4'}]}
                />
          </View>

          {/* Study Preference dropdown title */}
          <Text style={{fontWeight: 700, marginTop: 10, marginBottom: 10}}>Study Preference:</Text>
          {/* Study Preference dropdown menu */}
          <View className="border-2 border-black w-full h-14 px-0 bg-amber-50 rounded-2xl">
                <RNPickerSelect
                    style={{placeholder: {color: 'black'}}}
                    placeholder={{
                        label: 'Select a preference...',
                        value: ''
                    }}
                    onValueChange={(value) => value.studyPreference = value}
                    items={[{label: 'Quiet', value: 'Quiet'}, {label: 'Collaborative', value: 'Collaborative'}]}
                />
          </View>

          {/* Verify email Button */}
          <CustomButton
            title="Create Account"
            handlePress={handleSignupPress}
            buttonStyle={{ marginTop: 20 }}
            isLoading={isSubmitting}
          />

          <View className='justify-center pt-5 flex-row gap-2'>
              <Text className='text-base text-red-950 font-normal'>
                  Already have an account?
                     </Text>
                       <Link
                          href='/(auth_onBoardings)/sign-in'
                          className='text-base font-extrabold text-orange-500'
                            style={{
                                color: 'blue',
                                fontWeight: 600,
                                textDecorationLine: 'underline',

                                }}>
                            Log in
                       </Link>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;
