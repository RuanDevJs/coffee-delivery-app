import { Device } from "@utils/device";
import styled, { css } from "styled-components/native";

export const Container = styled.TouchableOpacity`
  text-align: center;
  justify-content: center;
  align-items: center;

  width: ${Device.width * 0.72}px;
  padding: 12px 8px;

  background-color: ${({ theme }) => theme.colors.yellow};
  border-radius: 25px;

  margin: 30px auto;

  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

export const Text = styled.Text`
  text-align: center;
  font-family: ${({ theme }) => theme["font-family"].baloo.bold};
  font-size: ${({ theme }) => theme["font-size"].baloo.sm};
  color: ${({ theme }) => theme.colors["gray-100"]};
`;
