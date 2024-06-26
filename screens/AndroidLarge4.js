import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, Color, FontFamily, Padding } from "../GlobalStyles";

const AndroidLarge4 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.androidLarge5}>
      <Image
        style={[styles.captureDcran20240624150, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/capture-dcran-20240624-150646-2.png")}
      />
      <Image
        style={styles.laPersonne2Icon}
        contentFit="cover"
        source={require("../assets/lapersonne-2.png")}
      />
      <Image
        style={[styles.androidLarge5Child, styles.androidLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-20.png")}
      />
      <Image
        style={[styles.androidLarge5Item, styles.androidLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-21.png")}
      />
      <Text style={styles.waterConsumption}>{`water consumption
`}</Text>
      <Text style={[styles.text, styles.textTypo1]}>18</Text>
      <Image
        style={[styles.sun31476631Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/sun-3147663-1.png")}
      />
      <Image
        style={[styles.androidLarge5Inner, styles.rectangleIconPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-22.png")}
      />
      <Text style={styles.humidity}>humidity</Text>
      <Text style={[styles.text1, styles.textTypo]}>50%</Text>
      <Image
        style={[styles.rectangleIcon, styles.rectangleIconPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-21.png")}
      />
      <Text style={[styles.text2, styles.textTypo1]}>27°</Text>
      <Text style={[styles.text3, styles.textTypo]}>27°</Text>
      <Image
        style={styles.humidity32629681Icon}
        contentFit="cover"
        source={require("../assets/humidity-3262968-1.png")}
      />
      <Image
        style={styles.hail3007551Icon}
        contentFit="cover"
        source={require("../assets/hail-300755-1.png")}
      />
      <Image
        style={styles.temperature61651281Icon}
        contentFit="cover"
        source={require("../assets/temperature-6165128-1.png")}
      />
      <View style={[styles.homeIndicator, styles.homePosition]}>
        <View style={[styles.homeIndicator1, styles.homePosition]} />
      </View>
      <View style={styles.tabs}>
        <View style={[styles.tabBarItem, styles.tabItemPosition]}>
          <Text style={[styles.energy, styles.homeTypo]}>energy</Text>
          <Image
            style={[styles.accbD54a4a278c8b5885ef2172Icon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/9953accbd54a4a278c8b5885ef2172f5-1.png")}
          />
        </View>
        <Pressable
          style={[styles.tabBarItem1, styles.tabBarItem1FlexBox]}
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
      <Pressable
        style={[styles.buttonCompact, styles.tabBarItem1FlexBox]}
        onPress={() => navigation.navigate("AndroidLarge5")}
      >
        <Text style={styles.dashboard}>Dashboard</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    left: 22,
    position: "absolute",
  },
  androidLayout: {
    width: 363,
    borderRadius: Border.br_11xl,
    left: 3,
    position: "absolute",
  },
  textTypo1: {
    lineHeight: 75,
    fontSize: FontSize.size_31xl,
    left: 152,
    height: 110,
    width: 188,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.smallText,
    fontWeight: "500",
    position: "absolute",
  },
  rectangleIconPosition: {
    left: 6,
    width: 363,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  textTypo: {
    left: 153,
    lineHeight: 75,
    fontSize: FontSize.size_31xl,
    height: 110,
    width: 188,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.smallText,
    fontWeight: "500",
    position: "absolute",
  },
  homePosition: {
    height: 5,
    width: 134,
    bottom: 0,
    left: "50%",
    position: "absolute",
  },
  tabItemPosition: {
    opacity: 0.5,
    width: 76,
    left: "50%",
    position: "absolute",
  },
  homeTypo: {
    textAlign: "center",
    letterSpacing: 0,
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    fontFamily: FontFamily.smallText,
    fontWeight: "500",
  },
  tabBarItem1FlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  captureDcran20240624150: {
    top: 49,
    width: 154,
    height: 27,
  },
  laPersonne2Icon: {
    top: 43,
    left: 308,
    width: 33,
    height: 33,
    position: "absolute",
  },
  androidLarge5Child: {
    top: 139,
    height: 95,
  },
  androidLarge5Item: {
    top: 253,
    height: 98,
  },
  waterConsumption: {
    top: 247,
    left: 140,
    height: 110,
    width: 188,
    color: Color.colorBlack,
    lineHeight: 30,
    textAlign: "left",
    fontFamily: FontFamily.smallText,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  text: {
    top: 273,
  },
  sun31476631Icon: {
    top: 143,
    width: 94,
    height: 87,
  },
  androidLarge5Inner: {
    height: 99,
    top: 365,
  },
  humidity: {
    height: 103,
    top: 365,
    left: 152,
    width: 188,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.smallText,
    fontWeight: "500",
    lineHeight: 30,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  text1: {
    top: 387,
  },
  rectangleIcon: {
    top: 489,
    height: 98,
  },
  text2: {
    top: 501,
  },
  text3: {
    top: 163,
  },
  humidity32629681Icon: {
    top: 264,
    left: 31,
    width: 75,
    height: 69,
    position: "absolute",
  },
  hail3007551Icon: {
    top: 381,
    left: 34,
    width: 72,
    height: 71,
    position: "absolute",
  },
  temperature61651281Icon: {
    top: 497,
    left: 46,
    width: 79,
    height: 74,
    position: "absolute",
  },
  homeIndicator1: {
    marginLeft: -67,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorBlack,
  },
  homeIndicator: {
    marginLeft: 50.5,
  },
  energy: {
    marginLeft: -16,
    bottom: 2,
    letterSpacing: 0,
    fontSize: FontSize.size_3xs,
    left: "50%",
    position: "absolute",
  },
  accbD54a4a278c8b5885ef2172Icon: {
    width: 28,
    height: 28,
    top: 0,
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
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_11xs,
    top: 0,
    left: "50%",
    alignItems: "center",
  },
  crowdfunding: {
    marginLeft: -33,
    bottom: 2,
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
    top: 746,
    right: 3,
    left: 0,
    height: 49,
    position: "absolute",
    overflow: "hidden",
  },
  dashboard: {
    lineHeight: 28,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.smallText,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
  },
  buttonCompact: {
    top: 624,
    left: 52,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorForestgreen,
    width: 266,
    height: 39,
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
  },
  androidLarge5: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default AndroidLarge4;
