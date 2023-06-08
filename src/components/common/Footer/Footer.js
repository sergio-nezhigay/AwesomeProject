import React from "react";
import { StyleSheet, View, Image } from "react-native";
import ImageNew from "../../../assets/new.jpg";
import ImageUser from "../../../assets/user.jpg";
import ImageGrid from "../../../assets/grid.jpg";

export default function Footer() {
  return (
    <View>
      <View style={styles.line} />
      <View style={styles.imageRow}>
        <Image source={ImageGrid} style={styles.image} />
        <Image source={ImageNew} style={styles.image} />
        <Image source={ImageUser} style={styles.image} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  line: {
    width: "100%",
    height: 1,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
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
