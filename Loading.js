import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

function Loading() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.text}>Getting Weather...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 30,
    paddingVertical: 100,
    backgroundColor: '#cacac8',
  },
  text: {
    color: '#595959',
    fontSize: 30,
    fontWeight: '700',
  },
});

export default Loading;
