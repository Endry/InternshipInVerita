import 'react-native-gesture-handler';

import React from 'react';
import type {Node} from 'react';

import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  TouchableHighlight,
  Dimensions,
  Image,
  Button,
  FlatList,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

var todoTasks = [
  {key: 'Devin', desc: 'Devin description'},
  {key: 'Dan', desc: 'Dan description'},
  {key: 'Dominic', desc: 'Dominic description'},
  {key: 'Jackson', desc: 'Jackson description'},
  {key: 'James', desc: 'James description'},
  {key: 'Joel', desc: 'Joel description'},
  {key: 'John', desc: 'John description'},
  {key: 'Jillian', desc: 'Jillian description'},
  {key: 'Jimmy', desc: 'Jimmy description'},
  {key: 'Julie', desc: 'Julie description'},
];

var doneTasks = [
  {key: 'Devin', desc: 'Devin description'},
  {key: 'Dan', desc: 'Dan description'},
  {key: 'Dominic', desc: 'Dominic description'},
  {key: 'Jackson', desc: 'Jackson description'},
  {key: 'James', desc: 'James description'},
  {key: 'Joel', desc: 'Joel description'},
  {key: 'John', desc: 'John description'},
  {key: 'Jillian', desc: 'Jillian description'},
  {key: 'Jimmy', desc: 'Jimmy description'},
  {key: 'Julie', desc: 'Julie description'},
];

const Section = ({children, title}): Node => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={[styles.sectionTitle]}>{title}</Text>
      <Text style={[styles.sectionDescription]}>{children}</Text>
    </View>
  );
};

function TodoScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FlatList
          data={todoTasks}
          renderItem={({item}) => (
            <TouchableHighlight
              underlayColor="#fff"
              onPress={() =>
                navigation.navigate('Details', {
                  title: item.key,
                  desc: item.desc,
                  type: 'todo',
                })
              }>
              <Section title={item.key}>
                <Text style={styles.highlight}> {item.desc} </Text>
              </Section>
            </TouchableHighlight>
          )}
        />
        <View style={{height: 50}} />
      </View>
      <View style={styles.bottomNav}>
        <TouchableHighlight
          underlayColor="#4d9000"
          style={styles.tab}
          onPress={() => navigation.navigate('TODO')}>
          <Text style={styles.tabText}>TODO</Text>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor="#4d9000"
          style={styles.tab}
          onPress={() => navigation.navigate('DONE')}>
          <Text style={styles.tabText}>DONE</Text>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor="#fff"
          onPress={() => navigation.navigate('Create', {type: 'todo'})}
          style={styles.addContainer}>
          <Text style={styles.add}>+</Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
}

function DoneScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FlatList
          data={doneTasks}
          renderItem={({item}) => (
            <TouchableHighlight
              underlayColor="#fff"
              onPress={() =>
                navigation.navigate('Details', {
                  title: item.key,
                  desc: item.desc,
                  type: 'done',
                })
              }>
              <Section title={item.key}>
                <Text style={styles.highlight}> {item.desc} </Text>
              </Section>
            </TouchableHighlight>
          )}
        />
        <View style={{height: 50}} />
      </View>
      <View style={styles.bottomNav}>
        <TouchableHighlight
          underlayColor="#4d9000"
          style={styles.tab}
          onPress={() => navigation.navigate('TODO')}>
          <Text style={styles.tabText}>TODO</Text>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor="#4d9000"
          style={styles.tab}
          onPress={() => navigation.navigate('DONE')}>
          <Text style={styles.tabText}>DONE</Text>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor="#fff"
          onPress={() => navigation.navigate('Create', {type: 'done'})}
          style={styles.addContainer}>
          <Text style={styles.add}>+</Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
}

function CreateScreen({route, navigation}) {
  const {titleP, descP, type} = route.params;
  console.log(route.type);
  const [title, onChangeTitle] = React.useState(titleP);
  const [desc, onChangeDesc] = React.useState(descP);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TextInput
          style={styles.inputTitle}
          placeholder="Enter title"
          onChangeText={title => onChangeTitle(title)}
          defaultValue={title}
        />
        <TextInput
          placeholder="Enter description"
          style={styles.inputDesc}
          onChangeText={desc => onChangeDesc(desc)}
          defaultValue={desc}
        />
      </View>
      <View style={styles.bottomNav}>
        <TouchableHighlight
          underlayColor="#4d9000"
          style={styles.tab}
          onPress={() => addTask(type, title, desc)}>
          <Text style={styles.tabText}>Save</Text>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor="#4d9000"
          style={styles.tab}
          onPress={() => {
            navigation.goBack();
          }}>
          <Text style={styles.tabText}>Cancel</Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
}

function TaskDetailsScreen({route, navigation}) {
  const {title, desc, type} = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Title: {title}</Text>
        <Text style={styles.desc}>Description: {desc}</Text>
        <Text>{type}</Text>
      </View>
      <View style={styles.bottomNav}>
        <TouchableHighlight
          underlayColor="#4d9000"
          style={styles.tab}
          onPress={() =>
            navigation.navigate('Create', {
              title: title,
              desc: desc,
              type: type,
            })
          }>
          <Text style={styles.tabText}>EDIT</Text>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor="#4d9000"
          style={styles.tab}
          onPress={() => {
            changeType(type, title, desc);
            navigation.navigate(type === 'done' ? 'TODO' : 'DONE');
          }}>
          <Text style={styles.tabText}>
            {type === 'todo' ? 'DONE' : 'TODO'}
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor="#fff"
          onPress={() => removeTask(title, type)}
          style={styles.addContainer}>
          <Image style={styles.del} source={require('./images/delete.png')} />
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
}

function changeType(type, title, desc) {
  removeTask(title, type);
  if (type === 'todo') {
    doneTasks.push({key: title, desc: desc});
  } else {
    todoTasks.push({key: title, desc: desc});
  }
}

function removeTask(title, type) {
  if (type === 'todo') {
    todoTasks.splice(
      todoTasks.indexOf(todoTasks.find(t => t.key === title)),
      1,
    );
  } else {
    doneTasks.splice(
      doneTasks.indexOf(doneTasks.find(t => t.key === title)),
      1,
    );
  }
}

function addTask(type, title, desc) {
  if (type === 'todo') {
    todoTasks.push({key: title, desc: desc});
  } else {
    doneTasks.push({key: title, desc: desc});
  }
}

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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8bc34a',
  },
  navigation: {
    justifyContent: 'space-between',
  },
  addContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    backgroundColor: 'green',
    borderRadius: 30,
    bottom: 55,
    right: 10,
  },
  add: {
    fontSize: 50,
    bottom: 5,
  },
  del: {
    height: 25,
    width: 25,
  },
  item: {
    flex: 1,
  },
  sectionContainer: {
    marginTop: 20,
    paddingHorizontal: 24,
    borderWidth: 2,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  bottomNav: {
    height: 50,
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'row',
    width: Dimensions.get('window').width,
    position: 'absolute',
    bottom: 0,
  },
  tab: {
    width: Dimensions.get('window').width * 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'grey',
  },
  tabText: {
    color: 'white',
  },
  inputTitle: {
    marginHorizontal: 10,
    marginVertical: 10,
    borderWidth: 1,
  },
  title: {
    fontSize: 30,
  },
  desc: {
    fontSize: 20,
  },
  inputDesc: {
    marginHorizontal: 10,
    marginVertical: 10,
    borderWidth: 1,
    height: Dimensions.get('window').height * 0.3,
  },
});
