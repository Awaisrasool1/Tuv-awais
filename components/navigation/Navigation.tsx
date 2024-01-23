import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Login from '../../screens/login/Login';
import ResetPassword from '../../screens/reset_pass/ResetPassword';
import Form from '../../screens/allform/Form';
import FinalPage from '../../screens/finalPage/FinalPage';
const Stack = createStackNavigator();
function Navigation() {
  return (
 
    <NavigationContainer>
        <Stack.Navigator screenOptions={{
            headerShown:false
        }}>
            <Stack.Screen name='login' component={Login} />
            <Stack.Screen name='reset' component={ResetPassword} />
            <Stack.Screen name='form' component={Form} />
            <Stack.Screen name='finalForm' component={FinalPage} />

        </Stack.Navigator>
    </NavigationContainer>
  
  )
}

export default Navigation;
