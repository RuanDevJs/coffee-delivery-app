import { Device } from "@utils/device";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  height: ${Device.width * 0.32}px;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.colors["white"]};
  padding: 10px 16px;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;

  flex-direction: row;
  justify-content: space-between;

  align-items: flex-start;
  margin: 8px 0 12px 0;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme["font-family"].roboto.regular};
  font-size: ${({ theme }) => theme["font-size"].baloo.sm};
  color: ${({ theme }) => theme["colors"]["gray-200"]};
`;

export const Price = styled.Text`
  font-family: ${({ theme }) => theme["font-family"].baloo.bold};
  font-size: ${({ theme }) => theme["font-size"].baloo.sm};
  color: ${({ theme }) => theme["colors"]["gray-200"]};
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  padding: 16px 8px;

  background-color: ${({ theme }) => theme.colors.yellow};
  border-radius: 5px;

  justify-content: center;
  align-items: center;

  opacity: ${({ disabled }) => (disabled ? 0.82 : 1)};
`;

export const ButtonText = styled.Text`
  font-family: ${({ theme }) => theme["font-family"].baloo.bold};
  font-size: ${({ theme }) => theme["font-size"].baloo.sm};
  color: ${({ theme }) => theme["colors"]["white"]};
  text-transform: capitalize;
`;
