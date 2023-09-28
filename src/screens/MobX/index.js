import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Button, ToggleButton } from '../../components';

const MobX = () => {
    const [isMetric, setIsMetric] = useState(true); // State in the main screen component

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
    <Text style={{color: 'white', marginBottom: 10}}>Unit Converter (Using MobX)</Text>
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
            // value={reportData.mg}
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
              color:'white'
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
              placeholder="ft"
              placeholderTextColor="#ADADAD"
              keyboardType="numeric"
              style={{
                borderWidth: 1,
                borderColor: 'white',
                borderRadius: 25,
                paddingLeft: 20,
                flex: 1,
                color:'white'
              }}
            />
            <Text style={{color: 'white', marginLeft: 10}}>ft</Text>
          </View>
          <View
            style={{flexDirection: 'row', alignItems: 'center', flex: 0.48}}>
            <TextInput
              placeholder="in"
              placeholderTextColor="#ADADAD"
              keyboardType="numeric"
              style={{
                borderWidth: 1,
                borderColor: 'white',
                borderRadius: 25,
                paddingLeft: 20,
                flex: 1,
                color:'white'
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
              color:'white'
            }}
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
              color:'white'
            }}
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
  )
}

export default MobX

const styles = StyleSheet.create({})