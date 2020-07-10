import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import IndexScreen from "./src/screens/IndexScreen";
import { Provider } from "./src/context/BlogContext";
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";
import { Feather } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import EditScreen from "./src/screens/EditScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="index"
            component={IndexScreen}
            options={({ navigation }) => {
              return {
                title: "Blogs",
                headerRight: () => (
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Create")}
                  >
                    <Feather name="plus" size={30} />
                  </TouchableOpacity>
                ),
              };
            }}
          />
          <Stack.Screen
            name="show"
            component={ShowScreen}
            options={({ navigation, route }) => {
              return {
                title: "Blogs",
                headerRight: () => ( 
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("Edit", { id: route.params.id })
                    }
                  >
                    <EvilIcons name="pencil" size={30} />
                  </TouchableOpacity>
                ),
              };
            }}
          />
          <Stack.Screen name="Create" component={CreateScreen} />
          <Stack.Screen name="Edit" component={EditScreen} route={1} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
