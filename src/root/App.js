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
              fontSize: 16, // Adjust the font size as needed
              fontWeight: 'bold',
              marginBottom: 10, // You can set the font weight to 'bold' or other styles
            },
            tabBarIcon: () => null, // Hide the icons
            tabBarStyle: {
              backgroundColor: 'green', // Change the background color
            },
            tabBarActiveTintColor: 'white', // Set the selected tab text color
            tabBarInactiveTintColor: 'gray', // Set the unselected tab text color
          })}>
          <Tab.Screen
            name="Hooks"
            component={HomeScreen}
            options={{
              headerShown: false,
              tabBarLabel: 'Home', // You can customize the label for each tab here
            }}
          />
          <Tab.Screen
            name="MobX"
            component={SettingsScreen}
            options={{
              headerShown: false,
              tabBarLabel: 'Settings', // Customize the label for this tab
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
