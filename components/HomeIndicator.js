import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const HomeIndicator = () => {
  return <View style={styles.homeIndicator} />;
};

const styles = StyleSheet.create({
  homeIndicator: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorBlack,
    width: 134,
    height: 5,
  },
});

export default HomeIndicator;
