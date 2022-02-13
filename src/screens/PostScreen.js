import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const PostScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>PostScreen</Text>
    </View>
  );
};

export default PostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
