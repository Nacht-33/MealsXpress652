import React from "react";
import { Text, View, Image } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import star from "../../../../../assets/star";
import open from "../../../../../assets/open";
const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.ui.tertiary};
`;
const Info = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;
const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.title};
  color: ${(props) => props.theme.colors.ui.primary};
`;
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
const ClosedSpacer = styled(View)`
  padding-right: ${(props) => props.theme.space[3]};
`;

const ImageSpacer = styled(View)`
  padding-left: ${(props) => props.theme.space[3]};
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
          <Title>{name}</Title>

          <Section>
            <Rating>
              {ratingArray.map(() => {
                return <SvgXml xml={star} height={20} width={20}></SvgXml>;
              })}
            </Rating>
            <StatusSection>
              {isClosedTemporarily && <Closed>Closed Temporarily</Closed>}
              <ClosedSpacer />
              {isOpenNow && <SvgXml xml={open} height={20} width={20}></SvgXml>}
              <ImageSpacer />
              <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
            </StatusSection>
          </Section>

          <Address>{address}</Address>
        </Info>
      </RestaurantCard>
    </>
  );
};
