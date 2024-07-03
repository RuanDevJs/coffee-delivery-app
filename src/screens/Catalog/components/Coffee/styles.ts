import { Device } from "@utils/device";
import Animated from "react-native-reanimated";
import styled from "styled-components/native";

export const Container = styled(Animated.View)`
  position: relative;
  z-index: 1;

  flex: 1;
`;

export const Content = styled.TouchableOpacity`
  align-items: center;

  height: ${Device.height * 0.42}px;
  background-color: ${({ theme }) => theme.colors["gray-800"]};

  margin: 10px;
  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;

  position: relative;
  z-index: 3;
`;

export const Poster = styled(Animated.View)``;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme["font-family"].baloo.bold};
  font-size: ${({ theme }) => theme["font-size"].baloo.lg};
  color: ${({ theme }) => theme["colors"]["gray-100"]};
  margin: 15px 0 5px 0;
  text-align: center;
`;

export const Description = styled.Text`
  max-width: 160px;
  font-family: ${({ theme }) => theme["font-family"].roboto.regular};
  font-size: ${({ theme }) => theme["font-size"].roboto.xs};
  color: ${({ theme }) => theme["colors"]["gray-400"]};
  line-height: ${({ theme }) => theme["line-height"].roboto.xs};
  text-align: center;
`;

export const Category = styled.View`
  flex-direction: row;
  gap: 8px;
  margin: 8px 0;
`;

export const Tag = styled.TouchableOpacity`
  border-radius: 50px;

  padding: 5px 16px;
  background-color: ${({ theme }) => theme.colors["purple-light"]};
`;

export const TagText = styled.Text`
  font-family: ${({ theme }) => theme["font-family"].baloo.bold};
  font-size: ${({ theme }) => theme["font-size"].tag};
  color: ${({ theme }) => theme["colors"]["purple-dark"]};
  text-transform: capitalize;
`;

export const Price = styled.Text`
  font-family: ${({ theme }) => theme["font-family"].baloo.bold};
  font-size: ${({ theme }) => theme["font-size"].baloo.lg};
  color: ${({ theme }) => theme["colors"]["yellow"]};
  text-transform: capitalize;
  padding: 10px 0;
`;
