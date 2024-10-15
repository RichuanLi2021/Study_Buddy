import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormSignup from '@/components/auth/forSignup/FormSignup'
import CustomButton from '@/components/auth/button/buttons'

const signup = () => {
  const [email, setEmail] = useState("")



  const handleVerifyPress = async () => {

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
            {/* <Image/> add image here */}
            <Text 
              className="text-2xl text-cyan-900 text-semibold mt-10 font-semibold"
               style={{
                marginBottom: 30
              }}> 
                Signup with your Email
            </Text>

            {/* Enter email */}
            <FormSignup
              title='Email'
              value={email}
              handleChangeText={(usrEmail) => setEmail(usrEmail)}
              keyboardType='email-address'
            />


            {/* Verify email Button */}
            <CustomButton
              title='Verify'
              handlePress={handleVerifyPress}
              buttonStyle={{marginTop: 20}}
              isLoading={false}
            />

          </View>
        </ScrollView>

    </SafeAreaView>
  )
}

export default signup