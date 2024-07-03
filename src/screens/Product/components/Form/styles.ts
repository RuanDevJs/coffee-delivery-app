import { Device } from "@utils/device";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  margin: 2px 18px;
  height: ${Device.width * 0.15}px;

  justify-content: center;
  background-color: ${({ theme }) => theme.colors["gray-800"]};

  border-radius: 5px;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
  gap: 20px;
`;

export const Quantity = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Center = styled.View`
  padding: 0 18px;
`;

export const TouchableOpacity = styled.TouchableOpacity`
  padding: 8px;

  justify-content: center;
  align-items: center;

  border: 1px solid ${({ theme }) => theme.colors["gray-800"]};
`;

export const QuantityText = styled.Text`
  font-family: ${({ theme }) => theme["font-family"].roboto.regular};
  font-size: ${({ theme }) => theme["font-size"].roboto.lg};
  color: ${({ theme }) => theme.colors["gray-100"]};
`;

export const Button = styled.TouchableOpacity`
  flex: 1;
  padding: 12px;
  width: 100%;

  border-radius: 5px;
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors["purple"] : theme.colors["purple-dark"]};

  text-align: center;
  justify-content: center;
  align-items: center;

  opacity: ${({ theme, disabled }) => (disabled ? 0.72 : 1)};
`;

export const ButtonText = styled.Text`
  font-family: ${({ theme }) => theme["font-family"].baloo.bold};
  font-size: ${({ theme }) => theme["font-size"].button};
  color: ${({ theme }) => theme.colors["white"]};
`;
