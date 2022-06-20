import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
  primary: "#7F18D0",
  btnLight: "#C2C7FF",
  textColor: "#080D45",
  blue: "#1826D0",
  secondary: "#5D2DFD", // Dark purple
  white: "#fff",
  black: "#000000",
  red: "#F9A8BA",
  overlay: "rgba(0,0,0,0.7)",
  tableHeader: "#F5F5F7",
  tableBorder: "#DEDEDE",
  danger: "#ff0000",
  activeSwitch: "#00B419",
  inActiveSwitch: "#000",
  medGrey: "#6C6C6C",
  green: "#2AC940",
  darkGreen: "#16A029",
  transparentBlack: "rgba(0, 0, 0, 0.8)",
};
export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,

  // font sizes
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,
  body5: 12,

  // app dimensions
  width,
  height,
};
export const FONTS = {
  h1: {
    // fontFamily: 'Roboto-Black',
    fontSize: SIZES.h1,
    lineHeight: 36,
  },
  h2: {
    // fontFamily: 'Roboto-Bold',
    fontSize: SIZES.h2,
    lineHeight: 30,
  },
  h3: {
    // fontFamily: 'Roboto-Bold',
    fontSize: SIZES.h3,
    lineHeight: 22,
  },
  h4: {
    // fontFamily: 'Roboto-Bold',
    fontSize: SIZES.h4,
    lineHeight: 22,
  },
  body1: {
    // fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body1,
    lineHeight: 36,
  },
  body2: {
    // fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body2,
    lineHeight: 30,
  },
  body3: {
    // fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body3,
    lineHeight: 22,
  },
  body4: {
    // fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body4,
    lineHeight: 22,
  },
  body5: {
    // fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body5,
    lineHeight: 22,
  },
};
const { fontScale: FONT_SCALE } = Dimensions.get("window");

const appTheme = { COLORS, SIZES, FONTS, FONT_SCALE };

export default appTheme;
