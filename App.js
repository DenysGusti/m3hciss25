import 'react-native-gesture-handler';
import {enableScreens} from 'react-native-screens';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigation from './src/navigation/TabNavigation';
import {AppProvider} from './src/context/AppContext';

enableScreens();

export default function App() {
    return (
        <GestureHandlerRootView style={{flex: 1}}>
            <AppProvider>
                <NavigationContainer>
                    <TabNavigation/>
                </NavigationContainer>
            </AppProvider>
        </GestureHandlerRootView>
    );
}
