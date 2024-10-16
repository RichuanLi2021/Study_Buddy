import { Text, TouchableOpacity, TouchableOpacityProps, StyleProp, ViewStyle } from 'react-native';

// Extend TouchableOpacityProps to allow passing additional props if necessary
interface CustomButtonProps extends TouchableOpacityProps {
    title: string;
    handlePress: () => void;
    buttonStyle?: StyleProp<ViewStyle>;
    isLoading: boolean;
}

const CustomButton = ({
    title,
    handlePress,
    buttonStyle,
    isLoading,
    ...props
}: CustomButtonProps) => {
    return (
        <TouchableOpacity 
            style={[{
                backgroundColor: '#FFA500',
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