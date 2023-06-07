import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();
  const handleRegisterLinkPress = () => {
    navigation.navigate("Registration");
  };

  const [focusedInput, setFocusedInput] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginPress = () => {
    console.log("email=", email);
    console.log("password=", password);
  };

  const handleInputFocus = (inputName) => {
    setFocusedInput(inputName);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground
        source={require("../../assets/mountains.jpg")}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.formContainer}>
          <Text style={styles.title}>Увійти</Text>

          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
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
              value={password}
              onChangeText={(text) => setPassword(text)}
              placeholder="Пароль"
              secureTextEntry
              onFocus={() => handleInputFocus("password")}
              underlineColorAndroid="transparent"
            />
          </KeyboardAvoidingView>
          <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
            <Text style={styles.buttonText}>Увійти</Text>
          </TouchableOpacity>
          <View style={styles.registerContainer}>
            <Text style={styles.registerText}>Немає акаунту? </Text>
            <TouchableOpacity onPress={handleRegisterLinkPress}>
              <Text style={styles.registerLink}>Зареєструватися</Text>
            </TouchableOpacity>
          </View>
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
  registerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 46,
  },
  registerText: {
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#1B4371",
  },
  registerLink: {
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#1B4371",
    textDecorationLine: "underline",
  },
});

export default LoginScreen;
