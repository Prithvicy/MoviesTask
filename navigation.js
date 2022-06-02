import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
//import home screen
import HomeScreen from "./screens/HomeScreen";

const Stack = createStackNavigator();
import React from "react";
import SignUpScreen from "./screens/SignUpScreen";
import LoginScreen from "./screens/LoginScreen";
const screenOptions = {
  headerShown: false,
};

export const SignedInStack = () => (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={screenOptions}
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
 