import { TouchableOpacityProps } from "react-native";
import { Trash } from "phosphor-react-native";

import * as Styled from "./styles";

interface IProps extends TouchableOpacityProps {}

export default function Remove({ onPress }: IProps) {
  return (
    <Styled.Container activeOpacity={0.72} onPress={onPress}>
      <Styled.Icon>
        <Trash size={32} color="#C44117" />
      </Styled.Icon>
    </Styled.Container>
  );
}
