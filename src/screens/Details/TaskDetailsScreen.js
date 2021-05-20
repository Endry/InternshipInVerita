import {changeType, removeTask} from './../TasksStorage';
import React from 'react';

import {
  SafeAreaView,
  Text,
  View,
  TouchableHighlight,
  Image,
} from 'react-native';
import styles from './../../assets/style/style';
import {
  removeTaskAction,
  changeTaskTypeAction,
} from './../features/actions/actions';
import {useDispatch} from 'react-redux';

function TaskDetailsScreen({route, navigation}) {
  const {title, desc, type, id} = route.params;
  const dispatch = useDispatch();
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
            dispatch(changeTaskTypeAction(type, title, desc, id));
            navigation.navigate(type === 'done' ? 'TODO' : 'DONE');
          }}>
          <Text style={styles.tabText}>
            {type === 'todo' ? 'DONE' : 'TODO'}
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor="#fff"
          onPress={() => store.dispatch(removeTaskAction(id))}
          style={styles.delContainer}>
          <Image
            style={styles.del}
            source={require('./../../assets/images/delete.png')}
          />
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
}

export default TaskDetailsScreen;
