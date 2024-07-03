import { Device } from "@utils/device";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors["gray-100"]};
  padding-top: ${Device.height * 0.12}px;
`;

export const Image = styled.Image`
  width: 100%;
  height: ${Device.height * 0.5}px;
`;
