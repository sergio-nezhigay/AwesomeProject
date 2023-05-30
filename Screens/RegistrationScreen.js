import React, { useState, useEffect } from "react";
import {
  Dimensions,
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

const windowWidth = Dimensions.get("window").width;

const RegistrationScreen = () => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true);
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false);
      }
    );

    // return () => {
    //   keyboardDidShowListener.remove();
    //   keyboardDidHideListener.remove();
    // };
  }, []);

  const [focusedInput, setFocusedInput] = useState(null);

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

          <KeyboardAvoidingView
            style={styles.keyboardAvoidingContainer}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <TextInput
              style={[
                styles.input,
                focusedInput === "login" && styles.inputFocused,
              ]}
              placeholder="Логін"
              onFocus={() => handleInputFocus("login")}
              underlineColorAndroid="transparent"
              textDecorationLine="none"
            />
            <TextInput
              style={[
                styles.input,
                focusedInput === "email" && styles.inputFocused,
              ]}
              placeholder="Адреса електронної пошти"
              onFocus={() => handleInputFocus("email")}
              underlineColorAndroid="transparent"
            />
            <TextInput
              style={[
                styles.input,
                focusedInput === "password" && styles.inputFocused,
              ]}
              placeholder="Пароль"
              secureTextEntry
              onFocus={() => handleInputFocus("password")}
              underlineColorAndroid="transparent"
            />
            {!isKeyboardVisible && (
              <>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => console.log("Register pressed")}
                >
                  <Text style={styles.buttonText}>Зареєстуватися</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.loginLink}>Вже є акаунт? Увійти</Text>
                </TouchableOpacity>
              </>
            )}
          </KeyboardAvoidingView>
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
    // textDecorationLine,
    textDecorationStyle: "double",
    textDecorationColor: "yellow",
    lineHeight: 19,
    color: "#BDBDBD",
  },
  inputFocused: {
    borderColor: "#FF6C00",
    color: "#212121",
    textDecorationColor: "yellow",
    backgroundColor: "white",
  },
  formContainer: {
    position: "relative",
    justifyContent: "flex-end",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "white",
    paddingTop: 92,
    paddingHorizontal: 16,
    paddingBottom: 32,
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
  keyboardAvoidingContainer: {
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
});

export default RegistrationScreen;
