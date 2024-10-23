import { View, Text, TextInput, TextStyle, StyleProp, TextInputProps } from 'react-native'
import { useState } from 'react'

interface FormSignupProps {
    title: string;
    value: string;
    handleChangeText: (text: string) => void;
    otherStyles?: StyleProp<TextStyle>;
    keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
}


const FormSignup = ({
    title,
    value,
    handleChangeText,
    otherStyles,
    keyboardType
}: FormSignupProps) => {
    return (
        <View className='space-y-2' style={[{ marginTop: 7 }, otherStyles]}>
            <Text className='text-base text-gray-700 font-normal'>{title}</Text>
            <View className="border-2 border-black w-full h-14 px-0 bg-amber-50 rounded-2xl">
                <TextInput
                    className='text-base text-slate-950 font-normal'
                    value={value}
                    onChangeText={handleChangeText}
                    style={{ 
                        borderWidth: 1, 
                        borderColor: '#ccc', 
                        padding: 13, 
                        borderRadius: 14 
                    }}
                    keyboardType={keyboardType}
                />
            </View>
        </View>
    )
}

export default FormSignup