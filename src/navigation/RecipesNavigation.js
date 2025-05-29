import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from '../screens/ProfileScreen';
import FavoriteRecipesScreen from '../screens/FavoriteRecipesScreen';
import FavoriteActivitiesScreen from '../screens/FavoriteActivitiesScreen';

const Stack = createStackNavigator();

export default function RecipesNavigation() {
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen 
        name="Profile" 
        component={ProfileScreen}
        options={{ headerShown: false /* or your custom header */ }}
      />
      <Stack.Screen 
        name="FavoriteRecipes" 
        component={FavoriteRecipesScreen}
        options={{ title: 'My Favorites' }}
      />
      <Stack.Screen 
        name="FavoriteActivities" 
        component={FavoriteActivitiesScreen}
        options={{ title: 'My Favorites' }}
      />
    </Stack.Navigator>
  );
}