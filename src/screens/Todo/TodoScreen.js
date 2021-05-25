import 'react-native-gesture-handler';

import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableHighlight,
  FlatList,
  ImageBackground,
} from 'react-native';
import {Section} from './../TasksStorage';
import {useSelector} from 'react-redux';
import styles from './../../assets/style/style';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {createSelector} from 'reselect';

const selectTasksTodo = createSelector(
  state => state,
  state => state,
);

const TasksTodo = createSelector(
  state => state,
  state =>
    state.tasks.array.forEach(element => {
      element.type === 'todo';
    }),
);

const toArray = object => {
  const array = [];
  return [...array, object];
};

const transformData = todo => {
  let array = [];
  let task = todo["tasks"];
  console.log("task");
  console.log(task["0"]);
  for (let prop in task) {
    array.push(task[prop]);
  }
  console.log("array");
  console.log(array);
  return array;
};

function TodoScreen({navigation}) {
  const todo = useSelector(selectTasksTodo);
  let tasks = transformData(todo);
  console.log("todo");
  console.log(tasks);
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('./../../assets/images/fon.png')}
        style={styles.backgroundImage}>
        <View>
          <FlatList
            data={tasks}
            renderItem={({item}) => (
              <TouchableHighlight
                underlayColor="#fff"
                onPress={() =>
                  navigation.navigate('Details', {
                    title: item.title,
                    desc: item.desc,
                    type: item.type,
                    id: item.id,
                  })
                }>
                <Section title={item.title}>
                  <Text style={styles.highlight}> {item.desc} </Text>
                </Section>
              </TouchableHighlight>
            )}
          />
        </View>
        <View style={styles.bottomNav}>
          <TouchableHighlight
            underlayColor="#fff"
            onPress={() => navigation.navigate('Create', {type: 'todo'})}
            style={styles.addContainer}>
            <Text style={styles.add}>+</Text>
          </TouchableHighlight>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

export default TodoScreen;
