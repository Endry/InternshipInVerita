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
import {todoTasks, Section} from './TasksStorage';
const styles = require('./style/style');
;

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

export default TodoScreen;