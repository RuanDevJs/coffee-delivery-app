import { SvgProps } from "react-native-svg";
import * as Styled from "./styles";
import { Device } from "@utils/device";
import {
  SharedValue,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
} from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

interface IData {
  key?: "left" | "right";
  _id?: string;
  name?: string;
  description?: string;
  category?: string[];
  Image?: React.FC<SvgProps>;
  price?: number;
  quantity?: number;
}

export interface IProps {
  data: IData;
  animation: {
    index: number;
    translateX: SharedValue<number>;
  };
}

export default function Coffee({ data, animation }: IProps) {
  const navigate = useNavigation();
  const ITEM_SIZE = Device.width * 0.72;

  const INPUT_RANGE = [
    (animation.index - 2) * ITEM_SIZE,
    (animation.index - 1) * ITEM_SIZE,
    animation.index * ITEM_SIZE,
  ];

  const iconRotate = useDerivedValue(() => {
    return interpolate(animation.translateX.value, INPUT_RANGE, [-100, 0, 100]);
  });

  const rAnimatedContainer = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            animation.translateX.value,
            INPUT_RANGE,
            [50, 0, 50]
          ),
        },
      ],
    };
  });

  const rAnimatedPoster = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        animation.translateX.value,
        INPUT_RANGE,
        [0.32, 1, 0.32]
      ),
      transform: [
        {
          rotate: iconRotate.value + "deg",
        },
        {
          translateY: interpolate(
            animation.translateX.value,
            INPUT_RANGE,
            [0, -10, 0]
          ),
        },
      ],
    };
  });

  return (
    <Styled.Container style={[{ width: ITEM_SIZE }, rAnimatedContainer]}>
      <Styled.Content
        activeOpacity={1}
        onPress={() => navigate.navigate("Product", { product: data })}
      >
        <Styled.Poster style={rAnimatedPoster}>
          {data.Image && <data.Image />}
        </Styled.Poster>
        <Styled.Category>
          {data.category?.map((category, index) => (
            <Styled.Tag key={index}>
              <Styled.TagText>{category}</Styled.TagText>
            </Styled.Tag>
          ))}
        </Styled.Category>
        <Styled.Title>{data.name}</Styled.Title>
        <Styled.Description>{data.description}</Styled.Description>
        <Styled.Price>R$ {data.price?.toFixed(2)}</Styled.Price>
      </Styled.Content>
    </Styled.Container>
  );
}
