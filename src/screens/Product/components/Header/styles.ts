import { Device } from "@utils/device";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  height: ${Device.height * 0.12}px;
  margin: 32px 18px;
`;

export const Content = styled.View``;

export const Catalog = styled.View`
  flex-direction: row;
  gap: 5px;
`;

export const Heading = styled.View`
  flex-direction: row;
  align-items: center;

  justify-content: space-between;
  margin: 16px 0 10px 0;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme["font-family"].baloo.bold};
    font-size: ${theme["font-size"].baloo.lg};
    color: ${theme.colors.white};
  `}
`;

export const Price = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme["font-family"].baloo.bold};
    font-size: ${theme["font-size"].baloo.md};
    color: ${theme.colors.yellow};
  `}
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme["font-family"].roboto.regular};
    font-size: ${theme["font-size"].roboto.md};
    color: ${theme.colors["gray-500"]};
    line-height: ${theme["line-height"].roboto.md};
  `}
`;

export const Wrap = styled.View``;

export const Navigator = styled.View`
  position: relative;
  top: -50px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 0 5px;
`;

export const ShoppingCart = styled.View`
  position: relative;
`;

export const Length = styled.TouchableOpacity`
  position: absolute;
  background: ${({ theme }) => theme.colors["purple"]};

  width: 25px;
  height: 25px;

  justify-content: center;
  align-items: center;

  border-radius: 50px;

  right: -10px;
  top: -20px;
`;

export const LengthText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme["font-family"].baloo.bold};
    font-size: ${theme["font-size"].baloo.xs};
    color: ${theme.colors["white"]};
  `}
`;
