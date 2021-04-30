import 'react-native-gesture-handler';

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TodoScreen from './src/screens/TodoScreen';
import DoneScreen from './src/screens/DoneScreen';
import CreateScreen from './src/screens/CreateScreen';
import TaskDetailsScreen from './src/screens/TaskDetailsScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TODO">
        <Stack.Screen
          name="TODO"
          component={TodoScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DONE"
          component={DoneScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Details"
          component={TaskDetailsScreen}
          options={{
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: 'green',
            },
          }}
        />
        <Stack.Screen
          name="Create"
          component={CreateScreen}
          options={{
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: 'green',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
