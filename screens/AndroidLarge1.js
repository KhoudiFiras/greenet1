import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import BottomTabBar from "../components/BottomTabBar";
import { Color } from "../GlobalStyles";

const AndroidLarge11 = () => {
  return (
    <View style={styles.androidLarge4}>
      <Image
        style={styles.captureDcran20240624150}
        contentFit="cover"
        source={require("../assets/capture-dcran-20240624-150646-2.png")}
      />
      <View style={styles.pngClipartComputerIconsUse} />
      <Image
        style={styles.laPersonne3Icon}
        contentFit="cover"
        source={require("../assets/lapersonne-2.png")}
      />
      <BottomTabBar />
    </View>
  );
};

const styles = StyleSheet.create({
  captureDcran20240624150: {
    top: 48,
    left: 23,
    width: 154,
    height: 27,
    position: "absolute",
  },
  pngClipartComputerIconsUse: {
    top: 46,
    left: 320,
    width: 2,
    height: 2,
    position: "absolute",
  },
  laPersonne3Icon: {
    top: 42,
    left: 304,
    width: 33,
    height: 33,
    position: "absolute",
  },
  androidLarge4: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default AndroidLarge11;
