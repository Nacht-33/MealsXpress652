import React from "react";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.components";
import { theme } from "../../../infrastructure/theme";
import { Text } from "../../../components/typography/text.components";

import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Section,
  StatusSection,
  Rating,
  Icon,
} from "./restaurants.info-card.style";

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
        <RestaurantCardCover
          source={{
            uri: photos[0],
          }}
        />
        <Info>
          <Text variant="title">{name}</Text>

          <Section>
            <Rating>
              {ratingArray.map(() => {
                const keyID = Math.floor(Math.random() * 100);
                return (
                  <SvgXml
                    key={keyID}
                    xml={star}
                    height={20}
                    width={20}
                  ></SvgXml>
                );
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
