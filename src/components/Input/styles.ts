import styled, { css } from "styled-components/native";

export const Container = styled.View`
  margin: 15px 18px 20px 18px;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme["font-family"].baloo.bold};
    font-size: ${theme["font-size"].baloo.sm};
    color: ${theme.colors.white};
  `}

  padding-bottom: 8px;
`;

export const Input = styled.TextInput`
  ${({ theme }) => css`
    width: 100%;
    font-family: ${theme["font-family"].roboto.regular};
    font-size: ${theme["font-size"].roboto.sm};
    color: ${theme.colors["gray-900"]};

    background-color: ${theme.colors["gray-200"]};
    padding: 18px;

    border-radius: 8px;
  `}
`;
