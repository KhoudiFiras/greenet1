import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const LuminosityRateText = () => {
  return <Text style={styles.luminosityRate}>luminosity rate</Text>;
};

const styles = StyleSheet.create({
  luminosityRate: {
    fontSize: FontSize.size_xl,
    lineHeight: 30,
    fontWeight: "500",
    fontFamily: FontFamily.smallText,
    color: Color.colorBlack,
    textAlign: "left",
    width: 188,
    height: 110,
  },
});

export default LuminosityRateText;
