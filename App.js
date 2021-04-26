import * as React from 'react';

import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableHighlight,
  Dimensions,
  Button,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

function TodoScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            height: 200,
          }}>
          <Text>TODO!</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
//taboption
function DoneScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>DONE!</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      style={styles.navigation}
      tabBarOptions={{
        activeTintColor: '#50d3a7',
        inactiveTintColor: 'gray',
        labelStyle: {
          fontSize: 15,
          bottom: 15,
        },
      }}>
      <Tab.Screen name="TODO" component={TodoScreen} />
      <Tab.Screen name="DONE" component={DoneScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navigation: {
    justifyContent: 'space-between',
  },
  add: {
    //position: 'absolute',
    width: 60,
    fontSize: 50,
    backgroundColor: 'green',
    borderColor: 'green',
    borderWidth: 3,
    borderRadius: 30,
  },
});
