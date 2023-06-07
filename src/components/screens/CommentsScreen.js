import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import ArrowLeft from "../../assets/arrow-left.jpg";
import LandscapeImage1 from "../../assets/landscape1.jpg";

const CommentsScreen = () => {
  const [newComment, setNewComment] = useState("");

  const handleCommentChange = (text) => {
    setNewComment(text);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={ArrowLeft} style={styles.arrow} />
        <Text style={styles.title}>Коментарі</Text>
      </View>
      <View style={styles.line} />
      <View style={styles.wrapper}>
        <View>
          <View style={styles.photoWrapper}>
            <Image
              source={LandscapeImage1}
              resizeMode="cover"
              style={styles.image}
            />
          </View>
          <View>
            <View style={styles.commentRow}>
              <Image
                source={require("../../assets/avatar1.jpg")}
                style={styles.avatar}
              />
              <View style={styles.commentContent}>
                <View>
                  <Text style={styles.commentText}>
                    Really love your most recent photo.
                  </Text>
                </View>
                <Text style={styles.commentDate}>May 15, 2023</Text>
              </View>
            </View>

            <View style={[styles.commentRow, styles.mirrorCommentRow]}>
              <Image
                source={require("../../assets/avatar2.jpg")}
                style={[styles.avatar, styles.mirrorAvatar]}
              />
              <View
                style={[styles.commentContent, styles.mirrorCommentContent]}
              >
                <View style={[styles.mirrorCommentBubble]}>
                  <Text style={styles.commentText}>
                    A fast 50mm like f1.8 would help with the bokeh.
                  </Text>
                </View>
                <Text style={[styles.commentDate, styles.mirrorCommentDate]}>
                  May 16, 2023
                </Text>
              </View>
            </View>

            <View style={styles.commentRow}>
              <Image
                source={require("../../assets/avatar3.jpg")}
                style={styles.avatar}
              />
              <View style={styles.commentContent}>
                <View>
                  <Text style={styles.commentText}>
                    Amazing shot! I wish I could be there.
                  </Text>
                </View>
                <Text style={styles.commentDate}>May 17, 2023</Text>
              </View>
            </View>
          </View>
        </View>

        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={styles.newCommentWrapper}>
            <TextInput
              style={styles.newCommentInput}
              value={newComment}
              onChangeText={handleCommentChange}
              placeholder="Коментувати..."
            />
            <View style={styles.circle}>
              <Icon name="arrow-up" size={14} style={styles.arrowUp} />
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 55,
    backgroundColor: "#fff",
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
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
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
  photoWrapper: {
    height: 240,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderRadius: 6,
    overflow: "hidden",
    marginBottom: 32,
  },
  image: {
    width: "100%",
    backgroundColor: "#F6F6F6",
  },
  commentsContainer: {
    marginTop: 16,
  },
  commentRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 16,
    marginBottom: 24,
  },
  mirrorCommentRow: {
    flexDirection: "row-reverse",
  },
  avatar: {
    width: 28,
    height: 28,
    borderRadius: 28,
  },
  mirrorAvatar: {
    marginRight: 0,
    marginLeft: 8,
  },
  commentContent: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.03)",
    borderRadius: 6,
    padding: 16,
  },
  mirrorCommentContent: {
    alignItems: "flex-end",
  },

  mirrorCommentBubble: {
    marginRight: 8,
    marginLeft: 0,
  },
  commentText: {
    fontSize: 13,
    lineHeight: 18,
    color: "#212121",
  },
  commentDate: {
    fontSize: 10,
    lineHeight: 12,
    color: "#BDBDBD",
    marginTop: 4,
  },
  mirrorCommentDate: {
    textAlign: "right",
  },
  imageRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 31,
    paddingVertical: 9,
  },

  newCommentWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 50,
    backgroundColor: "#F6F6F6",
  },
  newCommentInput: {
    paddingHorizontal: 8,
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },
  circle: {
    width: 34,
    height: 34,
    borderRadius: 34,
    backgroundColor: "#FF6C00",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  arrowUp: {
    color: "white",
  },
});

export default CommentsScreen;
