import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from './src/screens/Dashboard';
import Details from './src/screens/Details';

function HomeScreen() {
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Details" component={Details} options={{headerShown:false}} />
        <Stack.Screen name="Home" component={HomeScreen}  />
        <Stack.Screen name='Dashboard' component={Dashboard}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

// import React from 'react';
// import { View, SafeAreaView, StyleSheet, Dimensions, StatusBar, ImageBackground } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Dashboard from './src/screens/Dashboard';


// const Stack = createNativeStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>

//       <Stack.Navigator >
//         <Stack.Screen name='Dashboard' component={Dashboard} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   )
// }

// const styles = StyleSheet.create({});

// export default App;
