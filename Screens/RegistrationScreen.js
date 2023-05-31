import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ImageBackground,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

import AvatarImage from "../assets/avatar1.jpg";
import { useNavigation } from "@react-navigation/native";

const RegistrationScreen = () => {
  const navigation = useNavigation();
  const handleLoginLinkPress = () => {
    navigation.navigate("Login");
  };

  const [focusedInput, setFocusedInput] = useState(null);
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginPress = () => {
    console.log("login=", login);
    console.log("email=", email);
    console.log("password=", password);
  };

  const handleInputFocus = (inputName) => {
    setFocusedInput(inputName);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground
        source={require("../assets/mountains.jpg")}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.formContainer}>
          <Image source={AvatarImage} style={styles.avatar} />
          <Text style={styles.title}>Реєстрація</Text>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <TextInput
              style={[
                styles.input,
                focusedInput === "login" && styles.inputFocused,
              ]}
              name="login"
              value={login}
              placeholder="Логін"
              onChangeText={(text) => setLogin(text)}
              onFocus={() => handleInputFocus("login")}
              underlineColorAndroid="transparent"
              textDecorationLine="none"
            />
            <TextInput
              style={[
                styles.input,
                focusedInput === "email" && styles.inputFocused,
              ]}
              name="email"
              type="email"
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder="Адреса електронної пошти"
              onFocus={() => handleInputFocus("email")}
              underlineColorAndroid="transparent"
            />
            <TextInput
              style={[
                styles.input,
                focusedInput === "password" && styles.inputFocused,
              ]}
              name="password"
              placeholder="Пароль"
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry
              onFocus={() => handleInputFocus("password")}
              underlineColorAndroid="transparent"
            />
          </KeyboardAvoidingView>
          <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
            <Text style={styles.buttonText}>Зареєстуватися</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLoginLinkPress}>
            <Text style={styles.loginLink}>Вже є акаунт? Увійти</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
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
    borderRadius: 16,
    transform: [{ translateY: -92 }],
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: -60,
  },
  title: {
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 0.01,
    color: "#212121",
    marginBottom: 33,
    fontFamily: "Roboto",
    fontWeight: "500",
  },
  input: {
    backgroundColor: "#F6F6F6",
    marginBottom: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },
  inputFocused: {
    borderColor: "#FF6C00",
    color: "#212121",
    backgroundColor: "white",
    textDecorationLine: "none",
  },
  formContainer: {
    position: "relative",
    justifyContent: "flex-end",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "white",
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
  button: {
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    marginTop: 27,
    marginBottom: 16,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#FFFFFF",
  },
  loginLink: {
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#1B4371",
    marginBottom: 46,
  },
});

export default RegistrationScreen;
