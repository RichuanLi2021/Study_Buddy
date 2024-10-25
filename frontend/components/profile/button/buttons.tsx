import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps, StyleProp, ViewStyle } from 'react-native';

// Extend TouchableOpacityProps to allow passing additional props if necessary
interface EditButtonProps extends TouchableOpacityProps {
    title: string;
    handlePress: () => void;
    buttonStyle?: StyleProp<ViewStyle>;
    isLoading: boolean;
}

interface SaveButtonProps extends TouchableOpacityProps {
    title: string;
    handlePress: () => void;
    buttonStyle?: StyleProp<ViewStyle>;
    isLoading: boolean;
}

export const EditButton: React.FC<EditButtonProps> = ({
    title,
    handlePress,
    buttonStyle,
    isLoading,
    ...props
}) => {
    return (
        <TouchableOpacity
            style={[{
                backgroundColor: 'white',
                borderRadius: 12,
                borderColor: 'black',
                borderWidth: 1,
                minHeight: 18,
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
                color: 'black',
                fontWeight: 'bold',
                fontSize: 18,
            }}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}

export const SaveButton: React.FC<SaveButtonProps> = ({
    title,
    handlePress,
    buttonStyle,
    isLoading,
    ...props
}) => {
    return (
        <TouchableOpacity
            style={[{
                backgroundColor: 'lightyellow',
                borderRadius: 12,
                borderColor: 'black',
                borderWidth: 1,
                minHeight: 18,
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
                color: 'black',
                fontWeight: 'bold',
                fontSize: 18,
            }}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}

export default EditButton;