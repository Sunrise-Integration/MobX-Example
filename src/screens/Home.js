import React, {useContext} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {getNewNotifications} from '../api/getNotifications';
import {observer} from "mobx-react-lite";
import {RootStoreContext} from "../store/rootStore.store";

export const Home = observer(({navigation, route}) => {
  const rootStore = useContext(RootStoreContext)

  return rootStore.loading ? (
    <ImageBackground
      style={styles.imageBackground}
      source={require('../icons/background.png')}>
      <Text style={styles.titleText}> LOADING... </Text>
    </ImageBackground>
  ) : (
    <ImageBackground
      style={styles.imageBackground}
      source={require('../icons/background.png')}>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>HOME</Text>
        </View>

        <TouchableOpacity
          style={styles.loadMoreDataContainer}
          onPress={()=>rootStore.grabNewNotification(navigation)}>
          <Text style={styles.loadMoreData}>Load More Data</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
  },
  title: {
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
    margin: 50,
    alignItems: 'center',
  },
  titleText: {
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 20,
  },
});
