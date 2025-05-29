import React from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useAppContext } from '../context/AppContext';
import { activities } from './IdeasScreen';
import { colors } from '../theme/colors';
import { shadow } from '../theme/shadow';

export default function FavoriteActivitiesScreen() {
  const { favoriteActivities, toggleFavoriteActivity } = useAppContext();
  const allActivities = [...activities.pilates, ...activities.yoga];
  const favoriteItems = allActivities.filter(item => favoriteActivities.has(item.id));

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {favoriteItems.length === 0 ? (
        <Text style={styles.noFavoritesText}>
          You have no favorite activities yet.
        </Text>
      ) : (
        favoriteItems.map(item => (
          <View key={item.id} style={styles.favoriteItem}>
            <Image source={item.image} style={styles.activityImage} resizeMode="cover" />
            <View style={styles.itemInfo}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemSubtitle}>{item.subtitle}</Text>
            </View>
            <TouchableOpacity onPress={() => toggleFavoriteActivity(item.id)}>
              <AntDesign name="heart" size={20} color={colors.bluePrimary} />
            </TouchableOpacity>
          </View>
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    padding: 16,
  },
  favoriteItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    padding: 8,
    borderRadius: 12,
    backgroundColor: colors.background,
    ...shadow,
  },
  activityImage: {
    width: 60,
    height: 60,
    borderRadius: 12,
    marginRight: 16,
  },
  itemInfo: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
    fontFamily: 'Poppins_400Regular',
    color: colors.bluePrimary,
  },
  itemSubtitle: {
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
    color: colors.bluePrimary,
  },
  noFavoritesText: {
    textAlign: 'center',
    marginTop: 32,
    fontFamily: 'Poppins_400Regular',
    color: colors.bluePrimary,
  },
});
