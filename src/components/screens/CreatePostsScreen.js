import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import ArrowLeft from "../../assets/arrow-left.jpg";
import CameraImage from "../../assets/camera.png";
import ImageTrash from "../../assets/trash.png";

const CreatePostsScreen = () => {
  const [title, setTitle] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={ArrowLeft} style={styles.arrow} />
        <Text style={styles.title}>Створити публікацію</Text>
      </View>
      <View style={styles.line} />
      <View style={styles.wrapper}>
        <View style={styles.photo}>
          <Image source={CameraImage} />
        </View>
        <Text style={styles.formTitle}>Завантажте фото</Text>
        <TextInput
          style={styles.input}
          placeholder="Назва..."
          value={title}
          onChangeText={setTitle}
        />
        <TextInput style={styles.input} placeholder="Місцевість..." />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Опублікувати</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.line} />
      <View style={styles.imageRow}>
        <Image source={ImageTrash} style={styles.image} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 55,
    backgroundColor: "#FFF",
  },
  header: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  arrow: {
    width: 24,
    height: 24,
    position: "absolute",
    top: "50%",
    transform: [{ translateY: -12 }],
    left: 16,
  },
  wrapper: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
  title: {
    textAlign: "center",
    fontSize: 17,
    fontWeight: "500",
    lineHeight: 22,
    color: "#212121",
  },
  line: {
    width: "100%",
    height: 1,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  photo: {
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderRadius: 8,
    height: 240,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  formTitle: {
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    marginBottom: 16,
    padding: 16,
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
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
  imageRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 31,
    paddingVertical: 9,
  },
  image: {
    borderRadius: 8,
    marginBottom: 20,
  },
});

export default CreatePostsScreen;
