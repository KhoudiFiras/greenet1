import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Tabs1 from "../components/Tabs1";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";

const AndroidLarge2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.androidLarge3}>
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
      <Text style={[styles.compain1, styles.storyLayout]}>compain 1</Text>
      <Image
        style={styles.thumbnailIcon}
        contentFit="cover"
        source={require("../assets/thumbnail2.png")}
      />
      <Text style={[styles.story, styles.goalTypo]}>Story</Text>
      <View style={styles.field} />
      <View style={[styles.inputFieldWithLabel, styles.inputPosition]}>
        <Text style={[styles.goal, styles.goalTypo]}>Goal</Text>
        <View style={[styles.field1, styles.fieldShadowBox]} />
      </View>
      <View style={[styles.inputFieldWithLabel1, styles.inputPosition]}>
        <Text style={[styles.goal, styles.goalTypo]}>interest earnings</Text>
        <View style={[styles.field2, styles.field2SpaceBlock]}>
          <Text style={styles.label}>interest earnings</Text>
        </View>
      </View>
      <Pressable
        style={[styles.buttonCompact, styles.field2SpaceBlock]}
        onPress={() => navigation.navigate("AndroidLarge111")}
      >
        <Text style={[styles.fand, styles.fandTypo]}>fand</Text>
      </Pressable>
      <Tabs1
        propRight={2}
        tabsTop={751}
        tabBarItemMarginLeft={103}
        tabBarItemMarginLeft1={-39}
        tabBarItemMarginLeft2={-165}
        onTabBarItemPress={() => navigation.navigate("AndroidLarge6")}
      />
      <View style={[styles.homeIndicator, styles.homePosition]}>
        <View style={[styles.homeIndicator1, styles.homePosition]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  storyLayout: {
    width: 323,
    position: "absolute",
  },
  goalTypo: {
    color: Color.colorBlack,
    lineHeight: 24,
    fontSize: FontSize.smallText_size,
    textAlign: "left",
    fontFamily: FontFamily.smallText,
    fontWeight: "500",
  },
  inputPosition: {
    left: 16,
    width: 323,
    position: "absolute",
  },
  fieldShadowBox: {
    marginTop: 8,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    width: 323,
    backgroundColor: Color.colorWhite,
  },
  field2SpaceBlock: {
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    borderRadius: Border.br_5xs,
  },
  fandTypo: {
    textAlign: "left",
    fontFamily: FontFamily.smallText,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
  },
  homePosition: {
    height: 5,
    width: 134,
    left: "50%",
    bottom: 0,
    position: "absolute",
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
    top: 120,
    left: 27,
    lineHeight: 30,
    color: "#3a4c2a",
    textAlign: "left",
    fontFamily: FontFamily.smallText,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
  },
  thumbnailIcon: {
    top: 166,
    left: 24,
    width: 314,
    height: 131,
    borderRadius: Border.br_5xs,
    position: "absolute",
    overflow: "hidden",
  },
  story: {
    top: 336,
    left: 21,
    width: 323,
    position: "absolute",
  },
  field: {
    top: 376,
    height: 56,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    left: 16,
    borderRadius: Border.br_5xs,
    width: 323,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  goal: {
    alignSelf: "stretch",
  },
  field1: {
    height: 48,
    borderRadius: Border.br_5xs,
  },
  inputFieldWithLabel: {
    top: 464,
  },
  label: {
    color: Color.colorGray,
    width: 263,
    lineHeight: 24,
    fontSize: FontSize.smallText_size,
    textAlign: "left",
    fontFamily: FontFamily.smallText,
    fontWeight: "500",
  },
  field2: {
    paddingVertical: Padding.p_xs,
    marginTop: 8,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    width: 323,
    backgroundColor: Color.colorWhite,
  },
  inputFieldWithLabel1: {
    top: 560,
  },
  fand: {
    lineHeight: 28,
    color: Color.colorWhite,
  },
  buttonCompact: {
    top: 661,
    left: 45,
    backgroundColor: Color.colorForestgreen,
    width: 266,
    height: 39,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 0,
    position: "absolute",
  },
  homeIndicator1: {
    marginLeft: -67,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorBlack,
  },
  homeIndicator: {
    marginLeft: -185,
  },
  androidLarge3: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default AndroidLarge2;
