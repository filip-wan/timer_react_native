import React, {useEffect, useState} from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Button,
  TouchableOpacity,
} from 'react-native';
import {Link} from 'react-router-native';

const Home = () => {
  const [isGoing, setIsGoing] = useState(false);
  const [time, setTime] = useState('0.00 s');
  const [timer, setTimer] = useState(null);

  const timerCallback = (timestamp) =>
    setTime(((Date.now() - timestamp) / 1000).toFixed(3) + ' s');
  const onPress = () => {
    setIsGoing(!isGoing);
    if (!isGoing) {
      const timestamp = Date.now();
      setTimer(setInterval(() => timerCallback(timestamp), 33));
    } else {
      clearInterval(timer);
      setTime('0.00 s');
    }
  };

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View>
        <Link to={'/settings'}>
          <Text style={styles.text}>{time}</Text>
        </Link>
        <TouchableOpacity onPress={onPress} style={styles.button}>
          <Text style={styles.text}>{isGoing ? 'Stop' : 'Start'}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  text: {
    color: Colors.light,
    textAlign: 'center',
    textAlignVertical: 'center',
    marginTop: 100,
    fontSize: 50,
  },
  button: {
    backgroundColor: 'gray',
    borderRadius: 30,
    marginTop: 100,
  },
});

export default Home;
