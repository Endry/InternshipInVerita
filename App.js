import 'react-native-gesture-handler';

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TodoScreen from './src/screens/Todo/TodoScreen';
import DoneScreen from './src/screens/Done/DoneScreen';
import CreateScreen from './src/screens/Create/CreateScreen';
import TaskDetailsScreen from './src/screens/Details/TaskDetailsScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Provider} from 'react-redux';
import {store, persistor} from './src/screens/store';
import {PersistGate} from 'redux-persist/integration/react';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tasks() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'TODO') {
            iconName = 'clipboard-list';
          } else if (route.name === 'DONE') {
            iconName = 'clipboard-check';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'white',
        inactiveTintColor: 'gray',
        activeBackgroundColor: 'green',
        inactiveBackgroundColor: '#8bc34a',
        tabStyle: {borderWidth: 2},
        labelStyle: {fontSize: 14},
        labelPosition: 'below-icon',
      }}>
      <Tab.Screen name="TODO" component={TodoScreen} />
      <Tab.Screen name="DONE" component={DoneScreen} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Tasks">
            <Stack.Screen
              name="Tasks"
              component={Tasks}
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
      </PersistGate>
    </Provider>
  );
}

export default App;
