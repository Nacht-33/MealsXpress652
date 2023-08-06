import React from "react";
import { StyleSheet, Text, SafeAreaView, StatusBar, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from "../components/restaurants-info.components";
export const RestaurantsScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
      <View style={styles.SearchWrapper}>
        <Searchbar placeholder="Search" elevation={5} />
      </View>
      <View style={styles.ListWrapper}>
        <RestaurantInfo></RestaurantInfo>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  SearchWrapper: {
    backgroundColor: "white",
    padding: 16,
  },
  ListWrapper: {
    backgroundColor: "blue",
    padding: 16,
    flex: 1,
  },
});

export default RestaurantsScreen;
