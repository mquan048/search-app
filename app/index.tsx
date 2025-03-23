import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screen/homeScreen';
import DetailScreen from './screen/detailScreen';

const Stack = createNativeStackNavigator();

export default function RootLayout() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
      {/* <Stack.Screen name="Detail" component={DetailScreen} /> */}
    </Stack.Navigator>
  );
}
