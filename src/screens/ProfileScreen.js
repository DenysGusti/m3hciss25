import React, {useState} from 'react';
import {Ionicons, AntDesign} from '@expo/vector-icons';
import {ScrollView, View, Text, Image, TouchableOpacity, StyleSheet, LayoutAnimation} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {
    useFonts,
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_500Medium
} from '@expo-google-fonts/poppins';
import {colors} from '../theme/colors';
import {shadow} from '../theme/shadow';
import {useAppContext} from '../context/AppContext';
import {breakfast, snack, lunch, dinner, activities} from './IdeasScreen';

// Dummy data for charts and lists
const chartData = {
    Distance: [2.5, 3.2, 1.8, 4.0, 5.5, 4.2, 3.0],
    Calories: [300, 450, 800, 650, 1000, 750, 900],
    Hydration: [1200, 1800, 1100, 2000, 1700, 2500, 1900]
};
const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

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

const CATEGORY_COLORS = {
    Distance: colors.bluePrimary,
    Calories: colors.orangePrimary,
    Hydration: colors.cyanPrimary,
};

export default function ProfileScreen({navigation}) {
    const [selectedCategory, setSelectedCategory] = useState('Calories');
    const {
        todayXP,
        favoriteRecipes,
        toggleFavoriteRecipe,
        favoriteActivities,
        toggleFavoriteActivity,
    } = useAppContext();
    const [fontsLoaded] = useFonts({Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold});
    if (!fontsLoaded) {
        return null;
    }

    const currentData = chartData[selectedCategory];
    const categoryColor = CATEGORY_COLORS[selectedCategory];
    const unit = categoryUnits[selectedCategory];
    const isHydration = selectedCategory === 'Hydration';
    const categoryBackgroundColor = CATEGORY_BACKGROUNDS[selectedCategory] || colors.background;

    const maxChartValue = Math.max(...currentData);
    const chartHeight = 100;

    const baseXP = 500;
    const xpForNextLevel = 1200;

    const allRecipes = [...breakfast, ...snack, ...lunch, ...dinner];
    const favoriteRecipeItems = allRecipes.filter(item => favoriteRecipes.has(item.id));

    const allActivities = [...activities.pilates, ...activities.yoga];
    const favoriteActivityItems = allActivities.filter(item => favoriteActivities.has(item.id));

    const previewSize = 3;

    const handleCategoryPress = (category) => {
        if (category !== selectedCategory) {
            LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
            setSelectedCategory(category);
        }
    };

    return (
        <SafeAreaProvider>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                {/* Header */}
                <View style={styles.headerRow}>
                    <View style={styles.headerSide}>
                        <TouchableOpacity onPress={() => { /* scan action */
                        }} style={styles.iconSpacing}>
                            <Ionicons name="qr-code-outline" size={24} color={colors.bluePrimary}/>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.headerTitle}>Profile</Text>
                    <View style={styles.headerSide}>
                        <TouchableOpacity onPress={() => { /* share action */
                        }}>
                            <Ionicons name="share-outline" size={24} color={colors.bluePrimary}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Ionicons name="settings-outline" size={24} color={colors.bluePrimary}
                                      style={styles.iconSpacing}/>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Profile Info */}
                <View style={styles.profileSection}>
                    <Image
                        style={styles.profileImage}
                        source={require('../../assets/HubsImages/student_avatar.jpg')}
                    />
                    <View style={styles.profileInfo}>
                        <Text style={styles.profileName}>Dubovis Olivia</Text>
                        <View style={styles.profileDetailRow}>
                            <Ionicons name="mail-outline" size={16} color={colors.bluePrimary}
                                      style={styles.profileDetailIcon}/>
                            <Text style={styles.profileDetailText}>dubovsliliha@gmail.com</Text>
                        </View>
                        <View style={styles.profileDetailRow}>
                            <Ionicons name="school-outline" size={16} color={colors.bluePrimary}
                                      style={styles.profileDetailIcon}/>
                            <Text style={styles.profileDetailText}>University of Vienna</Text>
                        </View>
                        <View style={styles.profileDetailRow}>
                            <Ionicons name="calendar-outline" size={16} color={colors.bluePrimary}
                                      style={styles.profileDetailIcon}/>
                            <Text style={styles.profileDetailText}>22 years</Text>
                        </View>
                    </View>
                </View>

                {/* XP Progress Bar */}
                <View style={styles.xpSection}>
                    <View style={styles.levelContainer}>
                        <Text style={styles.levelNumber}>2</Text>
                    </View>
                    <View style={styles.xpContainer}>
                        <Text style={styles.levelLabel}>Level</Text>
                        <View style={styles.xpBarContainer}>
                            <View style={styles.xpBarBackground}>
                                <View style={styles.xpBarInner}>
                                    <View
                                        style={[styles.xpBarFill, {width: `${(baseXP + todayXP) / xpForNextLevel * 100}%`}]}/>
                                    <Text style={styles.xpTextOnBar}>{baseXP + todayXP} / {xpForNextLevel} xp</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Category Tabs */}
                <View style={styles.statsTabs}>
                    {['Distance', 'Calories', 'Hydration'].map(category => (
                        <TouchableOpacity key={category} onPress={() => handleCategoryPress(category)}>
                            <Text
                                style={[styles.statsTabText, {
                                    color: selectedCategory === category ? CATEGORY_COLORS[category] : colors.blueTertiary
                                }]}
                            >
                                {category}
                            </Text>
                            {selectedCategory === category && (
                                <View style={[styles.tabUnderline, {backgroundColor: CATEGORY_COLORS[category]}]}/>
                            )}
                        </TouchableOpacity>
                    ))}
                </View>


                {/* Chart Section */}
                <View style={[styles.statsSection, {backgroundColor: categoryBackgroundColor}]}>
                    <View style={styles.chartGridContainer}>
                        {[3, 2, 1, 0].map((level, i) => (
                            <View key={level} style={[styles.chartGridLine, {top: `${(i / 4.9) * 100 + 30}%`}]}>
                                <View style={styles.chartLine}/>
                                <Text style={styles.chartLineLabel}>
                                    {isHydration ? (level * maxChartValue / 4).toFixed(1) : Math.round(level * maxChartValue / 3)} {unit}
                                </Text>
                            </View>
                        ))}
                        <View style={styles.chartContainer}>
                            <View style={[styles.barChart, {height: chartHeight}]}>
                                {currentData.map((value, index) => {
                                    const barHeight = (value / maxChartValue) * chartHeight;
                                    return (
                                        <View key={index} style={styles.barContainer}>
                                            <View style={[styles.bar, {
                                                height: barHeight,
                                                backgroundColor: categoryColor
                                            }]}/>
                                        </View>
                                    );
                                })}
                            </View>
                            <View style={styles.chartLabelsRow}>
                                {days.map((day, index) => (
                                    <Text key={index} style={styles.chartLabel}>{day}</Text>
                                ))}
                            </View>
                        </View>
                    </View>
                </View>

                {/* Favorite Recipes Section */}
                <View style={[styles.sectionCard, {marginTop: 16}]}>
                    <View style={[styles.sectionRecipesHeader]}/>
                    <View style={styles.headerContent}>
                        <Text style={styles.sectionHeaderTextRecipes}>Favorite recipes</Text>
                    </View>
                    <View style={styles.sectionRecipesHeaderUnderline}/>
                    <View style={styles.sectionContent}>
                        {favoriteRecipeItems.length === 0 ? (
                            <Text style={[styles.noFavoritesText, {color: colors.orangePrimary}]}>You have no favorite
                                recipes yet.</Text>
                        ) : (
                            favoriteRecipeItems.slice(0, previewSize).map(item => (
                                <View key={item.id} style={styles.favoriteItem}>
                                    <Image
                                        source={item.image}
                                        style={styles.recipeImage}
                                        resizeMode="cover"
                                    />
                                    <View style={styles.itemInfo}>
                                        <Text style={styles.itemTitle}>{item.title}</Text>
                                        <Text style={styles.itemSubtitle}>{item.subtitle}</Text>
                                    </View>
                                    <TouchableOpacity onPress={() => toggleFavoriteRecipe(item.id)}>
                                        <AntDesign name="heart" size={20} color={colors.orangePrimary}/>
                                    </TouchableOpacity>
                                </View>
                            ))
                        )}
                    </View>

                    {favoriteRecipeItems.length > previewSize && (
                        <TouchableOpacity
                            style={[styles.showAllButton, {backgroundColor: colors.orangeSecondary}]}
                            onPress={() => navigation.navigate('FavoriteRecipes')}
                        >
                            <Text style={[styles.showAllButtonText, {color: colors.orangePrimary}]}>
                                View All Favorite Recipes
                            </Text>
                        </TouchableOpacity>
                    )}
                </View>

                {/* Favorite Sport Activities Section */}
                <View style={[styles.sectionCard, {marginTop: 16, marginBottom: 8}]}>
                    <View style={[styles.sectionActivitiesHeader]}/>
                    <View style={styles.headerContent}>
                        <Text style={styles.sectionHeaderTextActivities}>Favorite sport activities</Text>
                    </View>
                    <View style={styles.sectionActivitiesHeaderUnderline}/>
                    <View style={styles.sectionContent}>
                        {favoriteActivityItems.length === 0 ? (
                            <Text style={[styles.noFavoritesText, {color: colors.bluePrimary}]}>You have no favorite
                                activities yet.</Text>
                        ) : (
                            favoriteActivityItems.slice(0, previewSize).map(item => (
                                <View key={item.id} style={styles.favoriteItem}>
                                    <Image
                                        source={item.image}
                                        style={styles.activitiesImage}
                                        resizeMode="cover"
                                    />
                                    <View style={styles.itemInfo}>
                                        <Text style={styles.itemTitle}>{item.title}</Text>
                                        <Text style={styles.itemSubtitle}>{item.subtitle}</Text>
                                    </View>
                                    <TouchableOpacity onPress={() => toggleFavoriteActivity(item.id)}>
                                        <AntDesign name="heart" size={20} color={colors.bluePrimary}/>
                                    </TouchableOpacity>
                                </View>
                            ))
                        )}
                    </View>

                    {favoriteActivityItems.length > previewSize && (
                        <TouchableOpacity
                            style={[styles.showAllButton, {backgroundColor: colors.blueSecondary}]}
                            onPress={() => navigation.navigate('FavoriteActivities')}
                        >
                            <Text style={[styles.showAllButtonText, {color: colors.bluePrimary}]}>
                                View All Favorite Recipes
                            </Text>
                        </TouchableOpacity>
                    )}
                </View>
            </ScrollView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        backgroundColor: colors.background,
        paddingHorizontal: 16,
        paddingVertical: 16,
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16,
        marginTop: 40,
    },
    headerTitle: {
        fontSize: 18,
        color: colors.bluePrimary,
        fontFamily: 'Poppins_700Bold',
        marginLeft: 17,
    },
    headerSide: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconSpacing: {
        marginLeft: 16,
    },
    profileSection: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 24,
        marginLeft: 24
    },
    profileImage: {
        width: 90,
        height: 90,
        borderRadius: 80,
        marginRight: 16
    },
    profileInfo: {
        flex: 1,
        marginLeft: 24
    },
    profileName: {
        fontSize: 18,
        fontFamily: 'Poppins_700Bold',
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
        fontFamily: 'Poppins_500Medium',
        color: colors.bluePrimary
    },
    xpSection: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.blueSecondary,
        borderRadius: 20,
        marginBottom: 20,
        ...shadow,
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
        color: colors.bluePrimary,
        textAlign: 'right',
        fontSize: 12,
    },
    chartLabel: {
        fontSize: 12,
        color: colors.bluePrimary,
        alignItems: 'center',
        fontWeight: '600'
    },
    levelNumber: {
        fontSize: 36,
        fontFamily: 'Poppins_500Medium',
        color: colors.bluePrimary,
        lineHeight: 40,
        marginLeft: 16,
    },
    levelLabel: {
        fontSize: 16,
        fontFamily: 'Poppins_600SemiBold',
        left: 10,
        color: colors.bluePrimary,
        marginBottom: 4,
    },
    xpBarContainer: {
        flex: 1,
        marginBottom: 14,
        ...shadow,
    },
    xpContainer: {
        width: '80%',
        alignSelf: 'center',
        marginTop: 10,
        ...shadow,
    },
    xpBarBackground: {
        backgroundColor: colors.background,
        height: 30,
        borderRadius: 20,
        overflow: 'hidden',
        position: 'relative',
        ...shadow,
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
        color: colors.bluePrimary,
        fontWeight: '600',
        fontFamily: 'Poppins_500Medium',
    },
    statsSection: {
        marginBottom: 20,
        borderRadius: 20,
        ...shadow,
    },
    statsTabs: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 12
    },
    statsTabText: {
        fontSize: 16,
        fontFamily: 'Poppins_600SemiBold',
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
        marginTop: 14
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
    sectionCard: {
        backgroundColor: colors.background,
        borderRadius: 16,
        overflow: 'hidden',
        marginBottom: 18,
        ...shadow,
    },
    sectionRecipesHeader: {
        backgroundColor: colors.orangePrimary,
        padding: 10,
        paddingBottom: 12,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    sectionActivitiesHeader: {
        backgroundColor: colors.bluePrimary,
        padding: 10,
        paddingBottom: 12,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    headerContent: {
        backgroundColor: colors.background,
        paddingHorizontal: 12,
        paddingTop: 8,
        paddingBottom: 12,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        marginTop: -11,
    },
    sectionHeaderTextRecipes: {
        color: colors.orangePrimary,
        fontSize: 16,
        fontFamily: 'Poppins_600SemiBold',
    },
    sectionHeaderTextActivities: {
        color: colors.bluePrimary,
        fontFamily: 'Poppins_600SemiBold',
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
    itemInfo: {
        flex: 1,
    },
    itemTitle: {
        fontSize: 14,
        marginBottom: 2,
        fontFamily: 'Poppins_600SemiBold',
        color: colors.bluePrimary
    },
    itemSubtitle: {
        fontSize: 12,
        fontFamily: 'Poppins_600SemiBold',
        color: colors.bluePrimary
    },
    recipeImage: {
        width: 48,
        height: 48,
        borderRadius: 12,
        marginRight: 12,
    },
    activitiesImage: {
        width: 48,
        height: 48,
        borderRadius: 12,
        marginRight: 12,
    },
    showAllButton: {
        marginHorizontal: 12,
        paddingVertical: 10,
        borderRadius: 16,
        alignItems: 'center',
        marginBottom: 20,
        ...shadow,
    },
    showAllButtonText: {
        fontFamily: 'Poppins_600SemiBold',
    },
    noFavoritesText: {
        fontFamily: 'Poppins_400Regular',
    },
});
