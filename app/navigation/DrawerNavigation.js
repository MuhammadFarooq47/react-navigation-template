import { createDrawerNavigator } from '@react-navigation/drawer';
import MyStack from './StackNavigation';
import Notifications from '../screens/Notification';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={MyStack} />
      <Drawer.Screen name="Notificaions" component={Notifications} />
    </Drawer.Navigator>
  );
}

export default MyDrawer;