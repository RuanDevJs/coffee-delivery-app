import { Device } from "@utils/device";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  padding: 16px 18px;
`;

export const Ilustration = styled.View`
  justify-content: center;
  align-items: center;

  margin: 18px 0;
`;

export const Wrap = styled.View``;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme["font-family"].baloo.bold};
    font-size: ${theme["font-size"].baloo.lg};
    color: ${theme.colors["yellow-dark"]};

    margin: 8px 0 5px 0;
    text-align: center;
  `}
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme["font-family"].roboto.regular};
    font-size: ${theme["font-size"].roboto.sm};
    color: ${theme.colors["gray-400"]};

    margin-bottom: 8px;
    text-align: center;
  `}
`;

export const Button = styled.TouchableOpacity`
  top: ${Device.width * 0.15}px;
  width: ${Device.width * 0.72}px;
  padding: 16px 8px;

  ${({ theme }) => css`
    font-family: ${theme["font-family"].roboto.regular};
    font-size: ${theme["font-size"].roboto.sm};
    color: ${theme.colors["gray-400"]};

    background-color: ${theme.colors["purple-dark"]};
  `}

  justify-content: center;
  align-items: center;

  border-radius: 5px;
`;

export const ButtonTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme["font-family"].baloo.bold};
    font-size: ${theme["font-size"].baloo.md};
    color: ${theme.colors["white"]};
  `}
`;
