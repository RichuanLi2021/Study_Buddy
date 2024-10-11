import { View, Text, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native';

import FormLogin from '@/components/auth/forLogin/FormLogin'
import CustomButton from '@/components/auth/button/buttons'
import { validateEmail, validatePassword } from '@/components/auth/forLogin/Input_validation';

const login = () => {
    const [form, setForm] = useState({
        email: "",
        password: ""
    },
)

    const [isSubmitting, setIsSubmitting] = useState("false")


    {/* Login Authentication */}
    const handleLoginPress = async () => {
        if (!validateEmail(form.email)) {
            Alert.alert("Invalid Email format");
            return;
        }

        if (!validatePassword(form.password)) {
            Alert.alert("Invalid Password");
            return;
        }

        //Pass form data to backend endpoint for authentication
        //...
    }


  return (
    <SafeAreaView 
        className='bg-slate-300 h-full'
        style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            padding: 10

        }}
        >
            <ScrollView>
                <View className='w-full justify-center h-full px-4 my-6'>
                        {/* <Image/> add image here */}
                        <Text 
                            className="text-2xl text-cyan-900 text-semibold mt-10 font-semibold"
                            style={{
                                marginBottom: 30
                            }}> 
                                Log into Study-buddy
                        </Text>

                        {/* Enter email */}
                        <FormLogin
                            title="Email"
                            value={form.email}
                            handleChangeText={(usrEmail) => setForm({...form, email: usrEmail})}
                            otherStyles={{marginTop: 7}}
                            keyboardType="email-address"
                        />

                        {/* Enter password */}
                        <FormLogin
                            title="Password"
                            value={form.password}
                            handleChangeText={(usrPassword) => setForm({...form, password: usrPassword})}
                            otherStyles={{marginTop: 7}}
                            secureTextEntry={true} //Hide password from viewing
                        />

                        {/* Login Button */}
                        <CustomButton
                            title="Login"
                            handlePress={handleLoginPress}
                            buttonStyle={{
                                marginTop: 20
                            } }
                            isLoading={false}
                        />

                </View>
            </ScrollView>

    </SafeAreaView>
  )
}

export default login