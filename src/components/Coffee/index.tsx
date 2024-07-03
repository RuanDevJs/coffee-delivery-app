import { TouchableOpacityProps } from "react-native";
import { SvgProps } from "react-native-svg";

import * as Styled from "./styles";

interface IData {
  _id?: string;
  name?: string;
  description?: string;
  category?: string[];
  Image?: React.FC<SvgProps>;
  price?: number;
  quantity?: number;
}

export interface IProps extends TouchableOpacityProps {
  data: IData;
}

export default function Coffee({ data, ...props }: IProps) {
  if (!data.Image) {
    return null;
  }

  return (
    <Styled.Container activeOpacity={0.72} {...props}>
      <Styled.Content>
        <Styled.Poster>
          <data.Image />
        </Styled.Poster>
        <Styled.Wrap>
          <Styled.Title>{data.name}</Styled.Title>
          <Styled.Description>{data.description}</Styled.Description>
          <Styled.Price>R${data.price?.toFixed(2)}</Styled.Price>
        </Styled.Wrap>
      </Styled.Content>
    </Styled.Container>
  );
}
