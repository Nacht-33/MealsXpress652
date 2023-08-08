import styled from "styled-components/native";
import { View, Image } from "react-native";
import { Card } from "react-native-paper";

export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.ui.tertiary};
`;
export const RestaurantCardCover = styled(Card.Cover)``;
export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Section = styled(View)`
  padding: ${(props) => props.theme.space[2]} 0;
  flex-direction: row;
  justify-content: space-between;
`;
export const StatusSection = styled(View)`
  flex-direction: row;
`;
export const Rating = styled.View`
  flex-direction: row;
`;

export const Icon = styled(Image)`
  height: 15px;
  width: 15px;
`;
