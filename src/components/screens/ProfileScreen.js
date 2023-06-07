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
import Icon from "react-native-vector-icons/Feather";
// import { TextStyled } from "../common/TextStyled/TextStyled";
import { stylesCommon } from "../common/TextStyled/TextStyled";

import AvatarImage from "../../assets/avatar1.jpg";
import Landscape1 from "../../assets/landscape1.jpg";
import Landscape2 from "../../assets/landscape2.jpg";
import Landscape3 from "../../assets/landscape3.jpg";

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
            <Text style={styles.title}>Natali Romanova9</Text>

            <Image source={Landscape1} style={styles.photo} />
            <Text style={stylesCommon.text}>Ліс</Text>
            <View style={styles.row}>
              <View style={styles.row}>
                <View style={styles.row}>
                  <Icon name="message-circle" size={24} style={styles.circle} />
                  <Text>8</Text>
                </View>
                <View style={styles.row}>
                  <Icon name="thumbs-up" size={24} style={styles.circle} />
                  <Text>153</Text>
                </View>
              </View>
              <View style={styles.row}>
                <Icon name="map-pin" size={24} style={styles.circle} />
                <Text>Ukraine</Text>
              </View>
            </View>

            <Image source={Landscape2} />
            <Image source={Landscape3} />

            <View style={styles.wrapper}>
              <Text style={styles.title}>Natali 666</Text>
              <Text style={styles.title}>Natali 666</Text>
            </View>
          </View>
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
    paddingTop: 119,
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
    backgroundColor: "yellow",
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
