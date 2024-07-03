import { Device } from "@utils/device";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  margin-bottom: 10px;
`;

export const Content = styled.View`
  position: relative;
  padding: 16px 18px;

  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;

  background-color: ${({ theme }) => theme.colors["gray-800"]};

  margin: 10px;
  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;
`;

export const Poster = styled.View`
  position: absolute;
  top: -10px;
`;

export const Wrap = styled.View`
  position: relative;
  left: ${Device.width * 0.27}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme["font-family"].baloo.bold};
  font-size: ${({ theme }) => theme["font-size"].baloo.lg};
  color: ${({ theme }) => theme["colors"]["gray-100"]};
  padding: 5px 0;
`;

export const Description = styled.Text`
  max-width: 85%;
  font-family: ${({ theme }) => theme["font-family"].roboto.regular};
  font-size: ${({ theme }) => theme["font-size"].roboto.xs};
  color: ${({ theme }) => theme["colors"]["gray-400"]};
  line-height: ${({ theme }) => theme["line-height"].roboto.xs};
`;

export const Price = styled.Text`
  font-family: ${({ theme }) => theme["font-family"].baloo.bold};
  font-size: ${({ theme }) => theme["font-size"].baloo.md};
  color: ${({ theme }) => theme["colors"]["yellow"]};
  text-transform: capitalize;
`;
