import React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import {useContext} from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, ProfileScreen, Notifications} from './src/screens';
import {NavigationContainer} from '@react-navigation/native';
import {configure} from 'mobx';
import {observer} from "mobx-react-lite";
import {RootStoreContext} from "./src/store/rootStore.store";

const Tab = createBottomTabNavigator();
configure({enforceActions: 'never'});

const App = observer(() => {

  const rootStore = useContext(RootStoreContext)
  console.log(rootStore.badgeCount)
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: 'purple',
          labelStyle: {
            margin: 5,
          },
        }}>
        <Tab.Screen
          name="Feed"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: () => (
              <Image
                source={require('./src/icons/homeicon.png')}
                style={styles.imageIcons}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={Notifications}
          options={{
            tabBarLabel: 'Notifications',
            tabBarIcon: () => {
              return (
               <>
                 <Image
                  source={require('./src/icons/NotificationIcon.png')}
                  style={styles.imageIcons}
                 />
                 {rootStore.badgeCount> 0 ? <View style={{position: 'absolute', backgroundColor: 'red', width: 15, height: 15, left:70,
                  borderRadius: 25}}>
                   <Text style={{fontSize: 11, left: 4, bottom: 1, color: 'white'}}>
                     {rootStore.badgeCount}
                   </Text>

                 </View>: null}
               </>
              )}
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: () => (
              <Image
                source={require('./src/icons/ProfileIcon.png')}
                style={styles.imageIcons}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
});

export default App;

const styles = StyleSheet.create({
  imageIcons: {
    height: 17,
    width: 15,
    marginTop: 10,
  },
});
