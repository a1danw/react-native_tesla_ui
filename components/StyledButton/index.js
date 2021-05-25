import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./styles.js";

const StyledButton = (props) => {
  const { type, content, onPress } = props;
  // console.warn(type);

  const backgroundColor = type === "primary" ? "#171A20CC" : "#FFFFFFA6";
  const color = type === "primary" ? "#FFFFFFA6" : "#171A20CC";

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor }]}
        onPress={() => onPress()}
      >
        <Text style={[styles.text, { color }]}>{content}</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;
