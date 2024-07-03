import { Device } from "@utils/device";
import Animated from "react-native-reanimated";
import styled from "styled-components/native";

interface IProps {
  active: boolean;
}

export const Container = styled.TouchableOpacity<IProps>`
  padding: 5px 8px;
  border-radius: 4px;
  border: 1px solid
    ${({ theme, active }) =>
      active ? theme.colors["purple-dark"] : theme.colors.purple};

  margin: 8px 8px 12px 0;
  align-items: center;
  justify-content: center;

  background: ${({ theme, active }) =>
    active ? theme.colors["purple-dark"] : theme.colors.white};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme["font-family"].baloo.bold};
  font-size: ${({ theme }) => theme["font-size"].tag};
  color: ${({ theme }) => theme["colors"]["purple"]};

  text-align: center;
`;
