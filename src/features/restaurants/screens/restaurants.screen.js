import React from "react";
import { SafeAreaView, StatusBar, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurants-info-card.components";
import styled from "styled-components/native";
const SearchWrapper = styled(View)`
  background-color: ${(props) => props.theme.colors.ui.quaternary};
  padding: ${(props) => props.theme.space[3]};
`;

const ListWrapper = styled(View)`
  background-color: ${(props) => props.theme.colors.ui.quaternary};
  padding: ${(props) => props.theme.space[3]};
  flex: 1;
`;

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
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
