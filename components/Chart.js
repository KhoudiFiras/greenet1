import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Chart = () => {
  return (
    <View style={styles.chart}>
      <Text style={styles.temperature}>temperature</Text>
      <Image
        style={[styles.chartChild, styles.chartChildLayout]}
        contentFit="cover"
        source={require("../assets/vector-1.png")}
      />
      <Image
        style={[styles.chartItem, styles.chartChildLayout]}
        contentFit="cover"
        source={require("../assets/vector-1.png")}
      />
      <Image
        style={[styles.chartInner, styles.chartChildLayout]}
        contentFit="cover"
        source={require("../assets/vector-1.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.chartChildLayout]}
        contentFit="cover"
        source={require("../assets/vector-1.png")}
      />
      <Image
        style={[styles.chartChild1, styles.chartChildLayout]}
        contentFit="cover"
        source={require("../assets/vector-1.png")}
      />
      <Image
        style={[styles.chartChild2, styles.chartChildLayout]}
        contentFit="cover"
        source={require("../assets/vector-1.png")}
      />
      <Text style={[styles.text, styles.textTypo1]}>50</Text>
      <Text style={[styles.text1, styles.textTypo1]}>40</Text>
      <Text style={[styles.text2, styles.textTypo1]}>30</Text>
      <Text style={[styles.text3, styles.textTypo1]}>20</Text>
      <Text style={[styles.text4, styles.textTypo1]}>10</Text>
      <Text style={[styles.date, styles.textTypo]}>date</Text>
      <Text style={[styles.text5, styles.textTypo]}>30</Text>
      <Text style={[styles.text6, styles.textTypo]}>29</Text>
      <Text style={[styles.text7, styles.textTypo]}>28</Text>
      <Text style={[styles.text8, styles.textTypo]}>27</Text>
      <Text style={[styles.text9, styles.textTypo]}>26</Text>
      <Text style={[styles.text10, styles.textTypo]}>25</Text>
      <Text style={[styles.text11, styles.textTypo]}>24</Text>
      <Image
        style={styles.chartChild3}
        contentFit="cover"
        source={require("../assets/vector-8.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  chartChildLayout: {
    width: 311,
    maxHeight: "100%",
    left: 16,
    position: "absolute",
  },
  textTypo1: {
    color: Color.colorGray,
    fontFamily: FontFamily.interRegular,
    lineHeight: 14,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    left: 16,
    position: "absolute",
  },
  textTypo: {
    top: 244,
    color: Color.colorGray,
    fontFamily: FontFamily.interRegular,
    lineHeight: 14,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    position: "absolute",
  },
  temperature: {
    top: 16,
    fontSize: FontSize.size_sm,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorBlack,
    textAlign: "left",
    left: 16,
    position: "absolute",
  },
  chartChild: {
    top: 60,
  },
  chartItem: {
    top: 96,
  },
  chartInner: {
    top: 132,
  },
  vectorIcon: {
    top: 168,
  },
  chartChild1: {
    top: 204,
  },
  chartChild2: {
    top: 240,
  },
  text: {
    top: 64,
  },
  text1: {
    top: 100,
  },
  text2: {
    top: 136,
  },
  text3: {
    top: 172,
  },
  text4: {
    top: 208,
  },
  date: {
    left: 16,
    top: 244,
  },
  text5: {
    left: 310,
  },
  text6: {
    left: 271,
  },
  text7: {
    left: 232,
  },
  text8: {
    left: 194,
  },
  text9: {
    left: 155,
  },
  text10: {
    left: 116,
  },
  text11: {
    left: 77,
  },
  chartChild3: {
    top: 83,
    left: 61,
    width: 255,
    height: 83,
    position: "absolute",
  },
  chart: {
    top: 133,
    left: 8,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_100,
    borderWidth: 1,
    width: 343,
    height: 267,
    overflow: "hidden",
    position: "absolute",
  },
});

export default Chart;
