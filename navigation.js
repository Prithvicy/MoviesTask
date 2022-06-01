import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
//import home screen
import HomeScreen from "./screens/HomeScreen";

const Stack = createStackNavigator();
import { View, Text } from "react-native";
import React from "react";
const screenOptions = {
  headerShown: false,
};

export const SignedInStack = () => (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={screenOptions}
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
 