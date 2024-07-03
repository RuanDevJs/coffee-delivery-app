import { Device } from "@utils/device";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors["gray-100"]};
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
  font-family: ${({ theme }) => theme["font-family"].baloo.bold};
  font-size: ${({ theme }) => theme["font-size"].baloo.lg};
  color: ${({ theme }) => theme.colors.yellow};

  line-height: ${({ theme }) => theme["line-height"].baloo.lg};
  text-align: center;

  margin: 70px 0 5px 0;
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme["font-family"].roboto.regular};
  font-size: ${({ theme }) => theme["font-size"].roboto.sm};
  color: ${({ theme }) => theme.colors.white};

  line-height: ${({ theme }) => theme["line-height"].baloo.sm};
  text-align: center;
`;

export const Form = styled.TouchableOpacity`
  text-align: center;
  justify-content: flex-start;
  padding: 18px;
`;

export const Button = styled.TouchableOpacity`
  text-align: center;
  justify-content: center;
  align-items: center;

  width: ${Device.width * 0.72}px;
  padding: 12px 8px;

  background-color: ${({ theme }) => theme.colors.yellow};
  border-radius: 25px;

  margin-top: 30px;
`;

export const ButtonText = styled.Text`
  text-align: center;
  font-family: ${({ theme }) => theme["font-family"].baloo.bold};
  font-size: ${({ theme }) => theme["font-size"].baloo.sm};
  color: ${({ theme }) => theme.colors["gray-100"]};
`;
