import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";

const Frame = ({ style }) => {
  return (
    <View style={[styles.frame, style, styles.frameLayout2]}>
      <View style={styles.frame1}>
        <View style={styles.profile}>
          <Image
            style={styles.avatarIcon}
            contentFit="cover"
            source={require("../assets/avatar.png")}
          />
          <View style={styles.action}>
            <Text style={styles.editProfileImage} numberOfLines={1}>
              Edit profile image
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.frame2}>
        <View style={styles.tabs}>
          <View style={styles.frame3}>
            <View style={[styles.homeIndicator, styles.homePosition]}>
              <View style={[styles.homeIndicator1, styles.homePosition]} />
            </View>
          </View>
          <View style={styles.frame4}>
            <View style={[styles.frame5, styles.frameLayout]} />
            <View style={styles.frame6}>
              <View style={[styles.frame7, styles.frameLayout]} />
              <View style={[styles.frame8, styles.frameLayout]}>
                <View style={styles.tabBarItem2}>
                  <Image
                    style={styles.iconhome}
                    contentFit="cover"
                    source={require("../assets/iconhome.png")}
                  />
                  <Text style={[styles.home, styles.homeTypo]}>Home</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.frame9, styles.frame9Layout]}>
        <View style={[styles.information, styles.frame9Layout]}>
          <View style={[styles.name, styles.nameSpaceBlock]}>
            <Text style={[styles.name1, styles.name1Typo]}>Name</Text>
            <View style={[styles.info, styles.infoFlexBox]}>
              <Text style={[styles.othmanBoularis, styles.name1Typo]}>
                othman boularis
              </Text>
            </View>
          </View>
          <View style={[styles.name, styles.nameSpaceBlock]}>
            <Text style={[styles.name1, styles.name1Typo]}>Email</Text>
            <View style={styles.infoFlexBox}>
              <Text style={[styles.othmanBoularis, styles.name1Typo]}>
                othmanboularis@gmail.com
              </Text>
            </View>
          </View>
          <View style={[styles.name, styles.nameSpaceBlock]}>
            <Text style={[styles.name1, styles.name1Typo]}>Balance</Text>
            <View style={[styles.info, styles.infoFlexBox]}>
              <Text style={[styles.othmanBoularis, styles.name1Typo]}>
                10000 HBR
              </Text>
            </View>
          </View>
          <View style={styles.nameSpaceBlock}>
            <Text style={[styles.name1, styles.name1Typo]}>Token :</Text>
          </View>
          <View style={[styles.name, styles.nameSpaceBlock]}>
            <Text style={[styles.name1, styles.name1Typo]}>SREC-T</Text>
            <View style={[styles.info, styles.infoFlexBox]}>
              <Text style={[styles.othmanBoularis, styles.name1Typo]}>
                17 Token
              </Text>
            </View>
          </View>
          <View style={[styles.name, styles.nameSpaceBlock]}>
            <Text style={[styles.name1, styles.name1Typo]}>GC-T</Text>
            <View style={[styles.info, styles.infoFlexBox]}>
              <Text style={[styles.othmanBoularis, styles.name1Typo]}>
                5 Token
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  frame9Layout: {
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
  avatarIcon: {
    width: 64,
    height: 64,
    overflow: "hidden",
  },
  editProfileImage: {
    alignSelf: "stretch",
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorDodgerblue,
    textAlign: "center",
    lineHeight: 20,
    fontSize: FontSize.size_sm,
    overflow: "hidden",
  },
  action: {
    marginTop: 12,
  },
  profile: {
    marginLeft: -60,
    justifyContent: "center",
    alignItems: "center",
    left: "50%",
    top: 0,
    position: "absolute",
  },
  frame1: {
    left: 147,
    width: 120,
    height: 96,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  homeIndicator1: {
    marginLeft: -66.5,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorBlack,
    width: 134,
    height: 5,
  },
  homeIndicator: {
    marginLeft: -187.5,
    height: 8,
    width: 375,
  },
  frame3: {
    top: 1,
    height: 47,
    width: 375,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  frame5: {
    left: 268,
    top: 8,
    width: 76,
    height: 49,
  },
  frame7: {
    height: 65,
    left: 0,
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
  tabBarItem2: {
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_11xs,
    marginLeft: -38,
    alignItems: "center",
    left: "50%",
    top: 0,
    position: "absolute",
  },
  frame8: {
    left: 126,
    top: 8,
    width: 76,
    height: 49,
  },
  frame6: {
    width: 202,
    height: 65,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  frame4: {
    top: -8,
    left: 23,
    width: 344,
    height: 65,
    position: "absolute",
    overflow: "hidden",
  },
  tabs: {
    right: 1,
    left: 0,
    height: 49,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  frame2: {
    top: 603,
    left: 19,
    width: 376,
    height: 49,
    position: "absolute",
    overflow: "hidden",
  },
  name1: {
    width: 100,
    fontFamily: FontFamily.smallText,
    fontWeight: "500",
    textAlign: "left",
  },
  othmanBoularis: {
    fontFamily: FontFamily.interRegular,
    width: 211,
  },
  info: {
    flex: 1,
  },
  name: {
    width: 375,
  },
  information: {
    left: 39,
    top: 0,
  },
  frame9: {
    top: 165,
    left: 0,
    overflow: "hidden",
    width: 414,
  },
  frame: {
    height: 652,
    overflow: "hidden",
  },
});

export default Frame;
