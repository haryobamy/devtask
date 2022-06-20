import React, { useRef } from "react";
import {
  Animated,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SIZES } from "../constants";
import { FONT_SCALE } from "../constants/config";
// import {SIZES} from '../Constants';
// import {FONT_SCALE} from '../Constants/config';
// import {OnBoarding1, OnBoarding2, OnBoarding3} from '../Constants/SVG';
// import {AuthHeader, Button} from '../components';
// import IMAGES from '../helpers/ImageImport';

const flatlistData = [
  {
    // image: <OnBoarding1 />,
    line1: "3KLE invests your money intelligently in stocks",
    line2:
      "Build, perserve and manage your family wealth with stocks investment",
  },
  {
    // image: <OnBoarding2 />,
    line1: "Flexible Packing &  Moving Services ",
    line2:
      "Moving your entire home is easy, reliable, and affordable now. Get pre-move survey & instant quotes for shipment of any size.",
  },
  {
    // image: <OnBoarding3 />,
    line1: "Safe Door-to-Door Delivery",
    line2:
      "Get door-to door timely pick-up & delivery services hassle-free! Track your shipment real-time and know exactly where your items are.",
  },
];
const { width, height } = Dimensions.get("window");

const Stock = (props) => {
  const { navigation } = props;
  const scrollX = useRef(new Animated.Value(0)).current;
  const dotPosition = Animated.divide(scrollX, width);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <ScrollView
        style={{ flexGrow: 1 }}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View style={styles.container}>
          <View style={[styles.flatlistCon, { flex: 1 }]}>
            <Animated.FlatList
              horizontal
              pagingEnabled
              decelerationRate="fast"
              showsHorizontalScrollIndicator={false}
              data={flatlistData}
              keyExtractor={(_, index) => `${index}`}
              onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                {
                  useNativeDriver: false,
                }
              )}
              renderItem={({ item }) => (
                <View style={styles.flatlistView}>
                  <View style={styles.flatlistImgCon}>
                    <View
                      style={{
                        alignItems: "center",
                        justifyContent: "center",
                        // paddingTop: SIZES.padding,
                      }}
                    >
                      {item?.image}
                    </View>

                    {/* <Image
                      style={{width, height: '100%'}}
                      source={item.image}
                    /> */}
                  </View>
                  <View
                    style={{
                      paddingHorizontal: SIZES?.padding,
                    }}
                  >
                    <Text adjustsFontSizeToFit style={styles.line1}>
                      {item.line1}
                    </Text>
                    <Text adjustsFontSizeToFit style={styles.line2}>
                      {item.line2}
                    </Text>
                  </View>
                </View>
              )}
            />

            <Animated.View style={styles.dotCon}>
              {flatlistData.map((_, index) => {
                const bgColor = dotPosition.interpolate({
                  inputRange: [index - 1, index, index + 1],
                  outputRange: ["#CED9E8", "#19145C", "#CED9E8"],
                  extrapolate: "clamp",
                });

                return (
                  <Animated.View
                    key={index.toString()}
                    style={{ ...styles.dots, backgroundColor: bgColor }}
                  />
                );
              })}
            </Animated.View>
            <View style={styles.btnCon}>
              <TouchableOpacity
                style={{
                  alignItems: "center",
                  backgroundColor: COLORS.primary,
                  paddingVertical: SIZES.radius,
                  borderRadius: 6,
                }}
                onPress={() => {
                  navigation.navigate("Dashboard");
                }}
              >
                <Text style={[styles.signinText, { color: COLORS.white }]}>
                  Get Started
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Stock;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingBottom: 15,
  },
  flatlistCon: {
    // flex: 1,
    // justifyContent: 'flex-start',
  },
  flatlistView: {
    width,
    paddingVertical: 15,
  },
  flatlistImgCon: {
    height: height * 0.43,
  },
  line1: {
    fontWeight: "700",
    // fontFamily: 'DM_SANS_BOLD',
    color: "#19145C",
    fontSize: 19 / FONT_SCALE,
    lineHeight: 28,
    textAlign: "center",
    marginBottom: SIZES.base * 2,
  },
  line2: {
    fontWeight: "400",
    // fontFamily: 'DM_SANS_BOLD',
    color: "#19145C",
    fontSize: 18 / FONT_SCALE,
    lineHeight: 28,
    textAlign: "center",
  },
  dotCon: {
    flexDirection: "row",
    marginBottom: SIZES.padding * 6,
    justifyContent: "center",
    alignItems: "center",
  },
  dots: {
    height: 8,
    width: 8,
    borderRadius: 4,
    marginHorizontal: 7,
  },
  btnCon: {
    paddingHorizontal: 15,
  },
  signinBtn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 15,
  },
  signinText: {
    // fontFamily: 'DM_SANS_REG',
    fontSize: 16,
    lineHeight: 22,
  },
  footerCon: {
    paddingHorizontal: 15,
  },
  footerText: {
    // fontFamily: 'DM_SANS_REG',
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 16,
    textAlign: "center",
  },
});
