import { MaterialIcons } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
import React, { useState } from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const TABS = ['Recipes', 'Activities'];

const bodyFocusOptions = [
  { label: 'Face', image: require('../../assets/IdeasImages/face.jpg') },
  { label: 'Back', image: require('../../assets/IdeasImages/Back.jpg') },
  { label: 'Abs', image: require('../../assets/IdeasImages/abs.jpg') },
  { label: 'Arm', image: require('../../assets/IdeasImages/Arm.jpg') },
  { label: 'Leg', image: require('../../assets/IdeasImages/Leg.jpg') },
  
  
 
];
const levelOptions = ['Beginner', 'Intermidiate', 'Advanced', 'Expert'];
const durationOptions = ['5–10 min', '10–15 min', '15–20 min', '20–30 min'];

const breakfast = [
  { id: 'r1', title: 'Scrambled Egg & Avocado Tacos', subtitle: '400 kcal', image: require('../../assets/IdeasImages/Breakfast_Tortillas.jpg') },
  { id: 'r2', title: 'Apple-Cranberry Oatmeal with Pecans', subtitle: '350 kcal', image: require('../../assets/IdeasImages/Breakfast_Oatmeal.jpg') },
  { id: 'r3', title: 'Cottage Cheese Bowl with Berries & Walnuts', subtitle: '300 kcal', image: require('../../assets/IdeasImages/Breakfast_Cottage_Cheese_Fruit_Bowl.jpg') },
];

const snack = [
  { id: 'n1', title: 'Mango Salsa Dips', subtitle: '130 kcal', image: require('../../assets/IdeasImages/Snack_Salsa.jpg') },
  { id: 'n2', title: 'Chia Pudding', subtitle: '200 kcal', image: require('../../assets/IdeasImages/Chia_Pudding.jpg') },
  { id: 'n3', title: 'Homemade Oat Bars', subtitle: '190 kcal', image: require('../../assets/IdeasImages/Snack_Bars.jpg') },
];

const lunch = [
  { id: 'n1', title: 'Tomato-lentil Soup ', subtitle: '270 kcal', image: require('../../assets/IdeasImages/Lunch_Soup.jpg') },
  { id: 'n2', title: 'Teriyaki Chicken Rice Bowl', subtitle: '470 kcal', image: require('../../assets/IdeasImages/Lunch_Rice_Bowl.jpg') },
  { id: 'n3', title: 'Chickpea Quinoa Salad', subtitle: '350 kcal', image: require('../../assets/IdeasImages/Lunch_Chickpea_Quinoa_Salad_8.jpg') },
];

const activities = {
  pilates: [
    { id: 'a1', title: 'Pilates Ball Worout', subtitle: '20 minutes', image: require('../../assets/IdeasImages/pilates.jpg') },
    { id: 'a2', title: 'Pilates Sculpt', subtitle: '30 minutes', image: require('../../assets/IdeasImages/pilates_2.jpg') },
    { id: 'a3', title: 'Dynamic Pilates', subtitle: '30 minutes', image: require('../../assets/IdeasImages/pilates_3.jpg') },
  ],
  yoga: [
    { id: 'a4', title: 'Sunrise Yoga', subtitle: '25 minutes', image: require('../../assets/IdeasImages/Yoga.jpg') },
    { id: 'a5', title: 'Night Meditation', subtitle: '20 minutes', image: require('../../assets/IdeasImages/yoga2.jpg') },
    { id: 'a6', title: 'Stretch & Flow', subtitle: '20 minutes', image: require('../../assets/IdeasImages/yoga3.jpg') },
  ],
};

export default function IdeasScreen() {
  const [activeTab, setActiveTab] = useState('Recipes');
  const [selectedBodyFocus, setSelectedBodyFocus] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [selectedDuration, setSelectedDuration] = useState(null);

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
            <SectionHeaderRecipes title="Breakfast" />
            <FlatList
              data={breakfast}
              keyExtractor={item => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => <ClubCard {...item} />}
            />

            <SectionHeaderRecipes title="Snack" />
            <FlatList
              data={snack}
              keyExtractor={item => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => <ClubCard {...item} />}
            />

            <SectionHeaderRecipes title="Lunch" />
            <FlatList
              data={lunch}
              keyExtractor={item => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => <ClubCard {...item} />}
            />
          </>
        )}

      {activeTab === 'Activities' && (
      <>
        <FilterGroup title="Body Focus" options={bodyFocusOptions} selected={selectedBodyFocus} onSelect={setSelectedBodyFocus} />
        <FilterGroup title="Level" options={levelOptions} selected={selectedLevel} onSelect={setSelectedLevel} />
        <FilterGroup title="Duration" options={durationOptions} selected={selectedDuration} onSelect={setSelectedDuration} />
            
        <SectionHeaderActivities title="Pilates" />
        <FlatList
          data={activities.pilates}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <ClubCard {...item} />}
        />

        <SectionHeaderActivities title="Yoga" />
        <FlatList
          data={activities.yoga}
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

function SectionHeaderRecipes({ title, onPress }) {
  return (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitleRecipes}>{title}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.viewAll}>View all ›</Text>
      </TouchableOpacity>
    </View>
  );
}
function SectionHeaderActivities({ title, onPress }) {
  return (
    <View style={styles.SectionHeader}>
      <Text style={styles.sectionTitleActivities}>{title}</Text>
    </View>
  );
}

function ClubCard({ title, subtitle, image }) {
  return (
    <View style={[styles.card, styles.clubCard]}>
      <View style={styles.imageWrapper}>
        <Image source={image} style={styles.cardImage} resizeMode="cover" />
        <View style={styles.heartIconContainer}>
          <AntDesign name="hearto" color="#01416D" />
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

function FilterGroup({ title, options, selected, onSelect }) {
  const isIconGroup = typeof options[0] === 'object';

  const renderItem = ({ item }) => {
    const value = isIconGroup ? item.label : item;
    const isSelected = selected === value;

    return (
      <TouchableOpacity
        onPress={() => onSelect(isSelected ? null : value)}
        style={
          isIconGroup
            ? {
                width: 64,
                height: 64,
                borderRadius: 30,
                overflow: 'hidden',
                marginRight: 8,
                backgroundColor: '#E5F1F8',
              }
            : {
                paddingVertical: 6,
                paddingHorizontal: 14,
                backgroundColor: isSelected ? '#01416D' : '#E5F1F8',
                borderRadius: 20,
                marginRight: 8,
                justifyContent: 'center',
                alignItems: 'center',
              }
        }
      >
        {isIconGroup ? (
          <>
            <Image
              source={item.image}
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
              }}
              resizeMode="cover"
            />
            <View
              style={{
                ...StyleSheet.absoluteFillObject,
                backgroundColor: 'rgba(0,0,0,0.3)',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text style={{ color: 'white', fontWeight: '600', fontSize: 10 }}>{item.label}</Text>
            </View>
          </>
        ) : (
          <Text style={{ color: isSelected ? 'white' : '#01416D', fontWeight: '500' }}>{item}</Text>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ marginVertical: 10 }}>
      <Text style={{ fontWeight: '600', color: '#01416D', marginBottom: 6 }}>{title}</Text>
      <FlatList
        data={options}
        renderItem={renderItem}
        keyExtractor={(item, index) => (typeof item === 'string' ? item : item.label)}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
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
  sectionTitleActivities: {
    fontSize: 16,
    fontWeight: '600',
    color: '#01416D',
  },
  sectionTitleRecipes: {
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
