import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  StyleSheet,
  View,
  Text,
  Pressable,
} from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const AndroidLarge1 = ({ style }) => {
  return (
    <View style={[styles.androidLarge7, style]}>
      <View style={[styles.frame, styles.frameLayout3]}>
        <View style={[styles.frame1, styles.frameLayout3]}>
          <Image
            style={styles.captureDcran20240624150}
            contentFit="cover"
            source={require("../assets/capture-dcran-20240624-150646-4.png")}
          />
          <Image
            style={[styles.laPersonne4Icon, styles.frameLayout3]}
            contentFit="cover"
            source={require("../assets/lapersonne-2.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout3: {
    height: 33,
    position: "absolute",
  },
  frameLayout2: {
    width: 414,
    overflow: "hidden",
  },
  homePosition: {
    bottom: 0,
    left: "50%",
    position: "absolute",
  },
  frameLayout: {
    width: 76,
    position: "absolute",
    overflow: "hidden",
  },
  tabItemPosition: {
    opacity: 0.5,
    marginLeft: -38,
    width: 76,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  homeTypo: {
    color: Color.colorBlack,
    letterSpacing: 0,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.smallText,
    fontWeight: "500",
    textAlign: "center",
  },
  frame11Layout: {
    height: 423,
    position: "absolute",
  },
  nameSpaceBlock: {
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    overflow: "hidden",
  },
  name1Typo: {
    textAlign: "left",
    color: Color.colorBlack,
    lineHeight: 20,
    fontSize: FontSize.size_sm,
  },
  infoFlexBox: {
    marginLeft: 12,
    justifyContent: "flex-end",
    flexDirection: "row",
    alignItems: "center",
  },
  captureDcran20240624150: {
    top: 3,
    width: 154,
    height: 27,
    left: 0,
    position: "absolute",
  },
  laPersonne4Icon: {
    left: 290,
    width: 33,
    top: 0,
  },
  frame1: {
    width: 323,
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  frame: {
    top: 41,
    left: 12,
    width: 336,
    overflow: "hidden",
  },
  androidLarge7: {
    backgroundColor: Color.colorWhite,
    width: 360,
    height: 800,
    overflow: "hidden",
  },
});

export default AndroidLarge1;
