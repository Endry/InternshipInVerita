import React from 'react';
import {Text, View} from 'react-native';
import styles from './../assets/style/style';
import type {Node} from 'react';
import {createSelector} from 'reselect';

const selectTasksDone = createSelector(
  state => state,
  state => state.filter(todo => todo.type === 'done'),
);
const selectTasksTodo = createSelector(
  state => state,
  state => state.filter(todo => todo.type === 'todo'),
);

const Section = ({children, title}): Node => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={[styles.sectionTitle]}>{title}</Text>
      <Text style={[styles.sectionDescription]}>{children}</Text>
    </View>
  );
};

export {Section, selectTasksDone, selectTasksTodo};
