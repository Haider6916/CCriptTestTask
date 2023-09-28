import { Text, TextInput, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Button, ToggleButton } from '../../components';
import { useTextInput } from '../../Context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';

const Hooks = () => {
  const [isMetric, setIsMetric] = useState(true);
  const {
    lbs,
    updateLbs,
    ft,
    updateFt,
    inches,
    updateInches,
    convertLbsToKgs,
    convertFtToMeters,
  } = useTextInput();

  const kgs = convertLbsToKgs();
  const meters = convertFtToMeters();

  const handleToggle = newValue => {
    setIsMetric(newValue);
  };

  const saveData = async () => {
    console.log('Saved');
    await AsyncStorage.setItem('lbs', lbs);
    await AsyncStorage.setItem('ft', ft);
    await AsyncStorage.setItem('inches', inches);
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const savedLbs = await AsyncStorage.getItem('lbs');
        const savedFt = await AsyncStorage.getItem('ft');
        const savedInches = await AsyncStorage.getItem('inches');

        if (savedLbs !== null) {
          updateLbs(savedLbs);
        }
        if (savedFt !== null) {
          updateFt(savedFt);
        }
        if (savedInches !== null) {
          updateInches(savedInches);
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
      <Text style={styles.header}>
        Unit Converter (Using Context Api)
      </Text>
      {isMetric === true ? (
        <>
          <View
            style={styles.lbs}>
            <TextInput
              onChangeText={updateLbs}
              value={lbs}
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
                onChangeText={updateFt}
                value={ft}
                placeholder="ft"
                placeholderTextColor="#ADADAD"
                keyboardType="numeric"
                style={styles.feetTextInput}
              />
              <Text style={styles.feetTxt}>ft</Text>
            </View>
            <View
              style={styles.inches}>
              <TextInput
                onChangeText={updateInches}
                value={inches}
                placeholder="in"
                placeholderTextColor="#ADADAD"
                keyboardType="numeric"
                style={styles.inchesTxtInput}
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
              value={kgs.toString()}
              onChangeText={updateLbs}
              editable={false}
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
              value={meters.toString()}
              onChangeText={updateInches}
              editable={false}
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
  );
};

export default Hooks;