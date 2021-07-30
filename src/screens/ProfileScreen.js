import React from 'react';
import {View, StyleSheet, Text, ImageBackground} from 'react-native';

export const ProfileScreen = ({navigation, route}) => {
  return (
    <ImageBackground
      style={styles.imageBackground}
      source={require('../icons/background.png')}>
      <View style={styles.container}>
        <Text styles={styles.titleText}>PROFILE</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
  },
  titleText: {
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 20,
  },
  imageBackground: {
    width: '100%',
    height: '100%',
  },
});
