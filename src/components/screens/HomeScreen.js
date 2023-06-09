import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Snippet from "../common/Snippet/Snippet";
import AvatarImage from "../../assets/avatar1.jpg";
import ImageNew from "../../assets/new.jpg";
import ImageUser from "../../assets/user.jpg";
import ImageGrid from "../../assets/grid.jpg";
import Landscape1 from "../../assets/landscape1.jpg";
import Landscape2 from "../../assets/landscape2.jpg";
import { ScrollView } from "react-native-gesture-handler";

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Публікації</Text>
      <View style={styles.line} />
      <View style={styles.wrapper}>
        <View style={styles.profileContainer}>
          <Image source={AvatarImage} style={styles.avatar} />
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Natali Romanova1</Text>
            <Text style={styles.profileEmail}>email@example.com</Text>
          </View>
        </View>
        <Snippet
          photo={Landscape1}
          title="Ліс"
          commentsNumber={8}
          likesNumber={151}
          place={"Ukraine"}
        />
        <Snippet
          photo={Landscape2}
          title="Захід на Чорному морі"
          commentsNumber={3}
          likesNumber={200}
          place={"Ukraine"}
        />
      </View>
      <View style={styles.line} />
      <View style={styles.imageRow}>
        <Image source={ImageGrid} style={styles.image} />
        <Image source={ImageNew} style={styles.image} />
        <Image source={ImageUser} style={styles.image} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
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
    paddingTop: 27,
    marginBottom: 11,
    color: "#212121",
  },
  line: {
    width: "100%",
    height: 1,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 32,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 8,
    borderRadius: 16,
  },
  profileInfo: {
    justifyContent: "center",
  },
  profileName: {
    fontSize: 13,
    fontWeight: "bold",
  },
  profileEmail: {
    fontSize: 11,
    color: "rgba(33, 33, 33, 0.8)",
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

export default HomeScreen;
