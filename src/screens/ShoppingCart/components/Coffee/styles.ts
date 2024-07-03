import { Device } from "@utils/device";

import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: ${Device.width}px;
  padding: 12px 0;
  background-color: ${({ theme }) => theme.colors["gray-900"]};
  border-bottom-width: 1px;

  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.colors["gray-700"]};
`;

export const Content = styled.View`
  width: 100%;
  flex-direction: row;

  padding: 18px 16px;
  gap: 20px;
`;

export const Wrap = styled.View`
  flex: 1;
  width: 100%;
`;

export const Heading = styled.View`
  flex: 1;

  width: 100%;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme["font-family"].baloo.bold};
  font-size: ${({ theme }) => theme["font-size"].baloo.sm};
  color: ${({ theme }) => theme.colors["gray-100"]};
`;

export const Price = styled.Text`
  font-family: ${({ theme }) => theme["font-family"].baloo.bold};
  font-size: ${({ theme }) => theme["font-size"].baloo.xs};
  color: ${({ theme }) => theme.colors["gray-100"]};
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme["font-family"].roboto.regular};
  font-size: ${({ theme }) => theme["font-size"].roboto.sm};
  color: ${({ theme }) => theme.colors["gray-400"]};
`;

export const Footer = styled.View`
  flex: 1;

  flex-direction: row;
  align-items: center;

  gap: 25px;
  margin-top: 16px;
`;

export const Quantity = styled.View`
  flex-direction: row;
  border: 1px solid ${({ theme }) => theme.colors["gray-600"]};

  padding: 2px 12px;
  border-radius: 5px;
`;

export const QuantityTotal = styled.Text`
  padding: 0 10px;

  font-family: ${({ theme }) => theme["font-family"].roboto.regular};
  font-size: ${({ theme }) => theme["font-size"].roboto.sm};
  color: ${({ theme }) => theme.colors["gray-100"]};
`;

export const TouchableOpacity = styled.TouchableOpacity`
  padding: 5px 1px;
`;

export const Button = styled.TouchableOpacity`
  padding: 8px 10px;
  background-color: ${({ theme }) => theme.colors["gray-700"]};

  border-radius: 5px;
`;
