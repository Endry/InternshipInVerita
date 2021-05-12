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
import {doneTasks, Section} from './../TasksStorage';
import styles from './../../assets/style/style';
import store from './../store';

function DoneScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FlatList
          data={store.getState().dones}
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