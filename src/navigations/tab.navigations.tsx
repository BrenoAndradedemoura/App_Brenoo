import React from 'react';
import { BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ScreenCamera, ScreenPerfil, ScreenLocation, ScreenAcelerometro } from "../screens";
import { colors } from "../styles/colors"; 
import { Ionicons, AntDesign, Entypo } from '@expo/vector-icons'; 
import { LocationScreen } from '../screens/Location';
type TabParamList = {
  Perfil: undefined
  Camera: undefined
  Location: undefined
  Acelerometro: undefined
}
type TabScreenNavigationProp = BottomTabNavigationProp<TabParamList, 'Perfil'>
export type TabTypes = {
  navigation: TabScreenNavigationProp
}

    export function TabNavigation() {
      const Tab = createBottomTabNavigator<TabParamList>();
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary
        },
        headerTintColor: colors.white,
        tabBarActiveBackgroundColor: colors.primary,
        tabBarActiveTintColor: colors.white
      }}
    >
      <Tab.Screen name="Perfil" component={ScreenPerfil}
        options={{
          tabBarIcon: () => (
            <Ionicons name='person' color={colors.white} size={24} />
          )
        }}
      />
      <Tab.Screen name="Camera" component={ScreenCamera}
      options={{
        tabBarIcon: () => (
          <AntDesign name='camera' color={colors.white} size={24}  />
        )
      }} />
      <Tab.Screen name='Location' component={ScreenLocation}
      options={{
        tabBarIcon: () => (
          <Entypo name="map" size={24} color="black" />
        )
      }}
      />
      <Tab.Screen name='Acelerometro' component={ScreenAcelerometro}
      options={{
        tabBarIcon: () => (
          <Entypo name="home" size={24} color="black" />
        )
      }}
      />
     
    </Tab.Navigator>
  );
}