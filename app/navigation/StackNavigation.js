import { createStackNavigator } from '@react-navigation/stack';
import MyTabs from "./BottomNavigatiion";
import Home from '../screens/Home';


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BottomNavigation" component={MyTabs} />
      <Stack.Screen name="Main" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}

export default MyStack;