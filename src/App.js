import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import {NativeRouter} from 'react-router-native';
import {Colors} from 'consts';
import Router from './Router';
import Footer from 'components/Footer';
import Navbar from 'components/Navbar';

const App = () => {
  return (
    <NativeRouter>
      <StatusBar barStyle="light-content" backgroundColor={Colors.navbar} />
      <SafeAreaView style={styles.root}>
        <Navbar />
        <Router />
      </SafeAreaView>
      <Footer />
    </NativeRouter>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});

export default App;
