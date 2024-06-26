import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Card from "../components/Card";
import Tabs1 from "../components/Tabs1";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const AndroidLarge111 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.androidLarge2}>
      <Image
        style={styles.captureDcran20240624150}
        contentFit="cover"
        source={require("../assets/capture-dcran-20240624-150646-2.png")}
      />
      <View style={styles.pngClipartComputerIconsUse} />
      <Image
        style={styles.laPersonne1Icon}
        contentFit="cover"
        source={require("../assets/lapersonne-2.png")}
      />
      <View style={[styles.card, styles.cardPosition]}>
        <View style={styles.title}>
          <Text
            style={[styles.compain1, styles.compainFlexBox]}
            numberOfLines={1}
          >
            compain 1
          </Text>
          <Text
            style={[styles.description, styles.compainFlexBox]}
            numberOfLines={2}
          >
            Description
          </Text>
        </View>
      </View>
      <Card
        thumbnail={require("../assets/thumbnail.png")}
        compain2="compain 2"
      />
      <Card
        thumbnail={require("../assets/thumbnail1.png")}
        compain2="compain 3"
        propTop={447}
        propLeft={15}
      />
      <Pressable
        style={styles.icons8Plus501}
        onPress={() => navigation.navigate("AndroidLarge2")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/icons8plus50-1.png")}
        />
      </Pressable>
      <Pressable
        style={styles.buttonPrimary}
        onPress={() => navigation.navigate("AndroidLarge2")}
      >
        <Text style={[styles.creatYourCompain, styles.compainFlexBox]}>
          creat your compain
        </Text>
      </Pressable>
      <Image
        style={[styles.cropSprayingAtRulesmainsFaIcon, styles.cardPosition]}
        contentFit="cover"
        source={require("../assets/crop-spraying-at-rulesmains-farm-duns--geographorguk--1565950-1.png")}
      />
      <Tabs1 onTabBarItemPress={() => navigation.navigate("AndroidLarge6")} />
    </View>
  );
};

const styles = StyleSheet.create({
  cardPosition: {
    width: 156,
    left: 24,
    position: "absolute",
  },
  compainFlexBox: {
    display: "flex",
    textAlign: "left",
    alignItems: "center",
  },
  captureDcran20240624150: {
    top: 60,
    left: 13,
    width: 154,
    height: 27,
    position: "absolute",
  },
  pngClipartComputerIconsUse: {
    top: 58,
    left: 314,
    width: 2,
    height: 2,
    position: "absolute",
  },
  laPersonne1Icon: {
    top: 54,
    left: 299,
    width: 33,
    height: 33,
    position: "absolute",
  },
  compain1: {
    color: Color.colorBlack,
    alignItems: "center",
    fontFamily: FontFamily.smallText,
    fontWeight: "500",
    display: "flex",
    textAlign: "left",
    lineHeight: 20,
    fontSize: FontSize.size_sm,
    width: 156,
    overflow: "hidden",
  },
  description: {
    fontFamily: FontFamily.interRegular,
    color: Color.colorGray_100,
    alignItems: "center",
    lineHeight: 20,
    fontSize: FontSize.size_sm,
    width: 156,
    overflow: "hidden",
  },
  title: {
    alignSelf: "stretch",
  },
  card: {
    top: 371,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  icons8Plus501: {
    left: 241,
    top: 500,
    width: 50,
    height: 50,
    position: "absolute",
  },
  creatYourCompain: {
    fontSize: FontSize.size_xs,
    lineHeight: 18,
    color: Color.colorWhite,
    width: 116,
    height: 25,
    alignItems: "center",
    fontFamily: FontFamily.smallText,
    fontWeight: "500",
    display: "flex",
    textAlign: "left",
  },
  buttonPrimary: {
    top: 130,
    left: 204,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 2,
    elevation: 2,
    shadowOpacity: 1,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorForestgreen,
    width: 134,
    height: 34,
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_sm,
    alignItems: "center",
    position: "absolute",
  },
  cropSprayingAtRulesmainsFaIcon: {
    top: 207,
    height: 150,
  },
  androidLarge2: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default AndroidLarge111;
