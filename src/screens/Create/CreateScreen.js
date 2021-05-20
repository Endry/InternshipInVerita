import React from 'react';

import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import styles from './../../assets/style/style';
import {addTaskAction, editTaskAction} from './../features/actions/actions';
import {useDispatch} from 'react-redux';

function CreateScreen({route, navigation}) {
  const {titleP, descP, type, id} = route.params;
  const [title, setTitle] = React.useState(titleP);
  const [desc, setDesc] = React.useState(descP);

  const dispatch = useDispatch();

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
              (titleP !== undefined && titleP !== title) ||
              (descP !== undefined && descP !== desc)
            ) {
              dispatch(editTaskAction(id, title, desc, type));
            } else if (
              (titleP === undefined && titleP !== title) ||
              (descP === undefined && descP !== desc)
            ) {
              dispatch(addTaskAction(title, desc, type));
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
