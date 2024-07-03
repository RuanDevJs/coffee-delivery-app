import { Device } from "@utils/device";
import Animated from "react-native-reanimated";
import styled from "styled-components/native";

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors["white"]};
`;

export const CoffeeSlide = styled.View`
  position: relative;
  top: -${Device.width * 0.25}px;

  z-index: 500;
`;

export const SpacerItemSize = styled.View``;

export const CoffeeList = styled.View`
  margin-top: -80px;
  margin-left: 12px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme["font-family"].baloo.bold};
  font-size: ${({ theme }) => theme["font-size"].baloo.lg};
  color: ${({ theme }) => theme["colors"]["gray-100"]};
`;

export const Footer = styled.View`
  height: 100%;
  margin-top: 15px;
`;
