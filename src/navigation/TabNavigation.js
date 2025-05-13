import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';
import HubsScreen from '../screens/HubsScreen';
import IdeasScreen from '../screens/IdeasScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

const Tab = createBottomTabNavigator();

function PlusButton({ onPress }) {
  return (
    <TouchableOpacity style={styles.plusButton} onPress={onPress}>
      <Text style={styles.plusIcon}>＋</Text>
    </TouchableOpacity>
  );
}

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: true,
        tabBarLabelStyle: { fontSize: 12 },
        tabBarActiveTintColor: colors.bluePrimary,  // TODO colors in 1 place
        tabBarInactiveTintColor: colors.blueTertiary,
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          switch (route.name) {
            case 'Home':
              return <Ionicons name={focused ? 'home' : 'home-outline'} size={size} color={color} />;
            case 'Hubs':
              return <Ionicons name={focused ? 'people' : 'people-outline'} size={size} color={color} />;
            case 'Ideas':
              return <Ionicons name={focused ? 'sparkles' : 'sparkles-outline'} size={size} color={color} />;
            case 'Profile':
              return <Ionicons name={focused ? 'person' : 'person-outline'} size={size} color={color} />;
            default:
              return null;
          }
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Hubs" component={HubsScreen} />
      <Tab.Screen
        name="Create"
        component={HomeScreen} // Or CreateScreen
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
    position: 'absolute',
    bottom: 0, // ensures consistent vertical alignment
    alignSelf: 'center', // centers horizontally within tab bar slot
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.bluePrimary,
    width: 70,
    height: 70,
    borderRadius: 35,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 5,
  },
  plusIcon: {
    color: 'white',
    fontSize: 36,
    lineHeight: 36,
  },
});
