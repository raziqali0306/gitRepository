import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  ScrollView,
} from 'react-native';
import Repo from './components/Repo';

const App = () => {
  const [query, setQuery] = useState('');
  const [repo, setRepo] = useState([]);

  const getReps = async () => {
    if (query != '') {
      Keyboard.dismiss();
      try {
        const api = 'https://api.github.com/search/repositories?q={';
        let response = await fetch(api + query + '}');
        let resp = await response.json();
        if (resp && resp.items) {
          alert('Click on Name to open Repository in browser.!');
          setRepo(resp.items);
        }
      } catch (error) {
        alert('Make sure you have internet connection connected.');
      }
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
        <KeyboardAvoidingView>
          <ScrollView>
            {repo.map((item, index) => {
              return (
                <View key={index}>
                  <Repo
                    title={item.name}
                    on={item.owner.login}
                    lang={item.language}
                    description={item.description}
                    URL={item.html_url}
                  />
                </View>
              );
            })}
          </ScrollView>
        </KeyboardAvoidingView>
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
    fontWeight: '800',
    paddingLeft: 18,
    marginTop: 72,
    fontSize: 26,
  },
  body: {
    flex: 1,
    marginTop: 22,
    marginBottom: 50,
  },
  searchBar: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: 18,
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
