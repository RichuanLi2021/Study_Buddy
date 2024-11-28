import React from 'react';
import { View, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export interface CheckIconProps {
  isPositive: boolean; 
}

export const CheckIcon = ({ isPositive }: CheckIconProps) => {
  return (
    <View style={styles.container}>
      <FontAwesome
        name={isPositive ? 'smile-o' : 'frown-o'}
        size={30}
        color={isPositive ? 'green' : 'red'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 20,
    padding: 5,
  },
});