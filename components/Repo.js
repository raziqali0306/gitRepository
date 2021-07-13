import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Linking,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';

const Repo = props => {
  useEffect(() => {
    console.log(
      'repo.js : ' + props.isImported + ' == ' + props.packageJsonExists,
    );
  }, []);

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
      {!props.isImported ? (
        <TouchableOpacity style={styles.searchButton} onPress={props.onImport}>
          <Text style={styles.importText}>Import</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.searchButton}
          onPress={() => {
            ToastAndroid.show('Already Imported.!', ToastAndroid.SHORT);
          }}>
          <Text style={styles.importText}>Imported</Text>
        </TouchableOpacity>
      )}
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
    alignSelf: 'baseline',
    alignItems: 'center',
    marginTop: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
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
