import { TextInputProps } from "react-native";
import * as Styled from "./styles";

interface IProps extends TextInputProps {
  label: string;
}

export default function Input({ label, ...props }: IProps) {
  return (
    <Styled.Container>
      <Styled.Label>{label}</Styled.Label>
      <Styled.Input {...props} />
    </Styled.Container>
  );
}
