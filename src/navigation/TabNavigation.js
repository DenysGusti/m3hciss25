import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import HubsScreen from '../screens/HubsScreen';
import IdeasScreen from '../screens/IdeasScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

function PlusButton(props) {
  return (
    <TouchableOpacity style={styles.plusButton} {...props}>
      <Text style={styles.plusText}>＋</Text>
    </TouchableOpacity>
  );
}

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Hubs" component={HubsScreen} />
      <Tab.Screen
        name="Create"
        component={HomeScreen} // або ваш CreateScreen
        options={{
          tabBarButton: (props) => <PlusButton {...props} />,
        }}
      />
      <Tab.Screen name="Ideas" component={IdeasScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  plusButton: {
    backgroundColor: '#1F4C77',
    width: 60,
    height: 60,
    borderRadius: 30,
    top: -20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  plusText: {
    color: '#fff',
    fontSize: 32,
    lineHeight: 32,
  },
});