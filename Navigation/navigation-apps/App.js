

import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Info from './src/pages/info';
import Contact from './src/pages/contact';


export default function App() {

  const Drawer = createDrawerNavigator()

  return (
<NavigationContainer>
 <Drawer.Navigator>
 <Drawer.Screen name='info' component={Info}/>
 <Drawer.Screen name='contact' component={Contact} />
 </Drawer.Navigator>
 <Text>sadsa</Text>
</NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
