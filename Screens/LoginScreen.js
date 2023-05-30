import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  Text,
  TouchableWithoutFeedback,
} from "react-native";

const LoginScreen = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <TextInput style={styles.input} placeholder="Username2" />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => console.log("Register pressed")}
          >
            <Text style={styles.buttonText}>тест логін</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "#ecf0f1",
  },
  formContainer: {
    width: "80%",
    padding: 20,
    backgroundColor: "white",
    borderRadius: 8,
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
  },
});

export default LoginScreen;
