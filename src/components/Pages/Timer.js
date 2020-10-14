import * as React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Link} from 'react-router-native';

const Timer = ({navigation}) => {
  return (
    <View>
      {/* <Link to={'/stopwatch'}>
        <Text style={styles.text}>Settings</Text>
      </Link> */}
    </View>
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
export default Timer;
