import React from 'react';
import {ScrollView, View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import {colors} from '../theme/colors';
import {shadow} from '../theme/shadow';

export default function FavoriteScreen({title, items, toggleFavorite, iconColor}) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            {items.length === 0 ? (
                <Text style={[styles.noFavoritesText, {color: iconColor}]}>
                    You have no favorite {title.toLowerCase()} yet.
                </Text>
            ) : (
                items.map(item => (
                    <View key={item.id} style={styles.favoriteItem}>
                        <Image source={item.image} style={styles.itemImage} resizeMode="cover"/>
                        <View style={styles.itemInfo}>
                            <Text style={styles.itemTitle}>{item.title}</Text>
                            <Text style={styles.itemSubtitle}>{item.subtitle}</Text>
                        </View>
                        <TouchableOpacity onPress={() => toggleFavorite(item.id)}>
                            <AntDesign name="heart" size={20} color={iconColor}/>
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
    sectionTitle: {
        fontSize: 18,
        fontFamily: 'Poppins_700Bold',
        color: colors.bluePrimary,
        marginBottom: 12,
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
    itemImage: {
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
        fontFamily: 'Poppins_600SemiBold',
        color: colors.bluePrimary,
    },
    itemSubtitle: {
        fontSize: 14,
        fontFamily: 'Poppins_500Medium',
        color: colors.bluePrimary,
    },
    noFavoritesText: {
        textAlign: 'center',
        marginTop: 32,
        fontFamily: 'Poppins_600SemiBold',
    },
});
