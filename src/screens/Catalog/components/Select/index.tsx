import { useTheme } from "styled-components";
import * as Styled from "./styles";
import { TouchableOpacityProps } from "react-native";

interface IProps extends TouchableOpacityProps {
  text: string;
  active: boolean;
}

export default function Select({ text, active, ...props }: IProps) {
  const theme = useTheme();
  const colorActive = active
    ? theme.colors["purple-light"]
    : theme.colors["purple"];

  return (
    <Styled.Container activeOpacity={0.52} active={active} {...props}>
      <Styled.Title style={{ color: colorActive }}>{text} </Styled.Title>
    </Styled.Container>
  );
}
