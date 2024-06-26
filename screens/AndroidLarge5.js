import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Chart from "../components/Chart";
import { FontSize, Color, FontFamily, Padding, Border } from "../GlobalStyles";

const AndroidLarge5 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.androidLarge6}>
      <Image
        style={styles.captureDcran20240624150}
        contentFit="cover"
        source={require("../assets/capture-dcran-20240624-150646-2.png")}
      />
      <Image
        style={styles.laPersonne3Icon}
        contentFit="cover"
        source={require("../assets/lapersonne-2.png")}
      />
      <View style={styles.tabs}>
        <Pressable
          style={[styles.tabBarItem, styles.tabItemPosition]}
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
          style={styles.tabBarItem1}
          onPress={() => navigation.navigate("AndroidLarge")}
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
          onPress={() => navigation.navigate("AndroidLarge11")}
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
        <View style={[styles.homeIndicator, styles.homePosition]}>
          <View style={[styles.homeIndicator1, styles.homePosition]} />
        </View>
      </View>
      <Chart />
      <Image
        style={[styles.image1Icon, styles.image1IconPosition]}
        contentFit="cover"
        source={require("../assets/image-1.png")}
      />
      <Text
        style={[styles.consumptionEnergy, styles.image1IconPosition]}
      >{`consumption energy `}</Text>
      <View style={styles.androidLarge6Child} />
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
    letterSpacing: 0,
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    fontFamily: FontFamily.smallText,
    fontWeight: "500",
  },
  homePosition: {
    height: 5,
    width: 134,
    bottom: 0,
    left: "50%",
    position: "absolute",
  },
  image1IconPosition: {
    left: 20,
    position: "absolute",
  },
  captureDcran20240624150: {
    top: 38,
    left: 12,
    width: 154,
    height: 27,
    position: "absolute",
  },
  laPersonne3Icon: {
    top: 32,
    left: 298,
    width: 33,
    height: 33,
    position: "absolute",
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
  homeIndicator1: {
    marginLeft: -67,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorBlack,
  },
  homeIndicator: {
    marginLeft: 46,
  },
  tabs: {
    top: 751,
    right: 0,
    left: 0,
    height: 49,
    position: "absolute",
    overflow: "hidden",
  },
  image1Icon: {
    top: 490,
    borderRadius: Border.br_11xl,
    width: 281,
    height: 200,
  },
  consumptionEnergy: {
    top: 434,
    fontSize: 15,
    lineHeight: 23,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.smallText,
    fontWeight: "500",
    left: 20,
  },
  androidLarge6Child: {
    top: 467,
    left: 8,
    borderRadius: 15,
    backgroundColor: Color.colorGainsboro_300,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_100,
    borderWidth: 1,
    width: 339,
    height: 232,
    position: "absolute",
  },
  androidLarge6: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default AndroidLarge5;
