// ProfileScreen.js
import React, { useState } from 'react';
import {ScrollView, View, Text, Image, TouchableOpacity, StyleSheet, LayoutAnimation } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';

// Dummy data for charts and lists
const chartData = {
  Distance: [2.5, 3.2, 1.8, 4.0, 5.5, 4.2, 3.0],   // distances in km per day
  Calories: [300, 450, 800, 650, 1000, 750, 900],  // calories per day
  Hydration: [1200, 1800, 1100, 2000, 1700, 2500, 1900] // hydration in ml per day
};
const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];  // day labels for chart

const categoryUnits = {
  Distance: 'km',
  Calories: 'kcal',
  Hydration: 'ml'
};

const CATEGORY_BACKGROUNDS = {
  Calories: colors.orangeSecondary,
  Hydration: colors.cyanSecondary,
  Distance: colors.blueSecondary,
};

const favoriteRecipes = [
  { id: 1, title: 'Lorem ipsum', kcal: 320, time: '15 min' },
  { id: 2, title: 'Lorem ipsum', kcal: 320, time: '15 min' }
];
const favoriteActivities = [
  { id: 1, title: 'Pilates Sculpt', time: '20 min' },
  { id: 2, title: 'Pilates Sculpt', time: '20 min' },
  { id: 3, title: 'Pilates Sculpt', time: '20 min' }
];

// Theme colors
const LIGHT_BLUE = 'rgba(31,76,119,0.1)';     // light blue background for buttons
const CATEGORY_COLORS = {
  Distance: colors.bluePrimary,
  Calories: colors.orangePrimary,
  Hydration: colors.cyanPrimary,               // medium blue for hydration category
};

export default function ProfileScreen({ navigation }) {
  const [selectedCategory, setSelectedCategory] = useState('Calories');

  // Determine current chart data and color
  const currentData = chartData[selectedCategory];
  const categoryColor = CATEGORY_COLORS[selectedCategory];

  const unit = categoryUnits[selectedCategory];
  const isHydration = selectedCategory === 'Hydration';
  const categoryBackgroundColor = CATEGORY_BACKGROUNDS[selectedCategory] || '#fff';

  const displayData = isHydration
    ? currentData.map(val => val / 1000)
    : currentData;

  const maxChartValue = Math.max(...currentData);
  const chartHeight = 100;  // max bar height in pixels

  
  

  const handleCategoryPress = (category) => {
    if (category !== selectedCategory) {
      // Animate bar height change on category switch
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      setSelectedCategory(category);
    }
  };

  return (
    <SafeAreaProvider>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header Row */}
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Ionicons name="arrow-back" size={24} color={colors.bluePrimary} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Profile</Text>
          <TouchableOpacity onPress={() => { /* Settings icon pressed (no action) */ }}>
            <Ionicons name="settings-outline" size={24} color={colors.bluePrimary} />
          </TouchableOpacity>
        </View>

        {/* Profile Info Section */}
        <View style={styles.profileSection}>
          {/* Profile Image */}
          <Image 
            style={styles.profileImage}
            source={{ uri: 'https://media.wired.com/photos/62328c272c80bae389480b49/3:2/w_1280,c_limit/Volodymyr-Zelensky-Deepfake-Ukraine-Business-1239124035.jpg' }}  // dummy profile image
          />
          {/* User details */}
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Dubovis Olivia</Text>
            <View style={styles.profileDetailRow}>
              <Ionicons name="mail-outline" size={16} color="#555" style={styles.profileDetailIcon} />
              <Text style={styles.profileDetailText}>dubovsliliha@gmail.com</Text>
            </View>
            <View style={styles.profileDetailRow}>
              <Ionicons name="school-outline" size={16} color="#555" style={styles.profileDetailIcon} />
              <Text style={styles.profileDetailText}>University of Vienna</Text>
            </View>
            <View style={styles.profileDetailRow}>
              <Ionicons name="calendar-outline" size={16} color="#555" style={styles.profileDetailIcon} />
              <Text style={styles.profileDetailText}>22 years</Text>
            </View>
          </View>
        </View>

        {/* XP Level and Progress Bar */}
        <View style={styles.xpSection}>
          <View style={styles.levelContainer}>
            <Text style={styles.levelNumber}>2</Text>
          </View>
          <View style={styles.xpContainer}>
            <Text style={styles.levelLabel}>Level</Text>
            <View style={styles.xpBarContainer}>
              <View style={styles.xpBarBackground}>
                <View style={styles.xpBarInner}>
                  <View style={[styles.xpBarFill, { width: `${(500/1200)*100}%` }]}>
                </View>
                <Text style={styles.xpTextOnBar}>500 / 1200 xp</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Statistics Chart Section */}
        {/* Category Tabs */}
        <View style={styles.statsTabs}>
  {['Distance', 'Calories', 'Hydration'].map(category => (
    <TouchableOpacity key={category} onPress={() => handleCategoryPress(category)}>
      <View style={styles.statsTab}>
        <Text style={[
          styles.statsTabText,
          { color: selectedCategory === category ? CATEGORY_COLORS[category] : '#555' }
        ]}>
          {category}
        </Text>
        {selectedCategory === category && (
          <View style={[styles.tabUnderline, { backgroundColor: CATEGORY_COLORS[category] }]} />
        )}
      </View>
    </TouchableOpacity>
  ))}
