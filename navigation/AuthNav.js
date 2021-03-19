import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import {
  getFocusedRouteNameFromRoute,
  NavigationContainer,
} from '@react-navigation/native'

import LoginScreen from '../screens/LoginScreen'

const getHeaderTitle = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed'

  switch (routeName) {
    case 'Login':
      return 'Login'
    case 'Register':
      return 'Register'
  }
}

const AuthNav = ({ navigation, route }) => {
  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Brooklyn Athletic Club'
          component={LoginScreen}
          options={{
            headerTitleStyle: {
              color: 'white',
              fontWeight: '300',
              fontSize: 19,
            },
            headerStyle: {
              backgroundColor: 'darkgreen',

              shadowOpacity: 0, // remove shadow on iOS
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AuthNav
