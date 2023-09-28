import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ToggleButton = ({ isMetric, onToggle }) => {

  const toggleButton = () => {
    onToggle(!isMetric);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.button1,
          isMetric ? styles.selectedButton : styles.unselectedButton,
        ]}
        onPress={toggleButton}>
        <Text
          style={[
            styles.buttonText,
            isMetric ? styles.selectedText : styles.unselectedText,
          ]}>
          Imperial
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button2,
          !isMetric ? styles.selectedButton : styles.unselectedButton,
        ]}
        onPress={toggleButton}>
        <Text
          style={[
            styles.buttonText,
            !isMetric ? styles.selectedText : styles.unselectedText,
          ]}>
          Metric
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  button1: {
    paddingHorizontal: 20,
    paddingVertical: 13,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    width: '50%',
  },
  button2: {
    paddingHorizontal: 20,
    paddingVertical: 13,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    width: '50%',
  },
  selectedButton: {
    backgroundColor: 'green',
  },
  unselectedButton: {
    backgroundColor: 'white',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  selectedText: {
    color: 'white',
  },
  unselectedText: {
    color: 'black',
  },
});

export default ToggleButton;
