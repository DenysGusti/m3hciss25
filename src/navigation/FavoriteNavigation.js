import {createStackNavigator} from '@react-navigation/stack';
import ProfileScreen from '../screens/ProfileScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import {useAppContext} from '../context/AppContext';
import {breakfast, snack, lunch, dinner, activities} from '../screens/IdeasScreen';
import {colors} from '../theme/colors';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons'; // or any icon lib you use
import {useNavigation} from '@react-navigation/native';

const Stack = createStackNavigator();

function CustomBackButton() {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.goBack()} style={{marginLeft: 16}}>
            <Ionicons name="arrow-back" size={24} color={colors.bluePrimary}/>
        </TouchableOpacity>
    );
}

export default function FavoriteNavigation() {
    const {favoriteRecipes, toggleFavoriteRecipe, favoriteActivities, toggleFavoriteActivity} = useAppContext();

    const recipeItems = [...breakfast, ...snack, ...lunch, ...dinner].filter(item =>
        favoriteRecipes.has(item.id)
    );

    const activityItems = [...activities.pilates, ...activities.yoga].filter(item =>
        favoriteActivities.has(item.id)
    );

    return (
        <Stack.Navigator
            initialRouteName="Profile"
            screenOptions={{
                cardStyle: {backgroundColor: colors.background},
                headerTintColor: colors.bluePrimary,
                headerTitleStyle: styles.headerTitle,
                headerBackTitleVisible: false,
                headerTitleAlign: 'center',
                headerRight: () => <View style={{ width: 40 }} />,
            }}
            id="1"
        >
            <Stack.Screen
                name="Profile"
                component={ProfileScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="FavoriteRecipes"
                options={{
                    title: 'My favorite recipes',
                    headerTitleStyle: styles.headerTitle,
                    headerLeft: () => <CustomBackButton/>,
                }}
            >
                {() => (
                    <FavoriteScreen
                        title="Recipes"
                        items={recipeItems}
                        toggleFavorite={toggleFavoriteRecipe}
                        iconColor={colors.orangePrimary}
                    />
                )}
            </Stack.Screen>
            <Stack.Screen
                name="FavoriteActivities"
                options={{
                    title: 'My favorite activities',
                    headerTitleStyle: styles.headerTitle,
                    headerLeft: () => <CustomBackButton/>,
                }}
            >
                {() => (
                    <FavoriteScreen
                        title="Activities"
                        items={activityItems}
                        toggleFavorite={toggleFavoriteActivity}
                        iconColor={colors.bluePrimary}
                    />
                )}
            </Stack.Screen>
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    headerTitle: {
        fontSize: 18,
        fontFamily: 'Poppins_700Bold',
        color: colors.bluePrimary,
        marginTop: 4,
    },
});
