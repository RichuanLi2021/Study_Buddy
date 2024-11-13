import { Text, TouchableOpacity, TouchableOpacityProps, StyleProp, ViewStyle } from 'react-native';

// Extend TouchableOpacityProps to allow passing additional props if necessary
interface CustomButtonProps extends TouchableOpacityProps {
    title: string;
    handlePress: () => void;
    buttonStyle?: StyleProp<ViewStyle>;
    isLoading: boolean;
    disabled?: boolean;
}

const CustomButton = ({
    title,
    handlePress,
    buttonStyle,
    isLoading,
    disabled,
    ...props
}: CustomButtonProps) => {
    return (
        <TouchableOpacity 
            style={[{
                backgroundColor: '#FF7900',
                borderRadius: 12,
                minHeight: 50,
                justifyContent: 'center',
                alignItems: 'center',
            },
                buttonStyle,
            ]}
            onPress={disabled? undefined : handlePress}
            activeOpacity={0.7}
            disabled={disabled}
            {...props}
        >
            <Text style={{
                color: disabled ? '#666' : '#000',
                fontWeight: 'bold',
                fontSize: 18,
            }}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}

export default CustomButton;