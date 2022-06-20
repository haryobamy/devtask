import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type AppStackList = {
  Dashboard: undefined;
  Portfolio: undefined;
  Stock: undefined;
};

export type AppStackProps<T extends keyof AppStackList> = {
  navigation: NativeStackNavigationProp<AppStackList, T>;
  route: RouteProp<AppStackList, T>;
};

export type AppNavigatorProps = NativeStackNavigationProp<AppStackList>;

export type AppRouteProps<T extends keyof AppStackList> = RouteProp<
  AppStackList,
  T
>;
