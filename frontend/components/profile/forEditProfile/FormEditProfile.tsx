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
const FormEditProfile: React.FC<FormEditProfileProps> = ({
     title,
     value,
     handleChangeText,
     otherStyles,
     keyboardType='default',
     ...props
    }) => {
    return (
        <View className='space-y-2' style={[{ marginTop: 7 }, otherStyles]}>
            <Text style={{color: 'black', fontWeight: 700}}>{title}</Text>
            <View style={{backgroundColor: 'lightgrey', width: 150, height: 40}}>
                <TextInput
                    className='text-base text-black-100 font-normal'
                    value={value}
                    onChangeText={handleChangeText}
                    style={{
                        borderWidth: 2,
                        borderColor: 'black',
                        paddingBottom: 14
                    }}
                    keyboardType={keyboardType}
                />
            </View>
        </View>
  )
}

export default FormEditProfile;