import React from 'react';
import { StackNavigationProp, createStackNavigator, StackCardInterpolationProps} from '@react-navigation/stack';
import { ScreenLogin, ScreenCadastrar } from "../screens";
import {TabNavigation} from './tab.navigations';
import {DrawerNavigation } from './drawer.navigation'
type LoginStackparamList = {
  Login: undefined
  Cadastrar: undefined
  Tab: undefined
  Drawer: undefined
}
type LoginScreenNavigationProp = StackNavigationProp<LoginStackparamList, 'Login'>
export type LoginTypes = {
  navigation: LoginScreenNavigationProp
}

    export function LoginNavigation() {
      const Stack = createStackNavigator<LoginStackparamList>();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={ScreenLogin} />
      <Stack.Screen name="Cadastrar" component={ScreenCadastrar} />
      <Stack.Screen name="Tab" component={TabNavigation} />
      <Stack.Screen name="Drawer" component={DrawerNavigation} />  

    </Stack.Navigator>
  );
}