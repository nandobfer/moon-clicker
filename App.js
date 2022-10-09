import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Home } from './src/screens/Home';
import { COLORS } from './src/colors';
import { StatsProvider } from './src/contexts/StatsContext'

export default function App() {

    const Stack = createNativeStackNavigator();
    const navigator_options = {
        headerStyle: {
            backgroundColor: COLORS.primary,
          },
          headerTintColor: COLORS.background,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
          animation: 'slide_from_right',
    };
    const home_header_options = {
        title: 'Moon Clicker',
        // headerShown: false,
    };

    return (
        <NavigationContainer>
            <StatsProvider>
                <StatusBar style="auto" />
                <Stack.Navigator initialRouteName='Home' screenOptions={navigator_options}>
                    <Stack.Screen 
                        name="Home" 
                        component={Home}
                        options={home_header_options}  
                        />
                </Stack.Navigator>
            </StatsProvider>
        </NavigationContainer>
    );
}


