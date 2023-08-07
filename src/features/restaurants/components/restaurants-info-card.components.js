import React from "react";
import { View, Image } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.components";
import { theme } from "../../../infrastructure/theme";
import { Text } from "../../../components/typography/text.components";
const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.ui.tertiary};
`;
const Info = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;
// const Title = styled(Text)`
//   font-family: ${(props) => props.theme.fonts.heading};
//   font-weight: ${(props) => props.theme.fontWeights.bold};
//   font-size: ${(props) => props.theme.fontSizes.title};
//   color: ${(props) => props.theme.colors.ui.primary};
// `;
const Section = styled(View)`
  padding: ${(props) => props.theme.space[2]} 0;
  flex-direction: row;
  justify-content: space-between;
`;
const StatusSection = styled(View)`
  flex-direction: row;
`;
const Rating = styled(View)`
  flex-direction: row;
`;

const Closed = styled(Text)`
  color: ${(props) => props.theme.colors.text.error};
`;

const Icon = styled(Image)`
  height: 15px;
  width: 15px;
`;

const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Grace Foods",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 3.5,
    isClosedTemporarily = true,
  } = restaurant;
  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <>
      <RestaurantCard mode="elevated" elevation={5}>
        <Card.Cover
          source={{
            uri: photos[0],
          }}
        />
        <Info>
          <Text variant="title">{name}</Text>

          <Section>
            <Rating>
              {ratingArray.map(() => {
                return <SvgXml xml={star} height={20} width={20}></SvgXml>;
              })}
            </Rating>
            <StatusSection>
              {isClosedTemporarily && (
                <Text variant="error">Closed Temporarily</Text>
              )}
              <Spacer position="left" size="large" theme={theme}>
                {isOpenNow && (
                  <SvgXml xml={open} height={20} width={20}></SvgXml>
                )}
              </Spacer>
              <Spacer position="left" size="large" theme={theme}>
                <Icon source={{ uri: icon }} />
              </Spacer>
            </StatusSection>
          </Section>

          <Text variant="caption">{address}</Text>
        </Info>
      </RestaurantCard>
    </>
  );
};
