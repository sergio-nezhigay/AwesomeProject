import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/Feather";

import { stylesCommon } from "../TextStyled/TextStyled";

const Snippet = ({ photo, title, commentsNumber, likesNumber, place }) => {
  return (
    <View style={styles.card}>
      <Image source={photo} style={styles.photo} />
      <Text style={stylesCommon.text}>{title}</Text>
      <View style={styles.row}>
        <View style={styles.row}>
          <View style={styles.row}>
            <Icon name="message-circle" size={24} style={styles.circle} />
            <Text>{commentsNumber}</Text>
          </View>
          <View style={styles.row}>
            <Icon name="thumbs-up" size={24} style={styles.circle} />
            <Text>{likesNumber}</Text>
          </View>
        </View>
        <View style={styles.row}>
          <Icon name="map-pin" size={24} style={styles.circle} />
          <Text>{place}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 34,
  },
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
    // marginBottom: 34,
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

export default Snippet;
