import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';
import HubsScreen from '../screens/HubsScreen';
import IdeasScreen from '../screens/IdeasScreen';
import ProfileScreen from '../screens/ProfileScreen';
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
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <NavigationTab setModalVisible={setModalVisible} />
      <PopupMenu modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </>
  );
}

function NavigationTab({ setModalVisible }) {
  const openPopup = () => setModalVisible(true);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: true,
        tabBarLabelStyle: { fontSize: 12 },
        tabBarActiveTintColor: colors.bluePrimary,
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
        component={HomeScreen}
        options={{
          tabBarButton: () => <PlusButton onPress={openPopup} />,
        }}
      />
      <Tab.Screen name="Ideas" component={IdeasScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

function PopupMenu({ modalVisible, setModalVisible }) {
  const closePopup = () => setModalVisible(false);

  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={modalVisible}
      onRequestClose={closePopup}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.styledModal}>
          <View style={styles.modalHeader}>
            <TouchableOpacity onPress={closePopup}>
              <Ionicons name="close" size={28} color={colors.bluePrimary} />
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Records</Text>
            <View style={{ width: 28 }} />
          </View>

          <View style={styles.modalContent}>
            <TouchableOpacity style={[styles.button, { backgroundColor: colors.blueSecondary }]}>
              <Ionicons name="walk-outline" size={20} color={colors.bluePrimary} />
              <Text style={[styles.buttonText, { color: colors.bluePrimary }]}>Log activity</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, { backgroundColor: colors.cyanSecondary }]}>
              <Ionicons name="water-outline" size={20} color={colors.cyanPrimary} />
              <Text style={[styles.buttonText, { color: colors.cyanPrimary }]}>Water intake</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, { backgroundColor: colors.orangeSecondary }]}>
              <Ionicons name="pencil-outline" size={20} color={colors.orangePrimary} />
              <Text style={[styles.buttonText, { color: colors.orangePrimary }]}>Manual Meal Input</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, { backgroundColor: colors.orangeSecondary }]}>
              <Ionicons name="scan-outline" size={20} color={colors.orangePrimary} />
              <Text style={[styles.buttonText, { color: colors.orangePrimary }]}>AI Meal Scan</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal >
  );
}

const styles = StyleSheet.create({
  plusButton: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.bluePrimary,
    width: 60,
    height: 60,
    borderRadius: 35,
  },
  plusIcon: {
    color: 'white',
    fontSize: 36,
    lineHeight: 36,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  styledModal: {
    backgroundColor: '#fff',
    width: '100%',
    height: 400,
    borderRadius: 20,
    padding: 20,
    marginBottom: -480,
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.bluePrimary,
  },
  modalContent: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  button: {
    width: '100%',
    borderRadius: 16,
    paddingVertical: 20,
    paddingHorizontal: 16,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 5,
  },
  buttonText: {
    fontWeight: 'bold',
    marginLeft: 12,
    fontSize: 16,
  },
});
