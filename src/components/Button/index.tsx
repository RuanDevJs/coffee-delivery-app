import { ActivityIndicator, TouchableOpacityProps } from "react-native";
import * as Styled from "./styles";

interface IProps extends TouchableOpacityProps {
  text: string;
  loading?: boolean;
}

export default function Button({ text, loading, ...props }: IProps) {
  return (
    <Styled.Container {...props}>
      {loading ? (
        <ActivityIndicator size={25} />
      ) : (
        <Styled.Text>{text}</Styled.Text>
      )}
    </Styled.Container>
  );
}
