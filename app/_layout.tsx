import { NavigationContainer } from "@react-navigation/native";
import { Stack } from "expo-router";
import * as Linking from "expo-linking";

export default function RootLayout() {
  const prefix = Linking.createURL("/");
  const linking = {
    prefixes: [prefix, "simmy://"],
    config: {
      screens: {
        Index: {
          path: "*",
          exact: false,
        },
      },
    },
  };
  return (
    <NavigationContainer independent={true} linking={linking}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            header: () => null,
          }}
        />
      </Stack>
    </NavigationContainer>
  );
}
