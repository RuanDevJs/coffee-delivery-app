import { Device } from "@utils/device";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import styled from "styled-components/native";

export const Container = styled(GestureHandlerRootView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors["gray-900"]};
`;

export const Products = styled.View`
  flex: 1;
`;

export const ListEmpty = styled.View`
  flex: 1;

  justify-content: center;
  align-items: center;

  margin-top: ${Device.width * 0.32}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme["font-family"].baloo.bold};
  font-size: ${({ theme }) => theme["font-size"].baloo.sm};
  color: ${({ theme }) => theme["colors"]["gray-500"]};
  padding: 12px 0;
`;
