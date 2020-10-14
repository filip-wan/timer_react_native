import * as React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Link, useLocation} from 'react-router-native';
import {Colors, CommonStyles} from 'consts/';

const {tab, text} = CommonStyles;

const NavLink = ({to, children, location}) => {
  // const location = useLocation();
  // console.log(location.pathname);
  return (
    <Link
      style={location.pathname === to ? styles.selectedTab : styles.tab}
      to={to}>
      <Text style={styles.text}>{children}</Text>
    </Link>
  );
};

const styles = StyleSheet.create({
  tab,
  text: {...text, fontSize: 30},
  selectedTab: {
    ...tab,
    borderBottomWidth: 1,
    borderColor: Colors.text,
  },
});
export default NavLink;
