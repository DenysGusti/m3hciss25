import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from '../screens/ProfileScreen';
import FavoriteRecipesScreen from '../screens/FavoriteRecipesScreen';
import FavoriteActivitiesScreen from '../screens/FavoriteActivitiesScreen';
import { colors } from '../theme/colors';

const Stack = createStackNavigator();

export default function RecipesNavigation() {
  return (
    <Stack.Navigator initialRouteName="Profile" screenOptions={{
        cardStyle: { backgroundColor: colors.background },
        headerTintColor: colors.bluePrimary,       
        headerTitleStyle: { color: colors.bluePrimary },
      }}>
      <Stack.Screen 
        name="Profile" 
        component={ProfileScreen}
        options={{ headerShown: false /* or your custom header */ }}
      />
      <Stack.Screen 
        name="FavoriteRecipes" 
        component={FavoriteRecipesScreen}
        options={{ title: 'My favorites recipes',
          headerTitleStyle: {
            color: colors.bluePrimary,
            backgroundColor: colors.background, 
      } }}
      />
      <Stack.Screen 
        name="FavoriteActivities" 
        component={FavoriteActivitiesScreen}
        options={{ title: 'My favorite activities',
          headerTitleStyle: {
            color: colors.bluePrimary,
            backgroundColor: colors.background, 
      }}}
      />
    </Stack.Navigator>
  );
}
