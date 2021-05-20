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

function DoneScreen({navigation}) {
  const done = useSelector(state => state);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FlatList
          data={done}
          renderItem={({item}) =>
            item.type === 'done' ? (
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
          onPress={() => navigation.navigate('Create', {type: 'done'})}
          style={styles.addContainer}>
          <Text style={styles.add}>+</Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
}

export default DoneScreen;
