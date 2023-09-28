import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const Button = ({
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: 'green',
        marginTop: 20,
        paddingVertical: 15,
        width: '50%',
        alignItems: 'center',
        borderRadius: 50,
      }}
      onPress={onPress}>
      <Text style={{ color: '#ffffff', fontSize: 16, }}>Save to Disk</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({});
