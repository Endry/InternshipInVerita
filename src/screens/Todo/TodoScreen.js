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

const selectTasks = createSelector(
  state => state,
  state => state,
);

const selectTasksTodo = task => {
  return task.filter(done => done.type === 'todo');
};

function TodoScreen({navigation}) {
  const todo = useSelector(selectTasks);
  console.log(todo);
  let tasks = selectTasksTodo(todo.tasks.tasks);
  console.log(todo.tasks.tasks);
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
