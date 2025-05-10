/*
import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

const TABS = ['Joined', 'Challenges', 'Clubs', 'Forum'];
const DATA = [
  { id: '1', title: 'Plant–Powered 21', subtitle: 'Apr 8 to Apr 29' },
  { id: '2', title: 'Lorem Lorem ipsum', subtitle: 'Lorem ipsum' },
  { id: '3', title: 'Lorem Lorem ipsum', subtitle: 'Lorem ipsum' },
];

export default function HubsScreen() {
  const [activeTab, setActiveTab] = useState('Challenges');

  return (
    <View style={styles.container}>

      <View style={styles.tabsRow}>
        {TABS.map((tab) => (
          <TouchableOpacity key={tab} onPress={() => setActiveTab(tab)}>
            <Text
              style={[
                styles.tabText,
                activeTab === tab && styles.activeTab
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <HubCard {...item} />}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

function HubCard({ title, subtitle }) {
  return (
    <View style={styles.card}>
      <View style={styles.imagePlaceholder}>
        <Text style={styles.imgIcon}>🖼️</Text>
      </View>
      <View style={styles.footer}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
        <TouchableOpacity style={styles.addBtn}>
          <Text style={styles.plus}>＋</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  tabsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#ececec',
    marginTop: 100,        // <- ось цей відступ
  },
  tabText: { fontSize: 16, color: '#888' },
  activeTab: { color: '#1F4C77', fontWeight: '600' },
  list: { padding: 16 },

  card: {
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
  },
  imagePlaceholder: {
    height: 140,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgIcon: { fontSize: 32, color: '#aaa' },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
  },
  title: { fontSize: 16, fontWeight: '600', color: '#1F4C77' },
  subtitle: { fontSize: 14, color: '#555', marginTop: 4 },
  addBtn: {
    backgroundColor: '#1F4C77',
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plus: { color: '#fff', fontSize: 20, lineHeight: 20 },
});
*/


import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const TABS = ['Joined', 'Challenges', 'Clubs', 'Forum'];
const DATA = [
  { id: '1', title: 'Plant–Powered 21', subtitle: 'Apr 8 to Apr 29' },
  { id: '2', title: 'Lorem Lorem ipsum', subtitle: 'Lorem ipsum' },
  { id: '3', title: 'Lorem Lorem ipsum', subtitle: 'Lorem ipsum' },
  { id: '4', title: 'Lorem Lorem ipsum', subtitle: 'Lorem ipsum' },
  { id: '5', title: 'Lorem Lorem ipsum', subtitle: 'Lorem ipsum' },
  { id: '6', title: 'Lorem Lorem ipsum', subtitle: 'Lorem ipsum' },
];

export default function HubsScreen() {
  const [activeTab, setActiveTab] = useState('Challenges');

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity>
          <MaterialIcons name="search" size={24} color="#01416D" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Hubs</Text>
        <TouchableOpacity>
          <MaterialIcons name="chat-bubble-outline" size={24} color="#01416D" />
        </TouchableOpacity>
      </View>

      {/* TABS */}
      <View style={styles.tabsRow}>
        {TABS.map(tab => (
          <TouchableOpacity key={tab} onPress={() => setActiveTab(tab)}>
            <Text
              style={[
                styles.tabText,
                activeTab === tab && styles.activeTab
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* LIST OF CARDS */}
      <FlatList
        data={DATA}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <HubCard {...item} />}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

function HubCard({ title, subtitle }) {
  return (
    <View style={styles.card}>
      <View style={styles.imagePlaceholder}>
        <MaterialIcons name="image" size={32} color="#487696" />
      </View>
      <View style={styles.cardFooter}>
        <View>
          <Text style={styles.cardTitle}>{title}</Text>
          <Text style={styles.cardSubtitle}>{subtitle}</Text>
        </View>
        <TouchableOpacity style={styles.addBtn}>
          <MaterialIcons name="add" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    marginTop: 45,   
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#01416D'
  },
  tabsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderColor: '#ECECEC',
    paddingVertical: 12,
    marginTop: 16
  },
  tabText: {
    fontSize: 16,
    color: '#487696'
  },
  activeTab: {
    color: '#01416D',
    fontWeight: '700'
  },
  list: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 24
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    // невелика тінь (Android & iOS)
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2
  },
  imagePlaceholder: {
    height: 140,
    backgroundColor: '#E6E9EE',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#01416D'
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#487696',
    marginTop: 4
  },
  addBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#01416D',
    justifyContent: 'center',
    alignItems: 'center'
  }
});