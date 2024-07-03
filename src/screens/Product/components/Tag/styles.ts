import { Device } from "@utils/device";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  border-radius: 50px;

  padding: 5px 16px;
  background-color: ${({ theme }) => theme.colors["gray-200"]};
`;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme["font-family"].baloo.bold};
  font-size: ${({ theme }) => theme["font-size"].tag};
  color: ${({ theme }) => theme["colors"]["white"]};
  text-transform: capitalize;
`;
