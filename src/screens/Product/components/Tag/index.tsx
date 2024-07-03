import { TouchableOpacityProps } from "react-native";
import * as Styled from "./styles";

interface IProps extends TouchableOpacityProps {
  text: string;
}

export default function Tag({ text }: IProps) {
  return (
    <Styled.Container activeOpacity={0.72}>
      <Styled.Text>{text}</Styled.Text>
    </Styled.Container>
  );
}