</View>

{/* Chart Section */}
<View style={[styles.statsSection, { backgroundColor: categoryBackgroundColor }]}>
  <View style={styles.chartGridContainer}>

    {/* Grid Lines + Y-axis Labels */}
    {[3, 2, 1, 0].map((level, i) => (
      <View key={level} style={[styles.chartGridLine, { top: `${(i / 4.9) * 100 + 30}%` }]}>
        <View style={styles.chartLine} />
        <Text style={styles.chartLineLabel}>
          {isHydration ? (level * maxChartValue / 4).toFixed(1) : Math.round(level * maxChartValue / 3)} {unit}</Text>
      </View>
    ))}
    
    {/* Bar Chart */}
      <View style={styles.chartContainer}>
        <View style={[styles.barChart, { height: chartHeight }]}>
          {currentData.map((value, index) => {
            const barHeight = (value / maxChartValue) * chartHeight;
            return (
              <View key={index} style={styles.barContainer}>
                <View style={[
                  styles.bar,
                  { height: barHeight, backgroundColor: categoryColor }
                ]} />
              </View>
            );
          })}
        </View>

        {/* Day Labels (X-axis) */}
        <View style={styles.chartLabelsRow}>
          {days.map((day, index) => (
            <Text key={index} style={styles.chartLabel}>{day}</Text>
        ))}
        </View>
      </View>
    </View>
  </View>

        {/* Favorite Recipes Section */}
        <View style={[styles.sectionCard, { marginTop: 16 }]}>
          <View style={[styles.sectionRecipesHeader]}>
          </View>
          <View style={styles.headerContent}>
            <Text style={styles.sectionHeaderTextRecipes}>Favorite recipes</Text>
          </View>
          <View style={styles.sectionRecipesHeaderUnderline} />
          <View style={styles.sectionContent}>
            {favoriteRecipes.map(item => (
              <View key={item.id} style={styles.favoriteItem}>
                {/* Recipe image placeholder */}
                <View style={styles.itemImagePlaceholder} />
                <View style={styles.itemInfo}>
                  <Text style={styles.itemTitle}>{item.title}</Text>
                  <Text style={styles.itemSubtitle}>{item.kcal} kcal   {item.time}</Text>
                </View>
                <Ionicons name="heart" size={20} color={colors.orangePrimary} />
              </View>
            ))}
          </View>
          <TouchableOpacity 
            style={[styles.showAllButton, { backgroundColor: colors.orangeSecondary }]} 
            onPress={() => { /* Show all recipes (navigate or action) */ }}
          >
            <Text style={[styles.showAllButtonText, { color: colors.orangePrimary }]}>Show all favorite Recipes</Text>
          </TouchableOpacity>
        </View>

        {/* Favorite Sport Activities Section */}
        <View style={[styles.sectionCard, { marginTop: 16, marginBottom: 24 }]}>
          <View style={[styles.sectioActivitiesnHeader]}>
          </View>
          <View style={styles.headerContent}>
            <Text style={styles.sectionHeaderTextActivities}>Favorite sport activities</Text>
          </View>
          <View style={styles.sectionActivitiesHeaderUnderline} />
          <View style={styles.sectionContent}>
            {favoriteActivities.map(item => (
              <View key={item.id} style={styles.favoriteItem}>
                {/* Activity image placeholder */}
                <View style={styles.itemImagePlaceholder} />
                <View style={styles.itemInfo}>
                  <Text style={styles.itemTitle}>{item.title}</Text>
                  <Text style={styles.itemSubtitle}>{item.time}</Text>
                </View>
                <Ionicons name="heart" size={20} color={colors.bluePrimary} />
              </View>
            ))}
          </View>
          <TouchableOpacity 
            style={[styles.showAllButton, { backgroundColor: colors.blueSecondary }]} 
            onPress={() => { /* Show all activities (navigate or action) */ }}
          >
            <Text style={[styles.showAllButtonText, { color: colors.bluePrimary }]}>Show all favorite Sport Activities</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  scrollContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
    marginTop: 30
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.bluePrimary
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16
  },
  profileInfo: {
    flex: 1
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.bluePrimary,
    alignItems: 'center',
    marginBottom: 4
  },
  profileDetailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2
  },
  profileDetailIcon: {
    marginRight: 6
  },
  profileDetailText: {
    fontSize: 14,
    color: '#555'
  },




 //===============xpSection===============
  xpSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D3DEE5',
    borderRadius: 20,
    marginBottom: 20
  },
  chartGridContainer: {
    height: 160,
    paddingHorizontal: 8,
    paddingBottom: 10,
    borderRadius: 8,
    position: 'relative'
  },

  levelContainer: {
    marginRight: 16,
    alignItems: 'center',
  },
  chartLine: {
    flex: 1,
    height: 1,
    backgroundColor: colors.bluePrimary,
  },

  chartLineLabel: {
    width: 60,
    textAlign: 'right',
    fontSize: 12,
  },

  barChart: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    height: '100%',
    alignItems: 'center'
  },

  barContainer: {
    flexDirection: 'row',
    alignItems: 'right',
    justifyContent: 'flex-end',
    marginHorizontal: 1,
  },

  bar: {
    width: 12,
    borderRadius: 6
  },

  chartLabelsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 4
  },

  chartLabel: {
    fontSize: 12,
    color: colors.bluePrimary,
    alignItems: 'center',
    fontWeight: '600'
  },

  levelNumber: {
    fontSize: 36,
    fontWeight: 'bold',
    color: colors.bluePrimary,
    lineHeight: 40,
    marginLeft: 16,
  },

  levelLabel: {
    fontSize: 16,
    left: 10,
    color: '#555',
    color: colors.bluePrimary,
    marginBottom: 4,
  },
  xpBarContainer: {
    flex: 1,
    marginBottom: 14,
  },
  xpContainer: {
    width: '80%',         
    alignSelf: 'center',  
    marginTop: 10,
  },
  xpBarBackground: {
    backgroundColor: '#EEE',
    height: 30,
    borderRadius: 20,
    overflow: 'hidden', 
    position: 'relative'
  },
  xpBarInner: {
    flex: 1,
    paddingHorizontal: 3,
    paddingVertical: 3,
    justifyContent: 'center'
  },
  xpBarFill: {
    backgroundColor: colors.orangePrimary,
    height: '100%',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'flex-end', 
    paddingRight: 8,        
  },
  xpTextOnBar: {
    position: 'absolute',
    right: 30,
    fontSize: 12,
    color: '#555',
    fontWeight: '600',
  },
 //===============xpSection===============

 

  statsSection: {
    marginBottom: 20,
    borderRadius: 20,
    elevation: 4,
  },

  statsTabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 12
  },
  statsTabText: {
    fontSize: 16,
    fontWeight: '600'
  },
  tabUnderline: {
    marginTop: 4,
    height: 3,
    width: '100%',
    borderRadius: 2
  },

  barUnderline: {
    height: 3,
    width: '93%',
    borderRadius: 2,
    alignSelf: 'center',  
  },
  chartContainer: {
    height: '100%',
    width: '90%',
    top: 22,
    right: 11,
    
  },
  barChart: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginTop: 15
  },
  barContainer: {
    flex: 1,
    marginHorizontal: 10,
    alignItems: 'left'
  },
  sectionRecipesHeaderUnderline: {
    height: 1,
    alignSelf: 'center',
    backgroundColor: colors.orangePrimary,
    width: '93%',
    borderRadius: 2,
  },
  sectionActivitiesHeaderUnderline: {
    height: 1,
    alignSelf: 'center',
    backgroundColor: colors.bluePrimary,
    width: '93%',
    borderRadius: 2,
  },
  bar: {
    width: 24,
    borderRadius: 2
  },
  chartLabelsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
    paddingHorizontal: 18,

    marginBottom: 10
  },
  chartGridLine: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: -10,
  },
  chartLabel: {
    fontSize: 12,
    color: colors.bluePrimary
  },



  sectionCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
  sectionRecipesHeader: {
    backgroundColor: colors.orangePrimary, // solid orange bar
    padding: 10,
    paddingBottom: 12,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  sectioActivitiesnHeader: {
    backgroundColor: colors.bluePrimary, // solid orange bar
    padding: 10,
    paddingBottom: 12,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },

  headerContent: {
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingTop: 8,
    paddingBottom: 12,
    borderTopLeftRadius: 16,  
    borderTopRightRadius: 16,
    marginTop: -11,
  },
  sectionHeaderTextRecipes: {
    color: colors.orangePrimary,
    fontWeight: 'bold',
    fontSize: 16,
  },

  sectionHeaderTextActivities: {
    color: colors.bluePrimary,
    fontWeight: 'bold',
    fontSize: 16,
  },
  sectionContent: {
    padding: 11,
  },
  favoriteItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  itemImagePlaceholder: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#ccc',
    marginRight: 12,
  },
  itemInfo: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 14,
    marginBottom: 2,
    color : colors.bluePrimary
  },
  itemSubtitle: {
    fontSize: 12,
    color: '#555',
    color : colors.bluePrimary
  },
  showAllButton: {
    marginHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 15,
    elevation: 4,
  },
  showAllButtonText: {
    fontWeight: 'bold',
  },
});
