import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  Text,
  StyleSheet,
  View,
  Pressable,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const TabBarItem1 = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.tabBarItem, style]}
      onPress={() => navigation.navigate("AndroidLarge4")}
    >
      <Text style={styles.energy}>energy</Text>
      <Image
        style={styles.accbD54a4a278c8b5885ef2172Icon}
        contentFit="cover"
        source={require("../assets/9953accbd54a4a278c8b5885ef2172f5-1.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  energy: {
    marginLeft: -16,
    bottom: 2,
    left: "50%",
    fontSize: FontSize.size_3xs,
    letterSpacing: 0,
    fontWeight: "500",
    fontFamily: FontFamily.smallText,
    color: Color.colorBlack,
    textAlign: "center",
    position: "absolute",
  },
  accbD54a4a278c8b5885ef2172Icon: {
    top: 0,
    left: 22,
    width: 28,
    height: 28,
    position: "absolute",
  },
  tabBarItem: {
    width: 76,
    height: 42,
    opacity: 0.5,
  },
});

export default TabBarItem1;
