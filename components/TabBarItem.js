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

const TabBarItem = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.tabBarItem, style]}
      onPress={() => navigation.navigate("AndroidLarge111")}
    >
      <Text style={styles.crowdfunding}>crowdFunding</Text>
      <Image
        style={styles.ff11b296e8c428dA4eb2789531Icon}
        contentFit="cover"
        source={require("../assets/3ff11b296e8c428da4eb27895310fd49-1.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  crowdfunding: {
    marginLeft: -33,
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
  ff11b296e8c428dA4eb2789531Icon: {
    top: 12,
    left: 26,
    width: 23,
    height: 23,
    position: "absolute",
  },
  tabBarItem: {
    width: 76,
    height: 49,
    opacity: 0.5,
  },
});

export default TabBarItem;
