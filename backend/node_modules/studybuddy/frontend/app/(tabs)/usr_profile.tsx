import { View, Text, Image } from 'react-native'
import { ScrollView } from 'react-native';
import React, { useState } from 'react'
import EditButton from '@/components/profile/button/buttons'
import FormEditProfile from '@/components/profile/forEditProfile/FormEditProfile'

const usr_profile = () => {
    const [form, setForm] = useState({
            name: "Your Name",
            phone: "(000)000-0000",
            university: "Your University",
            major: "Your Major",
            year: "Your Year",
            studypref: "Your Study Preferences",
            availability: "Your Availability"
        },
    )

  return (
    <ScrollView style={{backgroundColor: 'white'}}>
        <View style={{backgroundColor: 'lightblue', borderStyle: 'solid', borderWidth: '5px', borderColor: 'black', paddingLeft: 10, paddingTop: 20, paddingBottom: 20}}>
            <View style={{alignItems: "flex-end"}}>
                <EditButton title="Edit" buttonStyle={{backgroundColor: 'white', width: 50, marginRight: 20}}/>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Image
                    style={{
                        width: 150,
                        height: 150,
                        borderStyle: 'solid',
                        borderWidth: '2px',
                        borderColor: 'black'
                        }}
                    source={require('../../assets/images/icon.png')}
                />
                <View display='none'>
                    <FormEditProfile
                        title="Name:"
                        value={form.name}
                        handleChangeText={(usrName) => setForm({...form, name: usrName})}
                        otherStyles={{marginTop: 7, marginLeft: 10}}
                        keyboardType="default"
                    />
                    <FormEditProfile
                        title="Phone:"
                        value={form.phone}
                        handleChangeText={(usrPhone) => setForm({...form, phone: usrPhone})}
                        otherStyles={{marginTop: 7, marginLeft: 10}}
                        keyboardType="default"
                    />
                </View>
                <View display='flex'>
                    <Text style={{fontSize: '25px', marginLeft: 10, marginBottom: 10, fontWeight: '700'}}>Name: </Text>
                    <Text style = {{fontSize: '25px', marginLeft: 10}}>{form.name}</Text>
                    <Text style={{fontSize: '25px', marginLeft: 10, marginTop: 10, marginBottom: 10, fontWeight: '700'}}>Phone: </Text>
                    <Text style = {{fontSize: '25px', marginLeft: 10}}>{form.phone}</Text>
                </View>
            </View>
            <View display='none'>
                <FormEditProfile
                    title="University Name:"
                    value={form.university}
                    handleChangeText={(usrUniversity) => setForm({...form, university: usrUniversity})}
                    otherStyles={{marginTop: 7}}
                    keyboardType="default"
                />
                <FormEditProfile
                    title="Major:"
                    value={form.major}
                    handleChangeText={(usrMajor) => setForm({...form, major: usrMajor})}
                    otherStyles={{marginTop: 7}}
                    keyboardType="default"
                />
                <FormEditProfile
                    title="Year:"
                    value={form.year}
                    handleChangeText={(usrYear) => setForm({...form, year: usrYear})}
                    otherStyles={{marginTop: 7}}
                    keyboardType="default"
                />
                <FormEditProfile
                    title="Study Preference:"
                    value={form.studypref}
                    handleChangeText={(usrStudyPref) => setForm({...form, studypref: usrStudyPref})}
                    otherStyles={{marginTop: 7}}
                    keyboardType="default"
                />
                <FormEditProfile
                    title="Availability:"
                    value={form.availability}
                    handleChangeText={(usrAvailability) => setForm({...form, availability: usrAvailability})}
                    otherStyles={{marginTop: 7}}
                    keyboardType="default"
                />
            </View>
            <View display='flex'>
                <Text style={{marginTop: 10, marginBottom: 10, fontWeight: '700'}}>University Name: </Text>
                <Text style={{paddingRight: 10}}>{form.university}</Text>
                <Text style={{marginTop: 10, marginBottom: 10, fontWeight: '700'}}>Major: </Text>
                <Text style={{paddingRight: 10}}>{form.major}</Text>
                <Text style={{marginTop: 10, marginBottom: 10, fontWeight: '700'}}>Year: </Text>
                <Text style={{paddingRight: 10}}>{form.year}</Text>
                <Text style={{marginTop: 10, marginBottom: 10, fontWeight: '700'}}>Study Preference: </Text>
                <Text style={{paddingRight: 10}}>{form.studypref}</Text>
                <Text style={{marginTop: 10, marginBottom: 10, fontWeight: '700'}}>Availability: </Text>
                <Text style={{paddingRight: 10}}>{form.availability}</Text>
            </View>
        </View>
    </ScrollView>
  )
}

export default usr_profile