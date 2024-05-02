import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import About from '../screens/About';
import Contact from '../screens/Contact';


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="About" component={About} />
      <Tab.Screen name="Contact" component={Contact} />
    </Tab.Navigator>
  );
}

export default MyTabs;