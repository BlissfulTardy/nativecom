
// IMPORT React
import React from "react";
// IMPORT React-Navigation
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
// IMPORT Screens
import ScreenAuth from "../screens/auth/ScreenAuth";
import ScreenLogin from "../screens/auth/ScreenLogin";
import ScreenPassword from "../screens/auth/ScreenPassword";
import ScreenRegister from "../screens/auth/ScreenRegister";
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
          name="ScreenLogin"
          component={ScreenLogin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ScreenAuth"
          component={ScreenAuth}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ScreenPassword"
          component={ScreenPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ScreenRegister"
          component={ScreenRegister}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default NavigatorAuth;