import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LANDING_PAGE, LOGIN } from '../constants/constants';
import Login from '../screens/auth/login/Login';
import LadingPage from '../screens/auth/landingPage/LadingPage';
import { AuthStackParams } from '../navigationTypes/navigationTypes';

const AuthStack = () => {

  const Stack = createNativeStackNavigator<AuthStackParams>();

  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }} initialRouteName={LANDING_PAGE}>
      <Stack.Screen
        options={{
          presentation: 'modal',
        }} component={Login} name={LOGIN} />
      <Stack.Screen

        component={LadingPage} name={LANDING_PAGE} />
    </Stack.Navigator>
  )
}

export default AuthStack