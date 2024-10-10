import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native';

import FormLogin from '@/components/auth/forLogin/FormLogin'

const login = () => {
    const [form, setForm] = useState({
        email: "",
        password: ""

    })


  return (
    <SafeAreaView 
        className='bg-primary h-full'>
            <ScrollView>
                <View 
                    className='w-full justify-center h-full px-4 my-6'>
                        {/* <Image/> add image here */}
                        <Text 
                            className="text-2xl text-white text-semibold mt-10 font-semibold"> 
                                Log into Study-buddy
                        </Text>

                        {/* Enter email */}
                        <FormLogin
                            title="Email"
                            value={form.email}
                            handleChangeText={(text) => setForm({...form, email: text})}
                            otherStyles={{marginTop: 7}}
                            keyboardType="email-address"
                        />

                        {/* Enter password */}
                        <FormLogin
                            title="Password"
                            value={form.password}
                            handleChangeText={(text) => setForm({...form, password: text})}
                            otherStyles={{marginTop: 7}}
                        />
                </View>
            </ScrollView>

    </SafeAreaView>
  )
}

export default login