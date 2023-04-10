import React from 'react';
import { StackNavigationProp, createStackNavigator, StackCardInterpolationProps} from '@react-navigation/stack';
import { ScreenLogin, ScreenCadastrar } from "../screens";
type LoginStackparamList = {
  Login: undefined
  Cadastrar: undefined
}
type LoginScreenNavigationProp = StackNavigationProp<LoginStackparamList, 'Login'>
export type LoginTypes = {
  navigation: LoginScreenNavigationProp
}

    export function LoginNavigation() {
      const Stack = createStackNavigator<LoginStackparamList>();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={ScreenLogin} />
      <Stack.Screen name="Cadastrar" component={ScreenCadastrar} />
    </Stack.Navigator>
  );
}