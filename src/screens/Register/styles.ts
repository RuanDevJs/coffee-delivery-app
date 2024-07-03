import { Device } from "@utils/device";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors["gray-100"]};

  padding-top: ${Device.height * 0.08}px;
`;

export const Heading = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: 18px;
`;

export const Form = styled.View`
  flex: 1;
  text-align: center;
  justify-content: center;
  padding: 8px;
`;

export const Footer = styled.View`
  text-align: center;
  justify-content: center;
  padding: 8px;
`;

export const Link = styled.TouchableOpacity``;

export const Text = styled.Text`
  text-align: center;
  font-family: ${({ theme }) => theme["font-family"].baloo.bold};
  font-size: ${({ theme }) => theme["font-size"].baloo.sm};
  color: ${({ theme }) => theme.colors["yellow"]};
`;
