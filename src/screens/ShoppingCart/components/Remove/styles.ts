import { Device } from "@utils/device";
import styled, { css } from "styled-components/native";

export const Container = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors["red"]};
  padding: 32px;
`;

export const Icon = styled.View``;
