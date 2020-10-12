import * as React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {Link} from 'react-router-native';

const Home = ({}) => {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View>
        <Link to={'/settings'}>
          <Text style={styles.text}>TEST</Text>
        </Link>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  text: {
    color: Colors.light,
    textAlign: 'center',
    marginTop: 100,
    fontSize: 50,
  },
});

export default Home;
