
// IMPORT React
import React from "react";
// IMPORT React-Navigation
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// IMPORT Screens
import ScreenAuthLogin from "../screens/auth/ScreenAuthLogin";
import ScreenAuthRegister from "../screens/auth/ScreenAuthRegister";
import ScreenAuthPassword from "../screens/auth/ScreenAuthPassword";
import ScreenAuthProcess from "../screens/auth/ScreenAuthProcess";
// TODO: Determine whether any other imports are required here

// DECLARE Navigation Stack
const Stack = createStackNavigator();

/**
 * NavigatorAuth includes all the screens intended to be
 * navigated in scope of the authentication sub-app
 * as a standalone stack navigator component
 */
const NavigatorAuth = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={ScreenAuthLogin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={ScreenAuthRegister}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Password"
          component={ScreenAuthPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Process"
          component={ScreenAuthProcess}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default NavigatorAuth;