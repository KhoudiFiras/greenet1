import * as React from "react";
import { Text, StyleSheet, View, Pressable, TextInput } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import BottomTabBar1 from "../components/BottomTabBar";
import { FontFamily, FontSize, Padding, Color, Border } from "../GlobalStyles";

const AndroidLarge2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.androidLarge1}>
      <View style={[styles.inputFieldWithLabel, styles.inputLayout1]}>
        <Text style={[styles.title, styles.titleTypo]}> Title</Text>
      </View>
      <View style={[styles.inputFieldWithLabel1, styles.inputLayout1]}>
        <Text style={[styles.title, styles.titleTypo]}>interest earnings</Text>
      </View>
      <View style={[styles.inputFieldWithLabel2, styles.inputLayout1]}>
        <Text style={[styles.title, styles.titleTypo]}>Story</Text>
      </View>
      <View style={[styles.inputFieldWithLabel3, styles.inputLayout1]}>
        <Text style={[styles.title, styles.titleTypo]}>compain image</Text>
      </View>
      <View style={styles.inputFieldWithLabel4}>
        <Text style={[styles.title, styles.titleTypo]}>
          green credits to tokenize
        </Text>
      </View>
      <View style={[styles.buttonSecondary, styles.buttonShadowBox]}>
        <Text style={[styles.tokenize, styles.titleTypo]}>{`tokenize
`}</Text>
      </View>
      <View style={[styles.inputFieldWithLabel5, styles.inputLayout1]}>
        <Text style={[styles.title, styles.titleTypo]}>Goal</Text>
      </View>
      <Pressable
        style={[styles.buttonSecondary1, styles.buttonShadowBox]}
        onPress={() => navigation.navigate("AndroidLarge111")}
      >
        <Text style={[styles.tokenize, styles.titleTypo]}>{`Submit
`}</Text>
      </Pressable>
      <Image
        style={styles.captureDcran20240624150}
        contentFit="cover"
        source={require("../assets/capture-dcran-20240624-150646-2.png")}
      />
      <View style={styles.pngClipartComputerIconsUse} />
      <Image
        style={styles.laPersonne2Icon}
        contentFit="cover"
        source={require("../assets/lapersonne-2.png")}
      />
      <Image
        style={styles.captureDcran20240624150}
        contentFit="cover"
        source={require("../assets/capture-dcran-20240624-150646-2.png")}
      />
      <View style={styles.pngClipartComputerIconsUse} />
      <Image
        style={styles.laPersonne2Icon}
        contentFit="cover"
        source={require("../assets/lapersonne-2.png")}
      />
      <Image
        style={styles.captureDcran20240624150}
        contentFit="cover"
        source={require("../assets/capture-dcran-20240624-150646-2.png")}
      />
      <View style={styles.pngClipartComputerIconsUse} />
      <Image
        style={styles.laPersonne2Icon}
        contentFit="cover"
        source={require("../assets/lapersonne-2.png")}
      />
      <BottomTabBar1 />
      <TextInput style={[styles.inputField, styles.inputLayout]} />
      <View style={styles.inputField1} />
      <View style={[styles.inputField2, styles.inputLayout]} />
      <View style={[styles.inputField3, styles.inputLayout]} />
      <View style={[styles.inputField4, styles.inputLayout]} />
      <View style={[styles.inputField5, styles.inputLayout]} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputLayout1: {
    width: 323,
    position: "absolute",
  },
  titleTypo: {
    textAlign: "left",
    fontFamily: FontFamily.smallText,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.smallText_size,
  },
  buttonShadowBox: {
    paddingBottom: Padding.p_sm,
    paddingTop: Padding.p_13xl,
    paddingHorizontal: Padding.p_5xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: 161,
    backgroundColor: Color.colorGreen,
    borderRadius: Border.br_5xs,
    shadowOpacity: 1,
    elevation: 2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    position: "absolute",
  },
  inputLayout: {
    height: 47,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    alignItems: "center",
    borderRadius: Border.br_5xs,
    width: 323,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  title: {
    alignSelf: "stretch",
    color: Color.colorBlack,
  },
  inputFieldWithLabel: {
    top: 102,
    left: 18,
  },
  inputFieldWithLabel1: {
    top: 194,
    left: 18,
  },
  inputFieldWithLabel2: {
    top: 291,
    height: 32,
    left: 18,
  },
  inputFieldWithLabel3: {
    top: 381,
    left: 14,
  },
  inputFieldWithLabel4: {
    top: 582,
    width: 202,
    height: 89,
    left: 15,
    position: "absolute",
  },
  tokenize: {
    color: Color.colorWhite,
  },
  buttonSecondary: {
    left: 176,
    height: 36,
    top: 617,
    paddingBottom: Padding.p_sm,
    paddingTop: Padding.p_13xl,
    paddingHorizontal: Padding.p_5xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: 161,
    backgroundColor: Color.colorGreen,
    borderRadius: Border.br_5xs,
    shadowOpacity: 1,
    elevation: 2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
  },
  inputFieldWithLabel5: {
    top: 478,
    left: 18,
  },
  buttonSecondary1: {
    top: 683,
    left: 105,
    height: 34,
    paddingBottom: Padding.p_sm,
    paddingTop: Padding.p_13xl,
    paddingHorizontal: Padding.p_5xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: 161,
    backgroundColor: Color.colorGreen,
    borderRadius: Border.br_5xs,
    shadowOpacity: 1,
    elevation: 2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
  },
  captureDcran20240624150: {
    top: 59,
    width: 154,
    height: 27,
    left: 18,
    position: "absolute",
  },
  pngClipartComputerIconsUse: {
    top: 57,
    left: 315,
    width: 2,
    height: 2,
    position: "absolute",
  },
  laPersonne2Icon: {
    top: 53,
    left: 299,
    width: 33,
    height: 33,
    position: "absolute",
  },
  inputField: {
    top: 137,
    left: 18,
  },
  inputField1: {
    width: 144,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    alignItems: "center",
    height: 36,
    borderRadius: Border.br_5xs,
    top: 617,
    left: 15,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  inputField2: {
    top: 512,
    left: 15,
  },
  inputField3: {
    top: 415,
    left: 18,
  },
  inputField4: {
    top: 315,
    left: 15,
  },
  inputField5: {
    top: 228,
    left: 14,
  },
  androidLarge1: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default AndroidLarge2;
