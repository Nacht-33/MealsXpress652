import React from "react";
import { SafeAreaView, StatusBar, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurants-info-card.components";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.components";
import { SafeArea } from "../../../components/utility/safe-area.components";
const SearchWrapper = styled(View)`
  background-color: ${(props) => props.theme.colors.ui.tertiary};
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled.FlatList.attrs({
  contentContainerStyle: { padding: 16 },
})``;
export const RestaurantsScreen = () => {
  return (
    <SafeArea>
      <SearchWrapper>
        <Searchbar placeholder="Search" elevation={5} />
      </SearchWrapper>

      <RestaurantList
        data={[
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
          { name: 6 },
          { name: 7 },
          { name: 8 },
          { name: 9 },
          { name: 10 },
          { name: 11 },
          { name: 12 },
          { name: 13 },
          { name: 14 },
        ]}
        renderItem={() => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard />
          </Spacer>
        )}
        keyExtractor={(item) => item.name.toString()}
      />
    </SafeArea>
  );
};

export default RestaurantsScreen;
