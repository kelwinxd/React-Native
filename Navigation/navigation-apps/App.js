
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Info from './src/pages/info';
import Contact from './src/pages/contact';


export default function App() {

  const Stack = createStackNavigator()

  return (
<NavigationContainer>
 <Stack.Navigator>
 <Stack.Screen name='info' component={Info}/>
 <Stack.Screen name='contact' component={Contact} />
 </Stack.Navigator>
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
