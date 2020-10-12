import * as React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {NativeRouter, Route, Link} from 'react-router-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Footer from './components/Footer';
import Router from './Router';

const App = () => {
  return (
    <NativeRouter>
      <StatusBar barStyle="light-content" backgroundColor={Colors.dark} />
      <SafeAreaView style={styles.root}>
        <Router />
      </SafeAreaView>
      <Footer />
    </NativeRouter>
  );
};

const border = {
  borderColor: 'gold',
  borderStyle: 'solid',
  borderWidth: 2,
};

const styles = StyleSheet.create({
  scrollView: {
    // ...border,
  },
  root: {
    flex: 1,
    backgroundColor: Colors.dark,
  },
  text: {
    color: Colors.light,
    textAlign: 'center',
    marginTop: 100,
    fontSize: 50,
  },
  engine: {
    position: 'absolute',
    right: 10,
    left: 10,
    bottom: 0,
  },
  footer: {
    color: Colors.light,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'center',
  },
});

export default App;
