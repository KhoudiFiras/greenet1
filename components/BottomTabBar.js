import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import Tabs1 from "./Tabs1";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const BottomTabBar1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.bottomTabBar}>
      <View style={styles.tabs}>
        <View style={[styles.tabBarItem, styles.tabItemPosition]}>
          <Text style={[styles.energy, styles.homeTypo]}>energy</Text>
          <Image
            style={styles.accbD54a4a278c8b5885ef2172Icon}
            contentFit="cover"
            source={require("../assets/9953accbd54a4a278c8b5885ef2172f5-1.png")}
          />
        </View>
        <Pressable
          style={[styles.tabBarItem1, styles.tabBarItem1Position]}
          onPress={() => navigation.navigate("AndroidLarge6")}
        >
          <Image
            style={styles.iconhome}
            contentFit="cover"
            source={require("../assets/iconhome.png")}
          />
          <Text style={[styles.home, styles.homeTypo]}>Home</Text>
        </Pressable>
        <Pressable
          style={[styles.tabBarItem2, styles.tabItemPosition]}
          onPress={() => navigation.navigate("AndroidLarge111")}
        >
          <Text style={[styles.crowdfunding, styles.homeTypo]}>
            crowdFunding
          </Text>
          <Image
            style={styles.ff11b296e8c428dA4eb2789531Icon}
            contentFit="cover"
            source={require("../assets/3ff11b296e8c428da4eb27895310fd49-1.png")}
          />
        </Pressable>
      </View>
      <Tabs1
        tabsTop={17}
        tabBarItemMarginLeft={103.5}
        tabBarItemMarginLeft1={-38.5}
        tabBarItemMarginLeft2={-164.5}
        onTabBarItemPress={() => navigation.navigate("AndroidLarge")}
      />
      <View style={[styles.homeIndicator, styles.tabBarItem1Position]} />
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
  tabBarItem1Position: {
    left: "50%",
    position: "absolute",
  },
  energy: {
    marginLeft: -16,
    bottom: 2,
    color: Color.colorBlack,
    fontFamily: FontFamily.smallText,
    fontWeight: "500",
    letterSpacing: 0,
    fontSize: FontSize.size_3xs,
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
    color: Color.colorBlack,
    fontFamily: FontFamily.smallText,
    fontWeight: "500",
    letterSpacing: 0,
    fontSize: FontSize.size_3xs,
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
  tabs: {
    top: 17,
    right: 0,
    left: 0,
    overflow: "hidden",
    height: 49,
    position: "absolute",
  },
  homeIndicator: {
    marginLeft: -182.5,
    bottom: 0,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorBlack,
    width: 134,
    height: 5,
  },
  bottomTabBar: {
    top: 733,
    left: -15,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: -0.5,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    backgroundColor: Color.colorWhite,
    width: 375,
    height: 66,
    position: "absolute",
  },
});

export default BottomTabBar1;
