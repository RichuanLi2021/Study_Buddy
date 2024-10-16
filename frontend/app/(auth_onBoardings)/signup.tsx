import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormLogin from '@/components/auth/forLogin/FormLogin'
import CustomButton from '@/components/auth/button/buttons'

const Signup = () => {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [university, setUniversity] = useState("")
  const [major, setMajor] = useState("")
  const [year, setYear] = useState("")
  const [studyPreference, setStudyPreference] = useState("")
  const [form, setForm] = useState({
    email: "",
    password: ""})


  const handleVerifyPress = async () => {
    // Handle verification logic here
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
          <FormLogin
            title='Name'
            value={name}
            handleChangeText={setName}
            keyboardType='default'
          />

          {/* Enter university */}
          <FormLogin
            title='University'
            value={university}
            handleChangeText={setUniversity}
            keyboardType='default'
          />

          {/* Enter major */}
          <FormLogin
            title='Major'
            value={major}
            handleChangeText={setMajor}
            keyboardType='default'
          />

          {/* Enter year */}
          <FormLogin
            title='Year'
            value={year}
            handleChangeText={setYear}
            keyboardType='numeric'
          />

          {/* Enter study preference */}
          <FormLogin
            title='Study Preference'
            value={studyPreference}
            handleChangeText={setStudyPreference}
            keyboardType='default'
          />

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
            secureTextEntry
                        />

          {/* Verify email Button */}
          <CustomButton
            title='Create Account'
            handlePress={handleVerifyPress}
            buttonStyle={{ marginTop: 20 }}
            isLoading={false}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Signup