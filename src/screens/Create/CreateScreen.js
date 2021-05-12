import React from 'react';

import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import {addTask, editTask} from './../TasksStorage';
import styles from './../../assets/style/style';
import store from './../store';
import {
  addTodoAction,
  editTodoAction,
  addDoneAction,
  editDoneAction,
} from './../features/actions/actions';

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
            console.log('in press');
            if (
              (titleP !== undefined && titleP !== title) ||
              (descP !== undefined && descP !== desc)
            ) {
              console.log('in if');
              type === 'todo'
                ? store.dispatch(editTodoAction(id, title, desc))
                : store.dispatch(editDoneAction(id, title, desc));
            } else if (
              (titleP === undefined && titleP !== title) ||
              (descP === undefined && descP !== desc)
            ) {
              console.log('in else');
              type === 'todo'
                ? store.dispatch(addTodoAction(title, desc))
                : store.dispatch(addDoneAction(title, desc));
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

export default CreateScreen;
