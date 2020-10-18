import React, {useState} from 'react';
import {CommonStyles} from 'consts/';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

const {button, text} = CommonStyles;

const Stopwatch = () => {
  const [isGoing, setIsGoing] = useState(false);
  const [timerInterval, setTimerInterval] = useState(null);
  const [timer, setTimer] = useState({
    time: 0,
    timeAccumulated: 0,
  });

  const timerCallback = (timestamp) => () =>
    setTimer({
      ...timer,
      time: ((timer.timeAccumulated + (Date.now() - timestamp)) / 1000).toFixed(
        3,
      ),
    });

  const onPressStart = () => {
    setIsGoing(!isGoing);
    if (!isGoing) {
      const timestamp = Date.now();
      setTimerInterval(setInterval(timerCallback(timestamp), 33));
    } else {
      clearInterval(timerInterval);
      setTimer({
        ...timer,
        timeAccumulated: Number(timer.time) * 1000,
      });
    }
  };

  const onPressReset = () => {
    clearInterval(timerInterval);
    setTimer({time: 0, timeAccumulated: 0});
    if (!isGoing) return;
    const timestamp = Date.now();
    setTimerInterval(setInterval(timerCallback(timestamp), 33));
  };

  return (
    <View style={styles.root}>
      <Text style={styles.time}>{timer?.time + ' s'}</Text>
      <View style={styles.buttons}>
        <TouchableOpacity onPress={onPressStart} style={styles.button}>
          <Text style={styles.text}>{isGoing ? 'Stop' : 'Start'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressReset} style={styles.button}>
          <Text style={styles.text}>{'Reset'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  navbar: {
    marginBottom: 100,
    marginTop: 40,
    ...button,
  },
  text,
  time: {
    ...text,
    fontSize: 100,
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 4,
  },
  button,
});

export default Stopwatch;
