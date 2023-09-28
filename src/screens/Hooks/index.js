import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {Button, ToggleButton} from '../../components';
import {useTextInput} from '../../Context';

const Hooks = () => {
  const [isMetric, setIsMetric] = useState(true); // State in the main screen component
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
    setIsMetric(newValue); // Update the state in the main screen component
  };
  return (
    <View
      style={{
        backgroundColor: 'black',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 14,
      }}>
      <Text style={{color: 'white', marginBottom: 10}}>
        Unit Converter (Using Context Api)
      </Text>
      {isMetric === true ? (
        <>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 20,
            }}>
            <TextInput
              onChangeText={updateLbs}
              value={lbs}
              // onChangeText={text => setReportData({...reportData, mg: text})}
              placeholder="lbs"
              placeholderTextColor="#ADADAD"
              keyboardType="numeric"
              style={{
                borderWidth: 1,
                borderColor: 'white',
                borderRadius: 25,
                paddingLeft: 20,
                flex: 1,
                color: 'white',
              }}
            />
            <Text style={{color: 'white', fontSize: 16, marginLeft: 10}}>
              lbs
            </Text>
          </View>
          <View style={{flexDirection: 'row', width: '100%'}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                flex: 0.48,
                marginRight: 10,
              }}>
              <TextInput
                onChangeText={updateFt}
                value={ft}
                placeholder="ft"
                placeholderTextColor="#ADADAD"
                keyboardType="numeric"
                style={{
                  borderWidth: 1,
                  borderColor: 'white',
                  borderRadius: 25,
                  paddingLeft: 20,
                  flex: 1,
                  color: 'white',
                }}
              />
              <Text style={{color: 'white', marginLeft: 10}}>ft</Text>
            </View>
            <View
              style={{flexDirection: 'row', alignItems: 'center', flex: 0.48}}>
              <TextInput
                onChangeText={updateInches}
                value={inches}
                placeholder="in"
                placeholderTextColor="#ADADAD"
                keyboardType="numeric"
                style={{
                  borderWidth: 1,
                  borderColor: 'white',
                  borderRadius: 25,
                  paddingLeft: 20,
                  flex: 1,
                  color: 'white',
                }}
              />
              <Text style={{color: 'white', marginLeft: 10, fontSize: 16}}>
                in
              </Text>
            </View>
          </View>
        </>
      ) : (
        <>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 20,
            }}>
            <TextInput
              // value={reportData.mg}
              // onChangeText={text => setReportData({...reportData, mg: text})}
              placeholder="kgs"
              placeholderTextColor="#ADADAD"
              keyboardType="numeric"
              style={{
                borderWidth: 1,
                borderColor: 'white',
                borderRadius: 25,
                paddingLeft: 20,
                flex: 1,
                color: 'white',
              }}
              value={kgs.toString()} // Set the value to the converted kgs
              onChangeText={updateLbs}
              editable={false}
            />
            <Text style={{color: 'white', fontSize: 16, marginLeft: 10}}>
              kgs
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 20,
            }}>
            <TextInput
              // value={reportData.mg}
              // onChangeText={text => setReportData({...reportData, mg: text})}
              placeholder="meters"
              placeholderTextColor="#ADADAD"
              keyboardType="numeric"
              style={{
                borderWidth: 1,
                borderColor: 'white',
                borderRadius: 25,
                paddingLeft: 20,
                flex: 1,
                color: 'white',
              }}
              value={meters.toString()} // Set the value to the converted meters
              onChangeText={updateInches}
              editable={false} // Update the inches value when the text changes
            />
            <Text style={{color: 'white', fontSize: 16, marginLeft: 10}}>
              meter
            </Text>
          </View>
        </>
      )}
      <ToggleButton isMetric={isMetric} onToggle={handleToggle} />
      <Button />
    </View>
  );
};

export default Hooks;

const styles = StyleSheet.create({});
