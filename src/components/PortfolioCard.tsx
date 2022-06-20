import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../constants";
import CircularProgress from "react-native-circular-progress-indicator";
import { Entypo } from "@expo/vector-icons";
import { FONT_SCALE } from "../constants/config";
import Svg, { Circle, G } from "react-native-svg";

type Props = {
  label?: string;
  values?: any;
  percentage?: any;
  radius?: any;
  strokeWidth?: any;
  duration?: any;
  color?: any;
  delay?: any;
  textColor?: any;
  max?: any;
};

const PortfolioCard = (props: Props) => {
  const {
    label,
    values,
    percentage = 75,
    radius = 20,
    strokeWidth = 10,
    duration = 500,
    color = "green",
    delay = 0,
    textColor,
    max = 100,
  } = props;

  const halfCircle = radius + strokeWidth;
  const circleCircumference = 2 * Math.PI * radius;

  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.tableHeader,
        paddingVertical: SIZES.padding * 0.5,
        marginVertical: SIZES.base,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: SIZES.base,
        borderRadius: 8,
      }}
    >
      <Text style={{ fontWeight: "500", fontSize: 15 / FONT_SCALE }}>
        {label}
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {/* <View
          style={{
            backgroundColor: "white",
          }}
        >
          <Svg
            width={radius * 2}
            height={radius * 2}
            viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}
          >
            <G rotation="-90" origin={`${halfCircle}  ${halfCircle}`}>
              <Circle
                cx="50%"
                cy="50%"
                stroke={color}
                strokeWidth={strokeWidth}
                r={radius}
                fill="transparent"
                strokeOpacity={0.2}
              />
              <Circle
                cx="50%"
                cy="50%"
                stroke={color}
                strokeWidth={strokeWidth}
                r={radius}
                fill="transparent"
                strokeOpacity={circleCircumference}
                strokeDashoffset={circleCircumference / 2}
                strokeLinecap="round"
              />
            </G>
          </Svg>
        </View> */}
        <CircularProgress
          value={50}
          radius={22}
          duration={500}
          progressValueColor={"blue"}
          maxValue={100}
          //   title={"50%"}
          valueSuffix={"%"}
          titleColor={"blue"}
          titleStyle={{ fontWeight: "bold", fontSize: 9 / FONT_SCALE }}
          progressValueStyle={{ fontWeight: "100", color: "blue" }}
        />
        <Entypo
          name="chevron-right"
          size={20}
          color={COLORS.medGrey}
          style={{
            marginLeft: 5,
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default PortfolioCard;

const styles = StyleSheet.create({});
