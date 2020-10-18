import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Vibration,
} from 'react-native';
import {CommonStyles} from 'consts/';

const {button, text} = CommonStyles;

const Timer = ({}) => {
  const [time, setTime] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [isGoing, setIsGoing] = useState(false);
  const [timerInterval, setTimerInterval] = useState(null);
  const [startTime, setStartTime] = useState(null);

  const getTime = () => {
    if(timeElapsed < 0) {
      Vibration.vibrate(100);
      return "Time Is Up!"
    }
    const seconds = Math.floor((timeElapsed || time) / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    return `${hours % 12} : ${minutes % 60} : ${seconds%60}`
  }


  const timerCallback = (timestamp) => () =>{
    if(isGoing) return;
    const timeElapsedToSet = time - (Date.now() - timestamp)
    setTimeElapsed( timeElapsedToSet );
  }

  const onPressStart = () => {
    setIsGoing(!isGoing);
    if (!isGoing) {
      const timestamp = Date.now();
      setStartTime(timestamp);
      setTimerInterval(setInterval(timerCallback(timestamp), 200));
    } else {
      clearInterval(timerInterval);
      const timeToSet = time - (Date.now() - startTime);
      setTime(timeToSet < 0 ? 0 : timeToSet);
      setTimeElapsed(0)
      setStartTime(null)
    }
  };

  const onPressTime = (ammount) => () => {
    const timeToSet = time + ammount
    setTime(timeToSet > 0 ? timeToSet : 0);
  };

  return (
    <View>
    <Text style={styles.time}>{getTime()}</Text>
    <View style={styles.buttons}>
      <TouchableOpacity onPress={onPressStart} style={styles.button}>
        <Text style={styles.text}>{isGoing ? 'Stop' : 'Start'}</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.buttons}>
      <TouchableOpacity onPress={onPressTime(1000 * 6)} style={styles.button}>
        <Text style={styles.text}>{'+1min'}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressTime(- 1000 * 60)} style={styles.button}>
        <Text style={styles.text}>{'-1min'}</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.buttons}>
      <TouchableOpacity onPress={onPressTime(1000 * 600)} style={styles.button}>
        <Text style={styles.text}>{'+10min'}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressTime(- 1000 * 600)} style={styles.button}>
        <Text style={styles.text}>{'-10min'}</Text>
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
    fontSize: 60,
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 4,
  },
  button,
});

export default Timer;
