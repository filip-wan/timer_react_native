import React from 'react';
import {Colors, CommonStyles} from 'consts/';
import {StyleSheet, View} from 'react-native';
import {useLocation} from 'react-router-native';
import NavLink from './NavLink';

const {text} = CommonStyles;

const Navbar = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <View style={styles.navbar}>
      <NavLink to="/" location={location}>
        Timer
      </NavLink>
      <NavLink to="/stopwatch" location={location}>
        Stopwatch
      </NavLink>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: Colors.navbar,
    justifyContent: 'center',
  },
  text: {...text, fontSize: 30},
});

export default Navbar;
