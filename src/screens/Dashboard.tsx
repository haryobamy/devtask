import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Animated,
  Dimensions,
} from "react-native";
import React, { useRef } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import TopHeader from "../components/TopHeader";
import { COLORS, SIZES } from "../constants";
import { FONT_SCALE } from "../constants/config";
import {
  Entypo,
  FontAwesome,
  Ionicons,
  Fontisto,
  FontAwesome5,
} from "@expo/vector-icons";
import TransactionCards from "../components/TransactionCards";

const { width, height } = Dimensions.get("window");

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

type Props = {
  navigation?: any;
  PortfolioCards?: () => void;
};

const PortfolioCards = (props: any) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: SIZES.padding * 0.8,
        alignItems: "center",
      }}
      onPress={props.onPress}
    >
      <Text
        style={{
          fontSize: 16 / FONT_SCALE,
          color: COLORS.medGrey,
        }}
      >
        {props.label}
      </Text>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Text
          style={{
            fontSize: 16 / FONT_SCALE,
            color: COLORS.primary,
          }}
        >
          {props?.value}
        </Text>
        <Entypo name="chevron-right" size={20} color={COLORS.medGrey} />
      </View>
    </TouchableOpacity>
  );
};

const Dashboard = (props: Props) => {
  const { navigation } = props;

  const scrollX = useRef(new Animated.Value(0)).current;
  const dotPosition = Animated.divide(scrollX, width);

  return (
    <SafeAreaProvider
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      <TopHeader
        navigation={navigation}
        leftIcon
        containerStyle={{
          marginTop: 0,
        }}
      />
      <ScrollView
        contentContainerStyle={{
          //   paddingHorizontal: SIZES.radius,
          paddingVertical: SIZES.radius,
          flexGrow: 1,
          paddingBottom: 50,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 14 / FONT_SCALE,
            fontWeight: "400",
          }}
        >
          Family Plus Investment
        </Text>
        {/* balance section */}
        <View>
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
              <View
                style={{
                  justifyContent: "center",
                  marginVertical: SIZES.radius,
                  width,
                  paddingVertical: 15,
                }}
              >
                <View
                  style={{
                    backgroundColor: COLORS.primary,
                    paddingVertical: 15,
                    marginHorizontal: SIZES.radius,
                    borderRadius: 8,
                  }}
                >
                  <Text
                    style={{
                      color: COLORS.white,
                      fontWeight: "600",
                      fontSize: 24 / FONT_SCALE,
                      letterSpacing: 3,
                      textAlign: "center",
                    }}
                  >
                    $4,500.00
                  </Text>
                  <Text
                    style={{
                      color: COLORS.white,
                      fontWeight: "400",
                      fontSize: 12 / FONT_SCALE,

                      textAlign: "center",
                    }}
                  >
                    Total Balance
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-around",

                      marginHorizontal: SIZES.padding * 3,
                      marginVertical: SIZES.radius,
                    }}
                  >
                    <TouchableOpacity
                      style={{
                        backgroundColor: COLORS?.white,
                        paddingHorizontal: SIZES.radius,
                        borderRadius: 5,
                        paddingVertical: SIZES.base,
                      }}
                    >
                      <Text>Add Money</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        backgroundColor: COLORS?.white,
                        paddingHorizontal: SIZES.radius,
                        borderRadius: 5,
                        paddingVertical: SIZES.base,
                      }}
                    >
                      <Text>Withdraw</Text>
                    </TouchableOpacity>
                  </View>
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
        </View>

        <View style={styles.action}>
          <TouchableOpacity>
            <View style={styles.actionBtn}>
              <View style={[styles.icon, { backgroundColor: "#F2E1FF" }]}>
                <Ionicons
                  name="arrow-forward-outline"
                  size={24}
                  color={COLORS.primary}
                />
              </View>
              <Text style={styles.actionText}>FamilyPlus Savings</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.actionBtn}>
              <View style={[styles.icon, { backgroundColor: "#F2E1FF" }]}>
                <Ionicons
                  name="arrow-forward-outline"
                  size={24}
                  color={COLORS.primary}
                />
              </View>
              <Text style={styles.actionText}>Invest in Stocks</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.actionBtn}>
              <View style={[styles.icon, { backgroundColor: "#F2E1FF" }]}>
                <Ionicons
                  name="arrow-forward-outline"
                  size={24}
                  color={COLORS.primary}
                />
              </View>
              <Text style={styles.actionText}>Early for kids</Text>
            </View>
          </TouchableOpacity>
        </View>
        {/* potfol card */}
        <View
          style={{
            marginHorizontal: SIZES.padding * 0.8,
            backgroundColor: "#F4F4F4",
            paddingHorizontal: SIZES.radius,
            paddingVertical: SIZES.radius,
            marginVertical: SIZES.radius,
            borderRadius: 8,
          }}
        >
          <PortfolioCards
            label="Portfolio"
            value="Aggressive"
            onPress={() => navigation.navigate("Portfolio")}
          />
          <PortfolioCards label="Round-Up Settings" value="Automatic" />
          <PortfolioCards label="Recurring" value="$20/Monthly" />
          <PortfolioCards label="Beneficiary" value="1 Child" />
          <PortfolioCards label="One-time Investment" value="" />
        </View>

        <View
          style={{
            marginHorizontal: SIZES.padding * 0.8,
            backgroundColor: "#F4F4F4",
            paddingHorizontal: SIZES.radius,
            paddingVertical: SIZES.radius,
            marginVertical: SIZES.radius,
            borderRadius: 8,
          }}
        >
          <Text
            style={{
              fontWeight: "400",
              fontSize: 16 / FONT_SCALE,
            }}
          >
            Recent Transactions
          </Text>

          <TransactionCards
            label="One Time Investment"
            value="20"
            status={"Processing"}
          />
          <TransactionCards
            label="Withdrawal"
            value="8.00"
            status={"Processing"}
          />
          <TransactionCards
            label="Round-Up Investment"
            value="10.36"
            status={"Processing"}
          />
          <TouchableOpacity
            style={{
              backgroundColor: COLORS?.primary,
              justifyContent: "center",
              alignItems: "center",
              paddingVertical: SIZES.radius,
              borderRadius: 8,
            }}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "500",
              }}
            >
              View all
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: COLORS.tableHeader,
            marginHorizontal: SIZES.padding * 0.8,
          }}
        >
          <View
            style={{
              paddingHorizontal: SIZES.padding * 3,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 18 / FONT_SCALE,
                lineHeight: 25,
                fontWeight: "400",
                color: COLORS.medGrey,
              }}
            >
              Hypothetical projection of
              <Text
                style={{
                  fontWeight: "500",
                  color: COLORS.black,
                }}
              >
                {" "}
                $12000 at age 16
              </Text>
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: SIZES.radius,
              paddingVertical: SIZES.padding,
            }}
          >
            <Text
              style={{
                color: COLORS.medGrey,
              }}
            >
              Investment $550
            </Text>
            <Text
              style={{
                color: COLORS.medGrey,
              }}
            >
              Return $12,000
            </Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: "#FBFAFA",
            marginVertical: SIZES.padding * 2,
            marginHorizontal: SIZES.padding * 0.8,
            borderRadius: 8,
            paddingVertical: SIZES.radius,
            paddingHorizontal: SIZES.radius,
          }}
        >
          <Text
            style={{
              fontSize: 18 / FONT_SCALE,
              fontWeight: "500",
            }}
          >
            Grow your Knowledge
          </Text>
          <View style={styles.faq}>
            <View style={styles.iconContainer}>
              <FontAwesome5 name="users" size={12} color={COLORS.primary} />
            </View>

            <Text style={styles.faqText}>What is Family Plus?</Text>
          </View>
          <View style={styles.faq}>
            <View style={styles.iconContainer}>
              <Fontisto name="redo" size={16} color={COLORS.primary} />
            </View>

            <Text style={styles.faqText}>How do Round-Ups work?</Text>
          </View>
          <View style={styles.faq}>
            <View style={styles.iconContainer}>
              <Fontisto name="wallet" size={12} color={COLORS.primary} />
            </View>

            <Text style={styles.faqText}>What is Family savings</Text>
          </View>
          <View style={styles.faq}>
            <View style={styles.iconContainer}>
              <FontAwesome5
                name="money-bill"
                size={12}
                color={COLORS.primary}
              />
            </View>

            <Text style={styles.faqText}>How can i Withdraw my money?</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  dotCon: {
    flexDirection: "row",
    marginBottom: SIZES.padding,
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
  actionBtn: {
    alignItems: "center",
  },
  action: {
    marginVertical: 10,
    paddingHorizontal: SIZES.padding * 0.8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    backgroundColor: "#F2E1FF",
    alignItems: "center",
    justifyContent: "center",
  },
  actionText: {
    // fontFamily: "DM_SANS_REG",
    fontSize: 14,
    lineHeight: 18,
    marginTop: 6,
    color: "#150F2E",
  },
  faq: {
    flexDirection: "row",
    paddingVertical: SIZES.radius,
  },
  faqText: {
    marginLeft: 15,
    fontSize: 16 / FONT_SCALE,
    color: COLORS.medGrey,
  },
  iconContainer: {
    width: 25,
    height: 25,
    borderRadius: 25 / 2,
    backgroundColor: COLORS.btnLight,
    alignItems: "center",
    justifyContent: "center",
  },
});
