import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  const [query, setQuery] = useState('');
  const [repo, setRepo] = useState([]);

  useEffect(() => {
    console.log(repo);
  }, [repo]);

  const getReps = async () => {
    try {
      const api = 'https://api.github.com/search/repositories?q={';
      let response = await fetch(api + query + '}');
      let resp = await response.json();
      setRepo(resp.items);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Git Repositories..!</Text>
      <View style={styles.body}>
        <View style={styles.searchBar}>
          <TextInput
            style={styles.input}
            placeholder={'Search...'}
            onChangeText={text => setQuery(text)}
          />
          <TouchableOpacity
            onPress={() => getReps()}
            style={styles.searchButton}>
            <Text style={styles.text}>Search</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000AA',
  },
  header: {
    color: '#fff',
    fontWeight: '400',
    paddingLeft: 18,
    marginTop: 94,
    fontSize: 24,
  },
  body: {
    marginTop: 22,
  },
  searchBar: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  input: {
    width: '70%',
    textAlign: 'center',
    backgroundColor: '#000000',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#505050',
  },
  text: {
    color: '#C9C9C9',
  },
  searchButton: {
    fontWeight: '300',
    padding: 15,
    backgroundColor: '#000000',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#505050',
  },
});

export default App;
