import React, { useMemo } from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Tabs1 = ({
  propRight,
  tabsTop,
  tabBarItemMarginLeft,
  tabBarItemMarginLeft1,
  tabBarItemMarginLeft2,
  onTabBarItemPress,
}) => {
  const tabsStyle = useMemo(() => {
    return {
      ...getStyleValue("right", propRight),
      ...getStyleValue("top", tabsTop),
    };
  }, [propRight, tabsTop]);

  const tabBarItemStyle = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", tabBarItemMarginLeft),
    };
  }, [tabBarItemMarginLeft]);

  const tabBarItem1Style = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", tabBarItemMarginLeft1),
    };
  }, [tabBarItemMarginLeft1]);

  const tabBarItem2Style = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", tabBarItemMarginLeft2),
    };
  }, [tabBarItemMarginLeft2]);

  const navigation = useNavigation();

  return (
    <View style={[styles.tabs, tabsStyle]}>
      <Pressable
        style={[styles.tabBarItem, styles.tabItemPosition, tabBarItemStyle]}
        onPress={() => navigation.navigate("AndroidLarge4")}
      >
        <Text style={[styles.energy, styles.homeTypo]}>energy</Text>
        <Image
          style={styles.accbD54a4a278c8b5885ef2172Icon}
          contentFit="cover"
          source={require("../assets/9953accbd54a4a278c8b5885ef2172f5-1.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.tabBarItem1, tabBarItem1Style]}
        onPress={onTabBarItemPress}
      >
        <Image
          style={styles.iconhome}
          contentFit="cover"
          source={require("../assets/iconhome.png")}
        />
        <Text style={[styles.home, styles.homeTypo]}>Home</Text>
      </Pressable>
      <Pressable
        style={[styles.tabBarItem2, styles.tabItemPosition, tabBarItem2Style]}
        onPress={() => navigation.navigate("AndroidLarge111")}
      >
        <Text style={[styles.crowdfunding, styles.homeTypo]}>crowdFunding</Text>
        <Image
          style={styles.ff11b296e8c428dA4eb2789531Icon}
          contentFit="cover"
          source={require("../assets/3ff11b296e8c428da4eb27895310fd49-1.png")}
        />
      </Pressable>
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
    marginLeft: 103,
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
    marginLeft: -39,
    alignItems: "center",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_11xs,
    left: "50%",
    top: 0,
    position: "absolute",
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
    marginLeft: -165,
    top: -8,
    height: 49,
  },
  tabs: {
    top: 751,
    right: 0,
    left: 0,
    overflow: "hidden",
    height: 49,
    position: "absolute",
  },
});

export default Tabs1;
