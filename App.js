import React from "react";
import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import RegistrationScreen from "./src/components/screens/RegistrationScreen";
import LoginScreen from "./src/components/screens/LoginScreen";

import ProfileScreen from "./src/components/screens/ProfileScreen";
import HomeScreen from "./src/components/screens/HomeScreen";
import PostsScreen from "./src/components/screens/PostsScreen";
import CreatePostsScreen from "./src/components/screens/CreatePostsScreen";
import CommentsScreen from "./src/components/screens/CommentsScreen";

const MainStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="LoginScreen">
        <MainStack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Comments"
          component={CommentsScreen}
          options={{ headerShown: false }}
        />

        <MainStack.Screen
          name="CreatePosts"
          component={CreatePostsScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Posts"
          component={PostsScreen}
          options={{ headerShown: false }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
