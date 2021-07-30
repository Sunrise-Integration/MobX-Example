import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

export const notificationCard = ({title, description, key}) => {
  return (
    <View style={styles.container} key={key}>
      <View style={styles.notificationContainer}>
        <View>
          <Image
            style={{width: 25, height: 25}}
            source={require('../icons/chat.png')}
          />
        </View>
        <TouchableOpacity style={styles.delete}>
          <Text style={styles.deleteText}>X</Text>
        </TouchableOpacity>
        <View style={{marginTop: -5, flexDirection: 'column'}}>
          <Text style={styles.title}>REMINDER!</Text>
          <Text style={styles.description}> {description}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 350,
    borderRadius: 20,
    marginTop: 20,
    backgroundColor: 'white',
    height: 45,
  },
  delete: {
    position: 'absolute',
    right: 5,
    bottom: 5,
  },
  deleteText: {
    fontSize: 15,
    color: 'gray',
  },
  notificationContainer: {
    margin: 12,
    display: 'flex',
    flexDirection: 'row',
  },
  title: {
    color: 'gray',
    fontWeight: 'bold',
    marginLeft: 5,
    fontSize: 12,
  },
  description: {
    marginLeft: 2,
    color: 'gray',
    fontSize: 10,
  },
});
