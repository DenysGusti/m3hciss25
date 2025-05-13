import { MaterialIcons } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
import React, { useState } from 'react';
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';

const TABS = ['Recipes', 'Activites'];

const breakfast = [

  {id: 'r1', title: 'Scrambled Egg & Avocado Tacos', subtitle: '400 kcal', image: require('../../assets/IdeasImages/Breakfast_Tortillas.jpg')},
  {id: 'r2', title: 'Apple-Cranberry Oatmeal with Pecans', subtitle: '350 kcal', image: require('../../assets/IdeasImages/Breakfast_Oatmeal.jpg')},
  {id: 'r3', title: 'Cottage Cheese Bowl with Berries & Walnuts', subtitle: '300 kcal', image: require('../../assets/IdeasImages/Breakfast_Cottage_Cheese_Fruit_Bowl.jpg')},
];
const snack = [

  {id: 'n1', title: 'Mango Salsa Dips', subtitle: '130 kcal', image: require('../../assets/IdeasImages/Snack_Salsa.jpg')},
  {id: 'n2', title: 'Chia Pudding', subtitle: '200 kcal', image: require('../../assets/IdeasImages/Chia_Pudding.jpg')},
  {id: 'n3', title: 'Homemade Oat Bars', subtitle: '190 kcal', image: require('../../assets/IdeasImages/Snack_Bars.jpg')},
];

const lunch = [

  {id: 'n1', title: 'Tomato-lentil Soup ', subtitle: '270 kcal', image: require('../../assets/IdeasImages/Lunch_Soup.jpg')},
  {id: 'n2', title: 'Teriyaki Chicken Rice Bowl', subtitle: '470 kcal', image: require('../../assets/IdeasImages/Lunch_Rice_Bowl.jpg')},
  {id: 'n3', title: 'Chickpea Quinoa Salad', subtitle: '350 kcal', image: require('../../assets/IdeasImages/Lunch_Chickpea_Quinoa_Salad_8.jpg')},
];

const activites = [
  
  {id: 'n1', title: 'XXXX', subtitle: 'XXXX', image: require('../../assets/IdeasImages/Lunch_Soup.jpg')},
  {id: 'n2', title: 'XXXX', subtitle: 'XXXX', image: require('../../assets/IdeasImages/Lunch_Soup.jpg')},
  {id: 'n3', title: 'XXXX', subtitle: 'XXXX', image: require('../../assets/IdeasImages/Lunch_Soup.jpg')},
];


export default function IdeasScreen() {
  const [activeTab, setActiveTab] = useState('Recipes');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity><MaterialIcons name="search" size={24} color="#01416D" /></TouchableOpacity>
        <Text style={styles.headerTitle}>Ideas</Text>
        <TouchableOpacity><MaterialIcons name="tune" size={24} color="#01416D" /></TouchableOpacity>
      </View>

      
      <View style={styles.tabsRow}>
        {TABS.map(tab => (
          <TouchableOpacity key={tab} onPress={() => setActiveTab(tab)}>
            <Text style={[styles.tabText, activeTab === tab && styles.activeTab]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView contentContainerStyle={styles.list}>
        {activeTab === 'Recipes' && (
          <>
            <SectionHeader title="Breakfast" />
            <FlatList
              data={breakfast}
              keyExtractor={item => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => <ClubCard {...item} />}
            />

            <SectionHeader title="Snack" />
            <FlatList
              data={snack}
              keyExtractor={item => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => <ClubCard {...item} />}
            />

            <SectionHeader title="Lunch" />
            <FlatList
              data={lunch}
              keyExtractor={item => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => <ClubCard {...item} />}
            />
          </>
        )}

        {activeTab === 'Activites' && (
          <>
            <SectionHeader title="Activities" />
            <FlatList
              data={activites}
              keyExtractor={item => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => <ClubCard {...item} />}
            />
          </>
        )}
      </ScrollView>
    </View>
  );
}

function SectionHeader({ title, onPress }) {
  return (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.viewAll}>View all ›</Text>
      </TouchableOpacity>
    </View>
  );
}

export function ClubCard({ title, subtitle, image }) {
  return (
    <View style={[styles.card, styles.clubCard]}>
      <View style={styles.imageWrapper}>
        <Image source={image} style={styles.cardImage} resizeMode="cover" />
        <View style={styles.heartIconContainer}>
          <AntDesign name="hearto" color="#01416D"/>
        </View>
      </View>

      <View style={styles.cardFooter}>
        <View style={styles.textContainer}>
          <Text style={styles.cardTitle}>{title}</Text>
          <Text style={styles.cardSubtitle}>{subtitle}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    marginTop: 45,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#01416D',
  },
  tabsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderColor: '#ECECEC',
    paddingVertical: 12,
    marginTop: 16,
  },
  tabText: {
    fontSize: 16,
    color: '#487696',
  },
  activeTab: {
    color: '#01416D',
    fontWeight: '700',
  },
  list: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 24,
  },
  clubCard: {
    width: 200,
    marginRight: 12,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    marginTop: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FF7C12',
  },
  viewAll: {
    fontSize: 14,
    color: '#FF7C12',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
  imageWrapper: {
    height: 100,
    overflow: 'hidden',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    position: 'relative',
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardImage: {
    width: '100%',
    height: '100%',
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#01416D',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#487696',
    marginTop: 4,
  },
  heartIconContainer: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 12,
    height: 11,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  textContainer: {
    flex: 1,
    marginRight: 8,
  },
});