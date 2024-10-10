// Define the props type for FormLogin
import { View, Text, TextInput, TextStyle, StyleProp } from 'react-native'
import React from 'react'

// Define the interface for the props
interface FormLoginProps {
  title: string;
  value: string;
  handleChangeText: (text: string) => void;
  otherStyles?: StyleProp<TextStyle>;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
}

// Accept the props in the FormLogin component
const FormLogin: React.FC<FormLoginProps> = ({
     title,
     value, 
     handleChangeText, 
     otherStyles, 
     keyboardType='default',
     ...props
    }) => {
    return (
        <View className='space-y-2' style={[{ marginTop: 7 }, otherStyles]}>
            <Text className='text-base text-gray-100 font-normal'>{title}</Text>
            <View className="border-2 border-black w-full h-14 px-0 bg-black rounded-2xl">
                <TextInput
                    className='text-base text-gray-100 font-normal'
                    value={value}  // Use the value prop here
                    onChangeText={handleChangeText}
                    style={{ 
                        borderWidth: 1, 
                        borderColor: '#ccc', 
                        padding: 13, 
                        borderRadius: 5 
                    }}
                    keyboardType={keyboardType}
                />
            </View>
        </View>
  )
}

export default FormLogin