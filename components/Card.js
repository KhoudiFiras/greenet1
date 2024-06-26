import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { FontSize, Border, FontFamily, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Card = ({ thumbnail, compain2, propTop, propLeft }) => {
  const cardStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
    };
  }, [propTop, propLeft]);

  return (
    <View style={[styles.card, cardStyle]}>
      <Image
        style={styles.thumbnailIcon}
        contentFit="cover"
        source={thumbnail}
      />
      <View style={styles.title}>
        <Text
          style={[styles.compain2, styles.compain2FlexBox]}
          numberOfLines={1}
        >
          {compain2}
        </Text>
        <Text
          style={[styles.description, styles.compain2FlexBox]}
          numberOfLines={2}
        >
          Description
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  compain2FlexBox: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    lineHeight: 20,
    fontSize: FontSize.size_sm,
    overflow: "hidden",
    width: 156,
  },
  thumbnailIcon: {
    borderRadius: Border.br_5xs,
    height: 156,
    overflow: "hidden",
    width: 156,
  },
  compain2: {
    fontWeight: "500",
    fontFamily: FontFamily.smallText,
    color: Color.colorBlack,
  },
  description: {
    fontFamily: FontFamily.interRegular,
    color: Color.colorGray_100,
  },
  title: {
    alignSelf: "stretch",
    marginTop: 8,
  },
  card: {
    position: "absolute",
    top: 207,
    left: 188,
    width: 156,
  },
});

export default Card;
