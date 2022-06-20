import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants";
import { FONT_SCALE } from "../constants/config";

type Props = {
  navigation?: any;
  label?: String;
  value?: String;
  status: String;
};

const TransactionCards = (props: Props) => {
  const { navigation, label, value, status } = props;
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: SIZES.radius,
        paddingVertical: SIZES.padding,
      }}
    >
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <FontAwesome name="check-circle" size={24} color={COLORS.primary} />
        <View
          style={{
            marginLeft: 10,
          }}
        >
          <Text
            style={{
              marginBottom: 5,
            }}
          >
            {label}
          </Text>
          <Text
            style={{
              fontWeight: "300",
              fontSize: 13 / FONT_SCALE,
            }}
          >
            {status}
          </Text>
        </View>
      </View>
      <Text>${value}</Text>
    </View>
  );
};

export default TransactionCards;

const styles = StyleSheet.create({});
