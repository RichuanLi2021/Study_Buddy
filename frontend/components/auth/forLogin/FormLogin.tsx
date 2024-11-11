// Define the props type for FormLogin
import { View, Text, TextInput, TextStyle, StyleProp, TextInputProps, TouchableOpacity } from 'react-native'
import { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Define the interface for the props
interface FormLoginProps extends TextInputProps {
  title: string;
  value: string;
  isPasswordVisible?: boolean;
  handleChangeText: (text: string) => void;
  otherStyles?: StyleProp<TextStyle>;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
}

// Accept the props in the FormLogin component
const FormLogin = ({
     title,
     value, 
     isPasswordVisible,
     handleChangeText, 
     otherStyles, 
     keyboardType='default',
     ...props
    }: FormLoginProps) => {
        
        const [showPassword, setShowPassword] = useState(false);
    
    return (
        <View className='space-y-2' style={[{ marginTop: 5 }, otherStyles]}>
            <Text className='text-base text-gray-700 font-normal'>{title}</Text>
            <View className="border-2 border-black w-full h-14 px-0 bg-amber-50 rounded-2xl">
                <TextInput
                    className='text-base text-slate-950 font-normal'
                    value={value}
                    onChangeText={handleChangeText}
                    style={{ 
                        borderWidth: 1, 
                        borderColor: '#ccc', 
                        padding: 7, 
                        borderRadius: 14,
                        paddingRight: 40, // Add space for the icon
                    }}
                    secureTextEntry={title.toLowerCase() === 'password' && !showPassword}
                    keyboardType={keyboardType}
                    {...props}
                />
                {title.toLowerCase() === 'password' && (
                <TouchableOpacity
                    onPress={() => setShowPassword(!showPassword)}
                    style={{
                    position: 'absolute',
                    right: 10,
                    top: '50%',
                    transform: [{ translateY: -12 }], // Center the icon vertically
                    }}
                    >
                    <Icon
                    name={showPassword ? 'eye-off' : 'eye'}
                    size={24}
                    color='gray'
                    />
                </TouchableOpacity>
                )}
            </View>
        </View>
  )
}

export default FormLogin