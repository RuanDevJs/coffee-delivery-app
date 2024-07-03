import { Device } from "@utils/device";
import styled, { css } from "styled-components/native";

export const Background = styled.View`
  background-color: ${({ theme }) => theme.colors["gray-100"]};
  height: ${Device.height * 0.52}px;
  position: relative;
  z-index: 1;
`;

export const Container = styled.View`
  padding: ${Device.width * 0.15}px 20px;
  position: relative;
  z-index: 1;
`;

export const Heading = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  position: relative;
  z-index: 1;
`;

export const Left = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme["font-family"].roboto.regular};
  font-size: ${({ theme }) => theme["font-size"].roboto.sm};
  color: ${({ theme }) => theme["colors"]["gray-900"]};
`;

export const Right = styled.TouchableOpacity`
  position: relative;
`;

export const ShoppingCartLength = styled.TouchableOpacity`
  width: 20px;
  height: 20px;

  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors["yellow-dark"]};

  justify-content: center;
  align-items: center;

  position: absolute;
  top: -8px;
  right: -5px;
`;

export const Length = styled.Text`
  font-family: ${({ theme }) => theme["font-family"].baloo.bold};
  font-size: ${({ theme }) => theme["font-size"].baloo.xs};
`;

export const Form = styled.View`
  padding: 50px 10px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme["font-family"].baloo.bold};
  font-size: ${({ theme }) => theme["font-size"].baloo.md};
  color: ${({ theme }) => theme["colors"]["white"]};
  line-height: ${({ theme }) => theme["line-height"].baloo.md};
`;

export const Label = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-top: 25px;
`;

export const Input = styled.TextInput`
  width: 100%;

  ${({ theme }) => css`
    font-family: ${theme["font-family"].roboto.regular};
    font-size: ${theme["font-size"].roboto.sm};
    color: ${theme["colors"]["white"]};
    line-height: ${theme["line-height"].roboto.sm};

    background-color: ${theme.colors["gray-100"]};
    padding: 12px 8px;
  `}

  position: relative;
  z-index: 1;
`;
