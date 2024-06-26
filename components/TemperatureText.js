import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const TemperatureText = () => {
  return <Text style={styles.temperature}>temperature</Text>;
};

const styles = StyleSheet.create({
  temperature: {
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

export default TemperatureText;
