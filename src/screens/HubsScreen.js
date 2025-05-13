import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


const TABS = ['Joined', 'Challenges', 'Clubs', 'Forum'];


const challengesData = [
  { id: '1', title: 'Morning Sip – A 21-Day Ritual', subtitle: '+120 xp', image: require('../../assets/sip.jpg') },
  { id: '2', title: '7 days of protein breakfast', subtitle: '+70 xp', image: require('../../assets/protein_breakfast.jpg') },
  { id: '3', title: '21 floors for 21 days', subtitle: '+240 xp', image: require('../../assets/stairs.png') },
  { id: '4', title: '7 Days of Salad Creation', subtitle: '+60 xp', image: require('../../assets/salads.jpg') },
  { id: '5', title: '10 days of morning walks', subtitle: '+100 xp', image: require('../../assets/morning_walk.jpg') },
  { id: '6', title: '5 days 5 vegetables or fruits daily', subtitle: '+60 xp', image: require('../../assets/fruits_vegetables.jpg') },
];


const recommendedClubs = [
  {
    id: 'r1',
    title: 'Along the trails of Vienna',
    subtitle: 'The outskirts of Vienna',
    image: require('../../assets/hiking.jpg'),
    
  },
  {
    id: 'r2',
    title: 'In the footsteps of Shaolin Warriors',
    subtitle: 'Linke Wienzeile 94, 1060 Vienna',
    image: require('../../assets/karate.jpg'),
  },
  
  {
    id: 'r3',
    title: 'Roller-skating adventure',
    subtitle: 'Prater, 1020 Vienna',
    image: require('../../assets/roller_skates.jpg'),
    
  },
];

const nearbyClubs = [
  {
    id: 'n1',
    title: 'Morning joggers',
    subtitle: 'Volksgarten, 1010 Vienna',
    image: require('../../assets/jogging.jpg'),
    
  },
  {
    id: 'n2',
    title: 'Stretch & Relax',
    subtitle: 'Schönbrunner Schloßstraße 47, 1130 Vienna',
    image: require('../../assets/stretch.jpg'),
    
  },
  {
    id: 'n3',
    title: 'Morning yoga beam',
    subtitle: 'Parkring 1, 1010 Vienna',
    image: require('../../assets/yoga.jpg'),
    
  },
];

const trendingClubs = [
  {
    id: 't1',
    title: 'Calisthenic health',
    subtitle: 'Auf der Schmelz 6A, 1150 Vienna',
    image: require('../../assets/calisthenic.jpg'),
    
  },
  {
    id: 't2',
    title: 'Marathon pulse',
    subtitle: 'Prater, 1020 Vienna',
    image: require('../../assets/marathon.jpg'),
    
  },
];

export default function HubsScreen() {
  const [activeTab, setActiveTab] = useState('Challenges');

  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <TouchableOpacity><MaterialIcons name="search" size={24} color="#01416D" /></TouchableOpacity>
        <Text style={styles.headerTitle}>Hubs</Text>
        <TouchableOpacity><MaterialIcons name="chat-bubble-outline" size={24} color="#01416D" /></TouchableOpacity>
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

      
      {activeTab === 'Challenges' && (
        <FlatList
          data={challengesData}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <ChallengesCard {...item} />}
          contentContainerStyle={styles.list}
        />
      )}

      {activeTab === 'Clubs' && (
        <ScrollView contentContainerStyle={styles.list}>
          
          <SectionHeader title="Recommended Clubs" onPress={() => {/* навігація на список */}} />
          <FlatList
            data={recommendedClubs}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <ClubCard {...item} />}
          />

          
          <SectionHeader title="Clubs near me" onPress={() => {/* навігація на список */}} />
          <FlatList
            data={nearbyClubs}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <ClubCard {...item} />}
          />

          
          <SectionHeader title="Trending Clubs" onPress={() => {/* навігація на список */}} />
          <FlatList
            data={trendingClubs}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <ClubCard {...item} />}
          />
        </ScrollView>
      )}

      
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

function ChallengesCard({ title, subtitle, image }) {
  return (
    <View style={styles.card}>
      <View style={styles.imageWrapper}>
        <Image source={image} style={styles.cardImage} resizeMode="cover" />

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

function ClubCard({ title, subtitle, image }) {
  return (
    <View style={[styles.card, styles.clubCard]}>
      <View style={styles.imageWrapper}>
        <Image source={image} style={styles.cardImage} resizeMode="cover" />



      </View>
      <View style={styles.cardFooter}>
      <View style={styles.textContainer}>
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
  container: { flex: 1, 
    backgroundColor: '#fff' },
  header: {
    marginTop: 45, 
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'space-between', 
    paddingHorizontal: 16,
    paddingTop: 16, 
    paddingBottom: 8
  },
  headerTitle: { fontSize: 18, 
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
  tabText: { fontSize: 16, 
    color: '#487696' 
  },
  activeTab: { color: '#01416D', 
    fontWeight: '700' 
  },

  list: { paddingHorizontal: 16, 
    paddingTop: 16, 
    paddingBottom: 24 
  },

  sectionHeader: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center', 
    marginBottom: 8, 
    marginTop: 16
  },

  sectionTitle: { fontSize: 16, 
    fontWeight: '600', 
    color: '#01416D' 
  },

  viewAll: { fontSize: 14, 
    color: '#487696' 
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
  clubCard: { 
    width: 200, 
    marginRight: 12 
  }, 

  imageWrapper: {
    height: 140, 
    overflow: 'hidden',
    borderTopLeftRadius: 12, 
    borderTopRightRadius: 12,
  },

  cardImage: {
    width: '100%', 
    height: '100%' 
  },

  cardFooter: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,



  }, 
  cardTitle: { fontSize: 16, fontWeight: '600', color: '#01416D' },
  cardSubtitle: { fontSize: 14, color: '#487696', marginTop: 4 },

  addBtn: {
    width: 32, 
    height: 32, 
    borderRadius: 16,
    backgroundColor: '#01416D', 
    justifyContent: 'center',
    alignItems: 'center',
    
  }, 
  textContainer: {
       flex: 1,          
       marginRight: 8,    
     },

});
