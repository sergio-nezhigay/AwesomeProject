import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";
import HomeScreen from "./Screens/HomeScreen";
import PostsScreen from "./Screens/PostsScreen";

const MainStack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <MainStack.Navigator initialRouteName="PostsScreen">
          <MainStack.Screen
            name="Registration"
            component={RegistrationScreen}
            options={{ headerShown: false }}
          />
          <MainStack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <MainStack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <MainStack.Screen
            name="Posts"
            component={PostsScreen}
            options={{ headerShown: false }}
          />
        </MainStack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red", // Set the background color to white
  },
});
