import { Platform, Dimensions } from "react-native";

interface IDevice {
  width: number;
  height: number;
  plataform: {
    os: "ios" | "android";
    behavior: "padding" | "height";
  };
}

const { width, height } = Dimensions.get("window");
export const Device: IDevice = {
  width,
  height,
  plataform: {
    os: Platform.OS === "android" ? "android" : "ios",
    behavior: Platform.OS === "android" ? "height" : "padding",
  },
};
