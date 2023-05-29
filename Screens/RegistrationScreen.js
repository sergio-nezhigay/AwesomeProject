import React from "react";
import { Dimensions } from "react-native";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  ImageBackground,
  Image,
} from "react-native";
import AvatarImage from "../assets/avatar1.jpg";
const windowWidth = Dimensions.get("window").width;
const translationX = -windowWidth * 0.24;

const RegistrationScreen = () => {
  return (
    <ImageBackground
      source={require("../assets/mountains.jpg")}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.formContainer}>
        <View
          style={{
            position: "absolute",
            top: -60,
            left: 0,
            right: 0,
            bottom: 0,

            alignItems: "center",
          }}
        >
          <Image source={AvatarImage} style={styles.avatar} />
        </View>
        <Text style={styles.title}>Реєстрація</Text>
        <TextInput style={styles.input} placeholder="Name2" />
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
        />
        <Button title="Register" />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  avatar: {
    width: 120,
    height: 120,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    backgroundColor: "#fff",
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  formContainer: {
    position: "relative",
    justifyContent: "flex-end",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "white",
    paddingTop: 92,
    paddingHorizontal: 16,
    paddingBottom: 78,
  },
});

export default RegistrationScreen;
