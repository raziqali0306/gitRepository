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
  ActivityIndicator,
} from 'react-native';
import Repo from './components/Repo';

const App = () => {
  const [query, setQuery] = useState('');
  const [repo, setRepo] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const getReps = () => {
    const api = 'https://api.github.com/search/repositories?q={';
    if (query != null) {
      Keyboard.dismiss();
      fetch(api + query + '}')
        .then(response => response.json())
        .then(json => {
          if (json && json.items) {
            setLoading(false);
            setRepo(json.items);
          }
        })
        .catch(error => {
          setLoading(false);
          console.error(error);
        });
    }
    setQuery(null);
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
            onPress={() => {
              setLoading(true);
              getReps();
            }}
            style={styles.searchButton}>
            <Text style={styles.text}>Search</Text>
          </TouchableOpacity>
        </View>
        <KeyboardAvoidingView>
          <ScrollView>
            {!isLoading ? (
              repo.map((item, index) => {
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
              })
            ) : (
              <View style={styles.activityIndicator}>
                <ActivityIndicator size="large" color="#fff" />
              </View>
            )}
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
  activityIndicator: {
    marginTop: 220,
  },
});

export default App;
