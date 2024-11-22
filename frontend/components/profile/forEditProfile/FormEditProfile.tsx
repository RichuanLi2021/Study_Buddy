// Define the props type for FormLogin
import { View, Text, TextInput, TextStyle, StyleProp, TextInputProps } from 'react-native'
import React from 'react'

// Define the interface for the props
interface FormEditProfile extends TextInputProps {
  title: string;
  value: string;
  handleChangeText: (text: string) => void;
  otherStyles?: StyleProp<TextStyle>;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
}

// Accept the props in the FormLogin component
const FormEditProfile = ({
     title,
     value,
     handleChangeText,
     otherStyles,
     keyboardType='default',
     ...props
    }: FormEditProfile) => {
    return (
        <View className='space-y-2' style={[{ marginTop: 7 }, otherStyles]}>
            <Text style={{color: '#FF7900', fontWeight: 700}}>{title}</Text>
            <View className="border-2 border-black w-full h-14 px-0 bg-amber-50 rounded-2xl" style={{width: 150, height: 40}}>
                <TextInput
                    className='text-base text-black-100 font-normal'
                    value={value}
                    onChangeText={handleChangeText}
                    style={{
                        borderWidth: 1,
                        borderColor: '#ccc',
                        paddingBottom: 14,
                        borderRadius: 14
                    }}
                    keyboardType={keyboardType}
                />
            </View>
        </View>
  )
}

export default FormEditProfile;