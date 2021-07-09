import React from 'react';
import {View, Text, StyleSheet, Linking} from 'react-native';

const Repo = props => {
  return (
    <View style={styles.item}>
      <Text
        style={styles.title}
        onPress={() => Linking.openURL(`${props.URL}`)}>
        {props.title}
      </Text>
      <View style={styles.detailWrap}>
        <Text style={styles.detail}>
          owner's name: <Text style={styles.value}>{props.on}</Text>
        </Text>
      </View>
      <View style={styles.detailWrap}>
        <Text style={styles.detail}>
          language: <Text style={styles.value}>{props.lang}</Text>
        </Text>
      </View>
      <View style={styles.detailWrap}>
        <Text style={styles.detail}>
          description: <Text style={styles.value}>{props.description}</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#0d1117',
    marginHorizontal: 20,
    marginBottom: 24,
    padding: 15,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#505050',
  },
  title: {
    color: '#549fed',
    fontSize: 24,
    textDecorationLine: 'underline',
    fontWeight: '400',
    marginBottom: 10,
  },
  detail: {
    marginTop: 2,
    color: '#ffff00',
    fontSize: 15,
    fontStyle: 'italic',
    fontWeight: '200',
  },
  value: {
    color: '#fff',
    flexWrap: 'wrap',
    fontSize: 16,
    fontWeight: '400',
    fontStyle: 'normal',
  },
});

export default Repo;
