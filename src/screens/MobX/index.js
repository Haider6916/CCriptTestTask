import { Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, ToggleButton } from '../../components';
import textInputStore from '../../MobX/Store';
import { observer } from 'mobx-react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';

const MobX = () => {
  const [isMetric, setIsMetric] = useState(true);

  const handleToggle = newValue => {
    setIsMetric(newValue);
  };

  const convertToKg = (lbs) => {
    return (lbs * 0.45359237).toFixed(2);
  }

  const convertToMeters = (ft, inch) => {
    const meters = ((parseFloat(ft) * 0.3048) + (parseFloat(inch) * 0.0254)).toFixed(2);
    return meters.toString()
  }

  const saveData = async () => {
    try {
      await AsyncStorage.setItem('lbsM', textInputStore.lbs);
      await AsyncStorage.setItem('ftM', textInputStore.ft);
      await AsyncStorage.setItem('inchesM', textInputStore.inch);
      console.log('Saved MobX data to AsyncStorage');
    } catch (error) {
      console.error('Error saving MobX data to AsyncStorage:', error);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const savedLbs = await AsyncStorage.getItem('lbsM');
        const savedFt = await AsyncStorage.getItem('ftM');
        const savedInches = await AsyncStorage.getItem('inchesM');

        if (savedLbs !== null) {
          textInputStore.setlbs(savedLbs);
        }
        if (savedFt !== null) {
          textInputStore.setinch(savedFt);
        }
        if (savedInches !== null) {
          textInputStore.setft(savedInches);
        }
      } catch (error) {
        console.error('Error loading data from AsyncStorage:', error);
      }
    };

    loadData();
  }, []);

  return (
    <View
      style={styles.container}>
      <Text style={styles.header}>Unit Converter (Using MobX)</Text>
      {isMetric ? (
        <>
          <View
            style={styles.lbs}>
            <TextInput
              value={textInputStore.lbs}
              onChangeText={(text) => textInputStore.setlbs(text)}
              placeholder="lbs"
              placeholderTextColor="#ADADAD"
              keyboardType="numeric"
              style={styles.lbsTextInput}
            />
            <Text style={styles.lbsText}>
              lbs
            </Text>
          </View>
          <View style={styles.twoTextInput}>
            <View
              style={styles.feet}>
              <TextInput
                placeholder="ft"
                placeholderTextColor="#ADADAD"
                keyboardType="numeric"
                style={styles.feetTextInput}
                value={textInputStore.ft}
                onChangeText={(text) => textInputStore.setft(text)}
              />
              <Text style={styles.feetTxt}>ft</Text>
            </View>
            <View
              style={styles.inches}>
              <TextInput
                placeholder="in"
                placeholderTextColor="#ADADAD"
                keyboardType="numeric"
                style={styles.inchesTxtInput}
                value={textInputStore.inch}
                onChangeText={(text) => textInputStore.setinch(text)}
              />
              <Text style={styles.feetTxt}>
                in
              </Text>
            </View>
          </View>
        </>
      ) : (
        <>
          <View
            style={styles.kgs}>
            <TextInput
              placeholder="kgs"
              placeholderTextColor="#ADADAD"
              keyboardType="numeric"
              style={styles.lbsTextInput}
              editable={false}
              value={convertToKg(textInputStore.lbs)}
            />
            <Text style={styles.feetTxt}>
              kgs
            </Text>
          </View>
          <View
            style={styles.kgs}>
            <TextInput
              placeholder="meters"
              placeholderTextColor="#ADADAD"
              keyboardType="numeric"
              style={styles.lbsTextInput}
              editable={false}
              value={convertToMeters(textInputStore.ft, textInputStore.inch)}
            />
            <Text style={styles.feetTxt}>
              meter
            </Text>
          </View>
        </>
      )}
      <ToggleButton isMetric={isMetric} onToggle={handleToggle} />
      <Button onPress={saveData} />
    </View>
  )
}

export default observer(MobX);