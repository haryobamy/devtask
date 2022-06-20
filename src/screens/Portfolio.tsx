import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import TopHeader from "../components/TopHeader";
import { FONT_SCALE } from "../constants/config";
import { COLORS, SIZES } from "../constants";
import { ScrollView } from "react-native-gesture-handler";
import PortfolioCard from "../components/PortfolioCard";
import PieChart from "react-native-pie-chart";

type Props = {
  navigation?: any;
};

const Portfolio = (props: Props) => {
  const { navigation } = props;
  const widthAndHeight = 250;
  const series = [30, 55, 5, 10];
  const sliceColor = ["#7982FA", "#1826D0", "#EEEFFF", "#C2C7FF"];

  return (
    <SafeAreaProvider>
      <TopHeader
        navigation={navigation}
        leftIcon
        containerStyle={{
          marginTop: 0,
        }}
      />

      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: 50,
          paddingHorizontal: SIZES.padding,
          backgroundColor: COLORS.white,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 24 / FONT_SCALE,
            fontWeight: "600",
            color: COLORS.textColor,
            paddingTop: SIZES.padding,
          }}
        >
          Aggressive Portfolio
        </Text>
        {/* slider */}
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginVertical: SIZES.padding,
          }}
        >
          <PieChart
            widthAndHeight={widthAndHeight}
            series={series}
            sliceColor={sliceColor}
            doughnut={true}
            coverRadius={0.6}
            coverFill={"#FFF"}
          />
        </View>

        {/* short card */}
        <View
          style={{
            backgroundColor: COLORS.tableHeader,
            width: SIZES?.padding * 10,
            paddingVertical: SIZES.radius,
            borderRadius: 8,
            paddingHorizontal: SIZES.radius,
          }}
        >
          <Text
            style={{
              fontSize: 16 / FONT_SCALE,
              lineHeight: 25,
              fontWeight: "600",
            }}
          >
            Prospective Outcome
          </Text>
          <Text
            style={{
              fontSize: 14 / FONT_SCALE,
              color: COLORS?.medGrey,
              lineHeight: 25,
            }}
          >
            Risk:6
          </Text>
          <Text
            style={{
              fontSize: 14 / FONT_SCALE,
              color: COLORS?.medGrey,
              lineHeight: 25,
            }}
          >
            Return 10-15%
          </Text>
        </View>
        {/* cards */}
        <PortfolioCard
          label="Large Company Stocks(VOO)"
          values={50}
          color="#1826D0"
        />
        <PortfolioCard label="Medium Company Stocks (IJH)" values={10} />
        <PortfolioCard label="Small Company Stocks (IXUS)" values={5} />
        <PortfolioCard label="Internation Company Stocks (IXUS)" values={30} />

        <TouchableOpacity
          style={{
            backgroundColor: COLORS.btnLight,
            paddingVertical: SIZES.radius,
            alignItems: "center",
            borderRadius: 8,
            marginVertical: SIZES.padding,
          }}
        >
          <Text
            style={{
              fontWeight: "500",
              fontSize: 16 / FONT_SCALE,
              color: COLORS.medGrey,
            }}
          >
            This portfolio is selected
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaProvider>
  );
};

export default Portfolio;

const styles = StyleSheet.create({});
