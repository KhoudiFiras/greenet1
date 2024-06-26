const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import AndroidLarge from "./screens/AndroidLarge";
import AndroidLarge11 from "./screens/AndroidLarge11";
import AndroidLarge1 from "./screens/AndroidLarge1";
import AndroidLarge2 from "./screens/AndroidLarge2";
import AndroidLarge6 from "./screens/AndroidLarge6";
import AndroidLarge4 from "./screens/AndroidLarge4";
import AndroidLarge5 from "./screens/AndroidLarge5";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="AndroidLarge" component={AndroidLarge} />
           
            <Stack.Screen
              name="AndroidLarge11"
              component={AndroidLarge11}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge2"
              component={AndroidLarge2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge1"
              component={AndroidLarge1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge21"
              component={AndroidLarge2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge6"
              component={AndroidLarge6}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge4"
              component={AndroidLarge4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge5"
              component={AndroidLarge5}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
