import { Device } from "@utils/device";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #272221;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.View`
  flex: 1;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  color: #8d8686;

  line-height: ${RFValue(20 * 1.3)}px;
  text-align: center;

  margin: 20px 0 5px 0;
`;

export const Description = styled.Text`
  width: 320px;
  font-size: ${RFValue(12)}px;
  color: #574f4d;

  text-align: center;
`;
