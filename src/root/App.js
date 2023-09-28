import * as React from 'react';
import {StatusBar, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Hooks from '../screens/Hooks';
import MobX from '../screens/MobX';
import {TextInputProvider} from '../Context';

const App = () => {
  const HomeScreen = () => {
    return (
      <TextInputProvider>
        <Hooks />
      </TextInputProvider>
    );
  };
  const SettingsScreen = () => {
    return <MobX />;
  };
  const Tab = createBottomTabNavigator();
  return (
    <>
      <StatusBar backgroundColor="black" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={() => ({
            tabBarLabelStyle: {
              fontSize: 16, 
              fontWeight: 'bold',
              marginBottom: 10,
            },
            tabBarIcon: () => null, 
            tabBarStyle: {
              backgroundColor: 'green', 
            },
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: '#c0c0c0',
          })}>
          <Tab.Screen
            name="Hooks"
            component={HomeScreen}
            options={{
              headerShown: false,
              tabBarLabel: 'Hooks', 
            }}
          />
          <Tab.Screen
            name="MobX"
            component={SettingsScreen}
            options={{
              headerShown: false,
              tabBarLabel: 'MobX',
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
