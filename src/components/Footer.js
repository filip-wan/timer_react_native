import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {StyleSheet, View, Text} from 'react-native';

const Footer = ({}) => {
  return (
    <View style={styles.engine}>
      <Text style={styles.footer}>
        2020 | Author: Filip Wanat | App: Timer | Engine:{' '}
        {global.HermesInternal ? 'Hermes' : 'JSP'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default Footer;
