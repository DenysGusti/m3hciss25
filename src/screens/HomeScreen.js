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
              tintColor="#01416D"
              backgroundColor="#eee"
              rotation={0}
              lineCap="round"
              style={styles.absolute}
            />
            <AnimatedCircularProgress
              size={140}
              width={13}
              fill={80}
              tintColor="#FF8C42"
              backgroundColor="#eee"
              rotation={0}
              lineCap="round"
              style={styles.absolute}
            />
            <AnimatedCircularProgress
              size={100}
              width={12}
              fill={95}
              tintColor="#00B4D8"
              backgroundColor="#eee"
              rotation={0}
              lineCap="round"
              style={styles.absolute}
            />
          </View>

          {/* METRICS */}
          <View style={styles.metricsRow}>
            <View style={styles.metric}>
              <MaterialIcons name="route" size={24} color="#01416D" />
              <Text style={styles.metricLabel}>Distance</Text>
              <Text style={styles.metricValue}>4.3 / 7 km</Text>
            </View>
            <View style={styles.metric}>
              <Ionicons name="flame-outline" size={24} color="#FF8C42" />
              <Text style={styles.metricLabel}>Calories</Text>
              <Text style={styles.metricValue}>1800 / 2000 kcal</Text>
            </View>
            <View style={styles.metric}>
              <Ionicons name="water-outline" size={24} color="#00B4D8" />
              <Text style={styles.metricLabel}>Hydration</Text>
              <Text style={styles.metricValue}>1.9 / 2 l</Text>
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
    color: '#01416D'
  },
  dateRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 84,
    marginBottom: 12,
  },
  dateBox: {
    backgroundColor: '#01416D',
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
    color: '#01416D',
    marginTop: 1,
  },
});
