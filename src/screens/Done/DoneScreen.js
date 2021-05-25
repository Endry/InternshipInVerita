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

import {Section} from './../TasksStorage';
import styles from './../../assets/style/style';
import {useSelector} from 'react-redux';
import {createSelector} from 'reselect';

const selectTasksDone = createSelector(
  state => state,
  state => state.tasks.filter(done => done.type === 'done'),
);

function DoneScreen({navigation}) {
  const done = useSelector(selectTasksDone);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FlatList
          data={done}
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
          onPress={() => navigation.navigate('Create', {type: 'done'})}
          style={styles.addContainer}>
          <Text style={styles.add}>+</Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
}

export default DoneScreen;
