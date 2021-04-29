import 'react-native-gesture-handler';

import React from 'react';
import type {Node} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Dimensions,
  Image,
  FlatList,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

var todoTasks = [
  {title: 'Devin', desc: 'Devin description', id: 1},
  {title: 'Dan', desc: 'Dan description', id: 2},
  {title: 'Dominic', desc: 'Dominic description', id: 3},
  {title: 'Jackson', desc: 'Jackson description', id: 4},
  {title: 'James', desc: 'James description', id: 5},
  {title: 'Joel', desc: 'Joel description', id: 6},
  {title: 'John', desc: 'John description', id: 7},
  {title: 'Jillian', desc: 'Jillian description', id: 8},
  {title: 'Jimmy', desc: 'Jimmy description', id: 9},
  {title: 'Julie', desc: 'Julie description', id: 10},
];

var doneTasks = [
  {title: 'Devin', desc: 'Devin description', id: 1},
  {title: 'Dan', desc: 'Dan description', id: 2},
  {title: 'Dominic', desc: 'Dominic description', id: 3},
  {title: 'Jackson', desc: 'Jackson description', id: 4},
  {title: 'James', desc: 'James description', id: 5},
  {title: 'Joel', desc: 'Joel description', id: 6},
  {title: 'John', desc: 'John description', id: 7},
  {title: 'Jillian', desc: 'Jillian description', id: 8},
  {title: 'Jimmy', desc: 'Jimmy description', id: 9},
  {title: 'Julie', desc: 'Julie description', id: 10},
];
var idTodo = 10;
var idDone = 10;

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
                  title: item.title,
                  desc: item.desc,
                  type: 'todo',
                  id: item.id,
                })
              }>
              <Section title={item.title}>
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
          onPress={() => navigation.push('TODO')}>
          <Text style={styles.tabText}>TODO</Text>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor="#4d9000"
          style={styles.tab}
          onPress={() => navigation.push('DONE')}>
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
                  title: item.title,
                  desc: item.desc,
                  type: 'done',
                  id: item.id,
                })
              }>
              <Section title={item.title}>
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
          onPress={() => navigation.push('TODO')}>
          <Text style={styles.tabText}>TODO</Text>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor="#4d9000"
          style={styles.tab}
          onPress={() => navigation.push('DONE')}>
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
  const {titleP, descP, type, id} = route.params;
  const [title, setTitle] = React.useState(titleP);
  const [desc, setDesc] = React.useState(descP);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TextInput
          style={styles.inputTitle}
          placeholder="Enter title"
          onChangeText={title => setTitle(title)}
          defaultValue={title}
        />
        <TextInput
          placeholder="Enter description"
          style={styles.inputDesc}
          onChangeText={desc => setDesc(desc)}
          defaultValue={desc}
        />
      </View>
      <View style={styles.bottomNav}>
        <TouchableHighlight
          underlayColor="#4d9000"
          style={styles.tab}
          onPress={() => {
            if (
              (titleP !== null && titleP !== title) ||
              (descP !== null && descP !== desc)
            ) {
              editTask(id, type, title, desc);
            } else {
              addTask(type, title, desc);
            }
          }}>
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
  const {title, desc, type, id} = route.params;
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
              titleP: title,
              descP: desc,
              type: type,
              id: id,
            })
          }>
          <Text style={styles.tabText}>EDIT</Text>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor="#4d9000"
          style={styles.tab}
          onPress={() => {
            changeType(type, title, desc, id);
            navigation.navigate(type === 'done' ? 'TODO' : 'DONE');
          }}>
          <Text style={styles.tabText}>
            {type === 'todo' ? 'DONE' : 'TODO'}
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor="#fff"
          onPress={() => removeTask(id, type)}
          style={styles.addContainer}>
          <Image style={styles.del} source={require('./images/delete.png')} />
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
}

function changeType(type, title, desc, id) {
  removeTask(id, type);
  console.log(type);
  if (type === 'done') {
    todoTasks.push({title: title, desc: desc, id: ++idTodo});
  } else {
    doneTasks.push({title: title, desc: desc, idDone: ++idDone});
  }
}

function editTask(id, type, title, desc) {
  let item = {title: title, desc: desc, type: type, id: id};
  let foundIndex;
  if (type === 'todo') {
    foundIndex = todoTasks.indexOf(todoTasks.find(t => t.id === id));
    todoTasks[foundIndex] = item;
  } else {
    foundIndex = doneTasks.find(t => t.id === id);
    doneTasks[foundIndex] = item;
  }
}

function removeTask(id, type) {
  console.log(doneTasks.indexOf(doneTasks.find(t => t.id === id)));
  if (type === 'todo') {
    todoTasks.splice(todoTasks.indexOf(todoTasks.find(t => t.id === id)), 1);
  } else {
    doneTasks.splice(doneTasks.indexOf(doneTasks.find(t => t.id === id)), 1);
  }
}

function addTask(type, title, desc) {
  if (type === 'todo') {
    todoTasks.push({title: title, desc: desc, id: ++idTodo});
  } else {
    doneTasks.push({title: title, desc: desc, id: ++idDone});
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
