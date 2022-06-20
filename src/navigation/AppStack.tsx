import { AppStackList } from "../Routes";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from "../screens/Dashboard";
import Stock from "../screens/Stock";

const Stack = createNativeStackNavigator<AppStackList>();

const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={"Stock"}
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        animation: "slide_from_right",
      }}
    >
      <Stack.Group>
        <Stack.Screen component={Stock} name="Stock" />
        <Stack.Screen component={Dashboard} name="Dashboard" />
      </Stack.Group>
    </Stack.Navigator>
  );
};
export default AppStack;
