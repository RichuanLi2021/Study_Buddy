import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps, StyleProp, ViewStyle } from 'react-native';

// Extend TouchableOpacityProps to allow passing additional props if necessary
interface CustomButtonProps extends TouchableOpacityProps {
    title: string;
    handlePress: () => void;
    buttonStyle?: StyleProp<ViewStyle>;
    isLoading: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
    title,
    handlePress,
    buttonStyle,
    isLoading,
    ...props
}) => {
    return (
        <TouchableOpacity 
            style={[{
                backgroundColor: '#facc15',
                borderRadius: 12,
                minHeight: 50,
                justifyContent: 'center',
                alignItems: 'center',
            },
                buttonStyle,
            ]}
            onPress={handlePress}
            activeOpacity={0.7}
            {...props}
        >
            <Text style={{
                color: '#000',
                fontWeight: 'bold',
                fontSize: 18,
            }}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}

export default CustomButton;