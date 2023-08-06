import React from "react";
import { Text } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const Address = styled(Text)`
  padding: 18px;
`;

const RestaurantCard = styled(Card)`
  flex: 0.5;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Grace Foods",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <>
      <RestaurantCard mode="elevated" elevation={5}>
        <Card.Cover
          source={{
            uri: photos[0],
          }}
        />
        <Card.Title title={name} />
        <Address>{address}</Address>
      </RestaurantCard>
    </>
  );
};
