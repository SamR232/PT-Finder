import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./src/screens/LoginScreen";
import ClientMatch from "./src/screens/ClientMatch";
import RegisterScreen from "./src/screens/RegisterScreen";
import Dashboard from "./src/screens/Dashboard";
import ClientProfilePage from "./src/screens/ClientProfilePage";
import PTProfilePage from "./src/screens/PTProfilePage";
import { useState, useMemo } from "react";
import SearchGymsPage from "./src/screens/SearchGymsPage";
import WeightTrackerScreen from "./src/screens/WeightTrackerScreen";
import { UserContext } from "./src/UserContext";

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState(null);

  const providerUser = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <UserContext.Provider value={providerUser}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RegisterScreen"
            component={RegisterScreen}
            options={{
              title: "Register",
              headerStyle: {
                backgroundColor: "#F0CF29",
              },
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ClientProfile"
            component={ClientProfilePage}
            options={{
              title: "My Profile",
              headerStyle: {
                backgroundColor: "#F0CF29",
              },
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
          <Stack.Screen
            name="ClientMatch"
            component={ClientMatch}
            options={{
              title: "Find a PT",
              headerStyle: {
                backgroundColor: "#F0CF29",
              },
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const options = {
  headerStyle: {
    backgroundColor: "#F0CF29",
  },
  headerTitleStyle: {
    fontWeight: "bold",
  },
};
