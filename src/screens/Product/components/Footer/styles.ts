import { Device } from "@utils/device";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  margin-top: -32px;
  height: ${Device.height * 0.32}px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Content = styled.View`
  margin: 16px 18px;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme["font-family"].roboto.regular};
    font-size: ${theme["font-size"].roboto.sm};
    color: ${theme.colors["gray-400"]};
  `}
`;

export const Wrap = styled.View`
  margin-top: 8px;
  flex-direction: row;
  gap: 5px;
`;

interface IProps {
  active: boolean;
}

export const Select = styled.TouchableOpacity<IProps>`
  flex: 1;
  padding: 12px 18px;

  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors["gray-700"]};

  justify-content: center;
  align-items: center;

  text-align: center;

  border: 1px solid
    ${({ theme, active }) =>
      active ? theme.colors["purple-dark"] : theme.colors["gray-700"]};
`;

export const SelectText = styled.Text<IProps>`
  ${({ theme, active }) => css`
    font-family: ${
      active
        ? theme["font-family"].roboto.bold
        : theme["font-family"].roboto.regular
    }};
    font-size: ${theme["font-size"].roboto.sm};
    color: ${active ? theme.colors["purple-dark"] : theme.colors["gray-400"]};
  `}
`;
