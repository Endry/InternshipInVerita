import 'react-native-gesture-handler';

import React from 'react';
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
  Button,
} from 'react-native';
import {Section} from './../TasksStorage';
import {useSelector} from 'react-redux';
import styles from './../../assets/style/style';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';


function TodoScreen({navigation}) {
  const todo = useSelector(state => state);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FlatList
          data={todo}
          renderItem={({item}) =>
            item.type === 'todo' ? (
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
            ) : null
          }
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
    </SafeAreaView>
  );
}

export default TodoScreen;
