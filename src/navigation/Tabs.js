import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

import {
  HomeScreen,
  SettingScreen,
  FindScreen,
  PostScreen,
  ChatScreen,
} from '../screens';

const customTabBarButton = ({children, onPress}) => (
  <TouchableOpacity
    style={{
      top: -30,
      justifyContent: 'center',
      alignItems: 'center',
      ...styles.Shadow,
    }}
    onPress={onPress}>
    <View
      style={{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: 'purple',
      }}>
      {children}
    </View>
  </TouchableOpacity>
);

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 15,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#ffffff',
          borderRadius: 15,
          height: 70,
          ...styles.Shadow,
        },
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.TabNavigator}>
                <Image
                  source={require('../assets/icons/home.png')}
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? 'purple' : '#748c94',
                  }}
                  resizeMode="contain"
                />
                <Text
                  style={{
                    color: focused ? 'purple' : '#748c94',
                    fontSize: 10,
                  }}>
                  Home
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.TabNavigator}>
                <Image
                  source={require('../assets/icons/setting.png')}
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? 'purple' : '#748c94',
                  }}
                  resizeMode="contain"
                />
                <Text
                  style={{
                    color: focused ? 'purple' : '#748c94',
                    fontSize: 10,
                  }}>
                  Setting
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Post"
        component={PostScreen}
        options={{
          tabBarButton: customTabBarButton,
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/icons/plus.png')}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
                tintColor: '#fff',
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Find"
        component={FindScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.TabNavigator}>
                <Image
                  source={require('../assets/icons/search.png')}
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? 'purple' : '#748c94',
                  }}
                  resizeMode="contain"
                />
                <Text
                  style={{
                    color: focused ? 'purple' : '#748c94',
                    fontSize: 10,
                  }}>
                  Search
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.TabNavigator}>
                <Image
                  source={require('../assets/icons/chat.png')}
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? 'purple' : '#748c94',
                  }}
                  resizeMode="contain"
                />
                <Text
                  style={{
                    color: focused ? 'purple' : '#748c94',
                    fontSize: 10,
                  }}>
                  Chat
                </Text>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
export default Tabs;
/* --------------------------------- styles --------------------------------- */
const styles = StyleSheet.create({
  Shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  TabNavigator: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 10,
  },
});
/* -------------------------------------------------------------------------- */
/*                             customTabBarButton                             */
/* -------------------------------------------------------------------------- */
