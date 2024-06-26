import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const AndroidLarge6 = () => {
  return (
    <View style={styles.androidLarge4}>
      <Image
        style={styles.captureDcran20240624150}
        contentFit="cover"
        source={require("../assets/capture-dcran-20240624-150646-4.png")}
      />
      <View style={styles.pngClipartComputerIconsUse} />
      <Image
        style={styles.laPersonne3Icon}
        contentFit="cover"
        source={require("../assets/lapersonne-2.png")}
      />
      <View style={styles.tabs}>
        <View style={[styles.tabBarItem, styles.tabItemPosition]}>
          <Text style={[styles.energy, styles.homeTypo]}>energy</Text>
          <Image
            style={styles.accbD54a4a278c8b5885ef2172Icon}
            contentFit="cover"
            source={require("../assets/9953accbd54a4a278c8b5885ef2172f5-1.png")}
          />
        </View>
        <View style={[styles.tabBarItem1, styles.energyPosition]}>
          <Image
            style={styles.iconhome}
            contentFit="cover"
            source={require("../assets/iconhome.png")}
          />
          <Text style={[styles.home, styles.homeTypo]}>Home</Text>
        </View>
        <View style={[styles.tabBarItem2, styles.tabItemPosition]}>
          <Text style={[styles.crowdfunding, styles.homeTypo]}>
            crowdFunding
          </Text>
          <Image
            style={styles.ff11b296e8c428dA4eb2789531Icon}
            contentFit="cover"
            source={require("../assets/3ff11b296e8c428da4eb27895310fd49-1.png")}
          />
        </View>
        <View style={[styles.homeIndicator, styles.homeLayout]}>
          <View style={[styles.homeIndicator1, styles.homeLayout]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabItemPosition: {
    opacity: 0.5,
    width: 76,
    left: "50%",
    position: "absolute",
  },
  homeTypo: {
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.smallText,
    fontWeight: "500",
    letterSpacing: 0,
    fontSize: FontSize.size_3xs,
  },
  energyPosition: {
    left: "50%",
    position: "absolute",
  },
  homeLayout: {
    height: 5,
    width: 134,
    left: "50%",
    position: "absolute",
  },
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
  energy: {
    marginLeft: -16,
    bottom: 2,
    left: "50%",
    position: "absolute",
  },
  accbD54a4a278c8b5885ef2172Icon: {
    left: 22,
    width: 28,
    height: 28,
    top: 0,
    position: "absolute",
  },
  tabBarItem: {
    marginLeft: 103.5,
    height: 42,
    top: 0,
  },
  iconhome: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  home: {
    marginTop: 4,
  },
  tabBarItem1: {
    marginLeft: -38.5,
    alignItems: "center",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_11xs,
    top: 0,
  },
  crowdfunding: {
    marginLeft: -33,
    bottom: 2,
    left: "50%",
    position: "absolute",
  },
  ff11b296e8c428dA4eb2789531Icon: {
    top: 12,
    left: 26,
    width: 23,
    height: 23,
    position: "absolute",
  },
  tabBarItem2: {
    marginLeft: -164.5,
    top: -8,
    height: 49,
  },
  homeIndicator1: {
    marginLeft: -67,
    bottom: 0,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorBlack,
  },
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 2,
  },
  tabs: {
    top: 751,
    right: 0,
    left: -15,
    height: 49,
    position: "absolute",
    overflow: "hidden",
  },
  androidLarge4: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default AndroidLarge6;
