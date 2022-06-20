import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants";

interface IProps {
  rightIcon?: boolean;
  leftIcon?: boolean;
  onLeftIconPress?: () => void;
  onRightIconPress?: () => void;
  navigation?: any;
  containerStyle?: object;
}

const TopHeader = (props: IProps) => {
  const {
    navigation,
    // heading,
    onLeftIconPress,
    onRightIconPress,
    leftIcon,
    rightIcon,
    containerStyle,
  } = props;
  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity
        activeOpacity={0.9}
        style={[styles.leftIconContainer]}
        onPress={() => {
          if (onLeftIconPress) {
            onLeftIconPress();
          } else {
            if (leftIcon) {
              navigation.goBack();
            } else {
              null;
            }
          }
        }}
      >
        {leftIcon && <Entypo name="chevron-left" size={20} color="black" />}
        {/* <Text style={[styles.text, !rightIcon ? styles.headingAdjust : null]}>
          {heading}
        </Text> */}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.rightIconContainer}
        // onPress={onRightIconPress}
      >
        {/* <FontAwesome5 name={rightIcon} color={COLORS.light} size={25} /> */}
      </TouchableOpacity>
    </View>
  );
};

export default TopHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingTop: SIZES?.padding * 2,
    paddingBottom: SIZES?.radius,
  },
  backgroundGradient: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
  },
  leftIconContainer: {
    paddingLeft: 10,
    paddingRight: 5,
    // paddingVertical: 20,
    flexDirection: "row",
  },
  rightIconContainer: {
    paddingRight: 24,
    paddingLeft: 5,
  },
  text: {
    color: COLORS.black,

    fontSize: 20,
    marginLeft: 10,
    fontWeight: "500",
  },
  headingAdjust: {
    marginRight: 10,
  },
});
