import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  Keyboard,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";

import AvatarImage from "../../assets/avatar1.jpg";
import Landscape1 from "../../assets/landscape1.jpg";
import Landscape2 from "../../assets/landscape2.jpg";
import Landscape3 from "../../assets/landscape3.jpg";
import Snippet from "../common/Snippet/Snippet";
import Footer from "../common/Footer/Footer";

const ProfileScreen = () => {
  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ImageBackground
          source={require("../../assets/mountains.jpg")}
          style={styles.backgroundImage}
          resizeMode="cover"
        >
          <View style={styles.container}>
            <Image source={AvatarImage} style={styles.avatar} />
            <Text style={styles.title}>Natali Romanova</Text>

            <Snippet
              photo={Landscape1}
              title="Ліс"
              commentsNumber={8}
              likesNumber={151}
              place={"Ukraine"}
            />
            <Snippet
              photo={Landscape3}
              title="Захід на Чорному морі"
              commentsNumber={3}
              likesNumber={200}
              place={"Ukraine"}
            />
            <Snippet
              photo={Landscape2}
              title="Старий будиночок у Венеції"
              commentsNumber={50}
              likesNumber={200}
              place={"Italy"}
            />
          </View>
          <Footer />
        </ImageBackground>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  photoWrapper: {
    flex: 1,
    width: "100%",
    height: 240,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 4,
  },
  circle: {
    color: "#FF6C00",
    marginRight: 9,
  },
  photo: {
    width: "100%",
    height: undefined,
    aspectRatio: 142 / 100,
    borderRadius: 8,
    marginBottom: 8,
  },
  photoName: {},
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    paddingTop: 200,
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
  container: {
    position: "relative",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "white",
    paddingHorizontal: 16,
    fontSize: 16,
    lineHeight: 19,
    color: "red1",
  },
  wrapper: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
});

export default ProfileScreen;
