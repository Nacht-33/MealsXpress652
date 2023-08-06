import React from "react";
import { StyleSheet, Text, SafeAreaView, StatusBar, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurants-info-card.components";
import styled from "styled-components/native";
const SearchWrapper = styled(View)`
  background-color: white;
  padding: 16px;
`;

const ListWrapper = styled(View)`
  background-color: "white";
  padding: 16px;
  flex: 1;
`;

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  padding-top: ${StatusBar.currentHeight}px;
`;
export const RestaurantsScreen = () => {
  return (
    <SafeArea>
      <SearchWrapper>
        <Searchbar placeholder="Search" elevation={5} />
      </SearchWrapper>
      <ListWrapper>
        <RestaurantInfoCard></RestaurantInfoCard>
      </ListWrapper>
    </SafeArea>
  );
};

export default RestaurantsScreen;
