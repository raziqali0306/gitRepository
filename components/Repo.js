import React, {useState} from 'react';
import {View, Text, StyleSheet, Linking, TouchableOpacity} from 'react-native';

const Repo = props => {
  const [repoImport, setRepoImport] = useState(false);
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
      <TouchableOpacity style={styles.searchButton} onPress={props.onImport}>
        <Text style={styles.importText}>Import</Text>
      </TouchableOpacity>
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
    fontFamily: 'serif',
    color: '#549fed',
    fontSize: 24,
    textDecorationLine: 'underline',
    fontWeight: '400',
    marginBottom: 10,
  },
  detail: {
    fontFamily: 'serif',
    marginTop: 2,
    color: '#ffff00',
    fontSize: 14,
    fontStyle: 'italic',
    fontWeight: '200',
  },
  value: {
    fontFamily: 'san-serif',
    color: '#fff',
    flexWrap: 'wrap',
    fontSize: 15,
    fontWeight: '400',
    fontStyle: 'normal',
  },
  searchButton: {
    width: '20%',
    height: 24,
    alignItems: 'center',
    marginTop: 8,
    backgroundColor: '#000000',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#505050',
  },
  importText: {
    fontFamily: 'serif',
    color: '#549fed',
  },
});

export default Repo;
