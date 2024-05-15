
// IMPORT React
import React from 'react';
// IMPORT React-Native
import { View } from 'react-native';
// IMPORT React-Navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
// IMPORT Icon
import Icon from 'react-native-vector-icons/FontAwesome';
// IMPORT Styles
import styles from '../../styles';
import EStyleSheet from 'react-native-extended-stylesheet';

// IMPORT Main Screens
import ScreenMainHome from '../screens/main/ScreenMainHome';
import ScreenMainSearch from '../screens/main/ScreenMainSearch';
import ScreenMainCart from '../screens/main/ScreenMainCart';
import ScreenMainProfile from '../screens/main/ScreenMainProfile';
// IMPORT Misc Screens
import ScreenDeliveryAddresses from '../screens/misc/ScreenDeliveryAddresses';
import ScreenCheckout from '../screens/misc/ScreenCheckout';
import ScreenPaymentMethods from '../screens/misc/ScreenPaymentMethods';
import ScreenProduct from '../screens/misc/ScreenProduct';
import ScreenReceipts from '../screens/misc/ScreenReceipts';
import ScreenUserinfo from '../screens/misc/ScreenUserinfo';

// DECLARE Tab Navigation
const Tab = createBottomTabNavigator();

// DECLARE Stack Navigation
const Stack = createStackNavigator();

/**
 * TODO: Currently implementing the stack partition such that
 * each page is enabled from every tab navigation, with the
 * initial main page of each tab on the very top.
 * Could be reduced once navigations dependencies are clear.
 * @returns 
 */

// DEFINE shared pages
const StackShared = () => {
  return (
    <Stack.Navigator>
      {/* primary tab (main) pages of the application */}
      <Stack.Screen name="ScreenHome" component={ScreenMainHome} options={{ headerShown: false }} />
      <Stack.Screen name="ScreenSearch" component={ScreenMainSearch} options={{ headerShown: false }} />
      <Stack.Screen name="ScreenCart" component={ScreenMainCart} options={{ headerShown: false }} />
      <Stack.Screen name="ScreenProfile" component={ScreenMainProfile} options={{ headerShown: false }} />
      {/* secondary (misc) pages of the application */}
      <Stack.Screen name="ScreenDeliveryAddresses" component={ScreenDeliveryAddresses} options={{ headerShown: false }} />
      <Stack.Screen name="ScreenCheckout" component={ScreenCheckout} options={{ headerShown: false }} />
      <Stack.Screen name="ScreenPaymentMethods" component={ScreenPaymentMethods} options={{ headerShown: false }} />
      <Stack.Screen name="ScreenProduct" component={ScreenProduct} options={{ headerShown: false }} />
      <Stack.Screen name="ScreenReceipts" component={ScreenReceipts} options={{ headerShown: false }} />
      <Stack.Screen name="ScreenUserInfo" component={ScreenUserinfo} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

// DEFINE home pages
const StackHome = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ScreenHome" component={ScreenMainHome} options={{ headerShown: false }} />
      <Stack.Screen name="Shared" component={StackShared} />
    </Stack.Navigator>
  );
};

// DEFINE search pages
const StackSearch = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ScreenSearch" component={ScreenMainSearch} options={{ headerShown: false }} />
      <Stack.Screen name="Shared" component={StackShared} />
    </Stack.Navigator>
  );
};

// DEFINE cart pages
const StackCart = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ScreenCart" component={ScreenMainCart} options={{ headerShown: false }} />
      <Stack.Screen name="Shared" component={StackShared} />
    </Stack.Navigator>
  );
};

// DEFINE profile pages
const StackProfile = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ScreenProfile" component={ScreenMainProfile} options={{ headerShown: false }} />
      <Stack.Screen name="Shared" component={StackShared} />
    </Stack.Navigator>
  );
};

// DEFINE main tabs navigator
const NavigatorMain = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false, // disabling as a fixed header exists
          // configuring tab bar icons and coloring
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Search') {
              iconName = 'search';
            } else if (route.name === 'Cart') {
              iconName = 'shopping-cart';
            } else if (route.name === 'Profile') {
              iconName = 'user';
            }
            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#007bff',
          tabBarInactiveTintColor: '#bbb',
          tabBarStyle: { height: EStyleSheet.value('$heightAppTabBar') }
        })}
      >
        <Tab.Screen name="Home" component={StackHome} />
        <Tab.Screen name="Search" component={StackSearch} />
        <Tab.Screen name="Cart" component={StackCart} />
        <Tab.Screen name="Profile" component={StackProfile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default NavigatorMain;