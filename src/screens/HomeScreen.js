import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../theme/colors';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Day 1</Text>
        <TouchableOpacity>
          <MaterialCommunityIcons name="calendar-month-outline" size={24} color="#01416D" />
        </TouchableOpacity>
      </View>

      {/* DATE */}
      <View style={styles.dateRow}>
        <TouchableOpacity>
          <MaterialCommunityIcons name="chevron-left" size={40} color="#01416D" />
        </TouchableOpacity>
        <View style={styles.dateBox}>
          <Text style={styles.dateText}>Mon, 14 Apr</Text>
        </View>
        <TouchableOpacity>
          <MaterialCommunityIcons name="chevron-right" size={40} color="#01416D" />
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

      <View style={styles.todayXpSection}>
        {/* Rocket Icon */}
        <View style={styles.iconContainer}>
          <Ionicons name="rocket-outline" size={28} color={colors.bluePrimary} />
        </View>

        {/* XP Bar and Text */}
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
    elevation: 3,
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
});
