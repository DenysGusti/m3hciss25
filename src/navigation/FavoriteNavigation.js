import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from '../screens/ProfileScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import { useAppContext } from '../context/AppContext';
import { breakfast, snack, lunch, dinner, activities } from '../screens/IdeasScreen';
import { colors } from '../theme/colors';

const Stack = createStackNavigator();

export default function FavoriteNavigation() {
    const { favoriteRecipes, toggleFavoriteRecipe, favoriteActivities, toggleFavoriteActivity } = useAppContext();

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
                cardStyle: { backgroundColor: colors.background },
                headerTintColor: colors.bluePrimary,
                headerTitleStyle: { color: colors.bluePrimary },
            }}
         id="1">
            <Stack.Screen
                name="Profile"
                component={ProfileScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="FavoriteRecipes"
                options={{ title: 'My favorite recipes' }}
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
                options={{ title: 'My favorite activities' }}
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
