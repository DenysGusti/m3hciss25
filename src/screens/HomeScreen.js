import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { colors } from '../theme/colors';
import { ScrollView } from 'react-native-gesture-handler';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Day 1</Text>
        <TouchableOpacity>
          <MaterialCommunityIcons name="calendar-month-outline" size={24} color={colors.bluePrimary} />
        </TouchableOpacity>
      </View>

      {/* DATE */}
      <View style={styles.dateRow}>
        <TouchableOpacity>
          <MaterialCommunityIcons name="chevron-left" size={40} color={colors.bluePrimary} />
        </TouchableOpacity>
        <View style={styles.dateBox}>
          <Text style={styles.dateText}>Mon, 14 Apr</Text>
        </View>
        <TouchableOpacity>
          <MaterialCommunityIcons name="chevron-right" size={40} color={colors.bluePrimary} />
        </TouchableOpacity>
      </View>

      <View style={styles.wrapper}>
        {/* RINGS */}
        <View style={styles.centerBlock}>
          <View style={styles.ringWrapper}>
            <AnimatedCircularProgress
              size={180}
              width={14}
              fill={60}
              tintColor={colors.bluePrimary}
              backgroundColor="#eee"
              rotation={0}
              lineCap="round"
              style={styles.absolute}
            />
            <AnimatedCircularProgress
              size={140}
              width={13}
              fill={80}
              tintColor={colors.orangePrimary}
              backgroundColor="#eee"
              rotation={0}
              lineCap="round"
              style={styles.absolute}
            />
            <AnimatedCircularProgress
              size={100}
              width={12}
              fill={95}
              tintColor={colors.cyanPrimary}
              backgroundColor="#eee"
              rotation={0}
              lineCap="round"
              style={styles.absolute}
            />
          </View>

          {/* METRICS */}
          <View style={styles.metricsRow}>
            <View style={styles.metric}>
              <MaterialIcons name="route" size={24} color={colors.bluePrimary} />
              <Text style={styles.metricLabel}>Distance</Text>
              <Text style={styles.metricValue}>4.3 / 7 km</Text>
            </View>
            <View style={styles.metric}>
              <Ionicons name="flame-outline" size={24} color={colors.orangePrimary} />
              <Text style={styles.metricLabel}>Calories</Text>
              <Text style={styles.metricValue}>1800 / 2000 kcal</Text>
            </View>
            <View style={styles.metric}>
              <Ionicons name="water-outline" size={24} color={colors.cyanPrimary} />
              <Text style={styles.metricLabel}>Hydration</Text>
              <Text style={styles.metricValue}>1.9 / 2 l</Text>
            </View>
          </View>
        </View>
      </View>

      {/* XP Section */}
      <View style={styles.todayXpSection}>
        <View style={styles.iconContainer}>
          <Ionicons name="rocket-outline" size={28} color={colors.bluePrimary} />
        </View>

        <View style={styles.todayXpContent}>
          <Text style={styles.todayXpLabel}>Today's XP</Text>
          <View style={styles.todayXpBarBackground}>
            <View style={styles.todayXpBarInner}>
              <View style={[styles.todayXpBarFill, { width: `${(15 / 60) * 100}%` }]} />
              <Text style={styles.todayXpTextOnBar}>15 / 60 xp</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Tasks for Today */}
      <View style={[styles.sectionCard]}>
        <View style={[styles.sectionHeader, { backgroundColor: colors.bluePrimary }]}>
        </View>
        <View style={styles.headerContent}>
          <Text style={styles.sectionHeaderText}>Tasks for today</Text>
        </View>
        <View style={styles.sectionHeaderUnderline} />
        <View style={styles.sectionContent}>
          {['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum'].map((task, i) => (
            <View key={i} style={styles.sectionRow}>
              <Ionicons
                name={i === 1 ? 'checkmark-circle' : 'ellipse-outline'}
                size={30}
                color={i === 1 ? colors.cyanPrimary : colors.blueTertiary}
              />
              <Text style={styles.taskText}>{task}</Text>
              <Text style={styles.taskXp}>+ 15 xp</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Calories Counter */}
      <View style={[styles.sectionCard, { marginTop: 20, marginBottom: 20 }]}>
        <View style={[styles.sectionHeader, { backgroundColor: colors.orangePrimary }]}>
        </View>
        <View style={styles.headerContent}>
          <Text style={styles.sectionHeaderText}>Calories counter</Text>
        </View>
        <View style={styles.sectionHeaderUnderline} />
        <View style={styles.sectionContent}>
          {[
            { label: 'Breakfast', icon: 'magnify' },
            { label: 'Snack', icon: 'bread-slice-outline' },
            { label: 'Lunch', icon: 'silverware-fork-knife' },
            { label: 'Dinner', icon: 'food' }
          ].map((item, i) => (
            <View key={i} style={styles.sectionRow}>
              <View style={styles.iconWrapper}>
                <MaterialCommunityIcons name={item.icon} size={32} color={colors.orangePrimary} />
              </View>
              <Text style={styles.mealText}>{item.label}</Text>
              <Text style={styles.kcalText}>320 kcal</Text>
              <Ionicons name="chevron-up" size={24} color={colors.orangePrimary} />
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
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
    paddingBottom: 16
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.bluePrimary
  },
  dateRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 84,
    marginBottom: 12,
  },
  dateBox: {
    backgroundColor: colors.bluePrimary,
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 14,
  },
  dateText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#eee',
  },
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 12,
  },
  centerBlock: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  ringWrapper: {
    width: 180,
    height: 180,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  absolute: {
    position: 'absolute',
    borderRadius: 6,
  },
  metricsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 32,
    marginTop: 8,
  },
  metric: {
    alignItems: 'center',
    width: 110,
  },
  metricLabel: {
    fontSize: 12,
    color: '#777',
    marginTop: 2,
  },
  metricValue: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.bluePrimary,
    marginTop: 1,
  },
  todayXpSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.blueSecondary,
    borderRadius: 20,
    marginHorizontal: 16,
    marginTop: 10,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 20,
  },
  iconContainer: {
    marginRight: 12,
    marginLeft: 4,
  },
  todayXpContent: {
    flex: 1,
  },
  todayXpLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.bluePrimary,
    marginBottom: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 6,
  },
  todayXpBarBackground: {
    backgroundColor: '#fff',
    height: 28,
    borderRadius: 20,
    overflow: 'hidden',
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  todayXpBarInner: {
    flex: 1,
    paddingHorizontal: 3,
    paddingVertical: 3,
    justifyContent: 'center'
  },
  todayXpBarFill: {
    backgroundColor: colors.orangePrimary,
    height: '100%',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 8,
  },
  todayXpTextOnBar: {
    position: 'absolute',
    right: 30,
    fontSize: 12,
    color: colors.bluePrimary,
    fontWeight: '600',
  },
  sectionCard: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionHeader: {
    padding: 10,
    paddingBottom: 12,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  headerContent: {
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingTop: 12,
    paddingBottom: 2,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    marginTop: -11,
  },
  sectionHeaderText: {
    color: colors.bluePrimary,
    fontWeight: 'bold',
    fontSize: 18,
  },
  sectionContent: {
    padding: 11,
  },
  sectionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    borderTopWidth: 0.8,
    borderTopColor: colors.blueTertiary,
  },
  taskText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: colors.bluePrimary,
  },
  taskXp: {
    color: colors.orangePrimary,
    fontSize: 16,
  },
  iconWrapper: {
    width: 48,
    height: 48,
    backgroundColor: colors.orangeSecondary,
    borderRadius: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  mealText: {
    flex: 1,
    fontSize: 16,
    color: colors.bluePrimary,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  kcalText: {
    fontSize: 16,
    color: colors.orangePrimary,
    marginRight: 8,
  },
});
