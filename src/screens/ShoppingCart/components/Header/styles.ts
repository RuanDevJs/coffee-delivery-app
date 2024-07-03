import { Device } from "@utils/device";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  height: ${Device.width * 0.3}px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors["gray-900"]};

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.colors["gray-700"]};
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;

  flex-direction: row;
  justify-content: center;

  align-items: center;
  margin-top: 25px;

  position: relative;
`;

export const Button = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  padding: 0 15px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme["font-family"].baloo.bold};
  font-size: ${({ theme }) => theme["font-size"].baloo.md};
  color: ${({ theme }) => theme["colors"]["gray-200"]};
`;
