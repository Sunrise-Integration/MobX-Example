import React, {useEffect, useState, useContext} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {notificationCard} from '../component';
import {SafeAreaView} from 'react-native-safe-area-context/src/SafeAreaView';
import {getCurrentNotifications} from '../api/getNotifications';
import {RootStoreContext} from "../store/rootStore.store";
import {observer} from "mobx-react-lite";

export const Notifications = observer(({navigation}) => {
  const rootStore = useContext(RootStoreContext)

  // On land fetch current notification
  useEffect(() => {
    rootStore.getCurrentNotifications()
  }, []);

  return rootStore.loading ? (
    <ImageBackground
      style={styles.imageBackground}
      source={require('../icons/background.png')}>
      <Text style={styles.titleText}> LOADING... </Text>
    </ImageBackground>
  ) : (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.imageBackground}
        source={require('../icons/background.png')}>
        <View style={styles.feed}>
          <Text style={styles.titleText}>Notifications</Text>
          <ScrollView>
            {rootStore.data.map((data, key) =>
              notificationCard({
                title: data.title,
                description: data.description,
                key: key,
              }),
            )}
          </ScrollView>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
  },
  feed: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'center',
  },
  imageBackground: {
    width: '100%',
    height: '100%',
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginLeft: 38,
    marginTop: 20,
  },
  titleText: {
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 20,
  },
  loadingText: {
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 250,
  },
  loadMoreData: {
    color: 'grey',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loadMoreDataContainer: {
    marginTop: 20,
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 20,
  },
});
