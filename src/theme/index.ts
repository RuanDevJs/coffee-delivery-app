import { RFValue } from "react-native-responsive-fontsize";

export default {
  "font-family": {
    baloo: {
      bold: "Baloo2_700Bold",
    },
    roboto: {
      regular: "Roboto_400Regular",
      bold: "Roboto_700Bold",
    },
  },
  "font-size": {
    baloo: {
      xs: `${RFValue(14)}px`,
      sm: `${RFValue(16)}px`,
      md: `${RFValue(20)}px`,
      lg: `${RFValue(24)}px`,
      xl: `${RFValue(36)}px`,
    },
    roboto: {
      xs: `${RFValue(12)}px`,
      sm: `${RFValue(14)}px`,
      md: `${RFValue(16)}px`,
      lg: `${RFValue(20)}px`,
    },
    tag: `${RFValue(10)}px`,
    button: `${RFValue(14)}px`,
  },
  colors: {
    /* Product */
    yellow: "#DBAC2C",
    "yellow-dark": "#C47F17",
    purple: "#8047F8",
    "purple-light": "#EBE5F9",
    "purple-dark": "#4B2995",
    /* Base */
    white: "#FFFFFF",
    "gray-100": "#272221",
    "gray-200": "#403937",
    "gray-300": "#574F4D",
    "gray-400": "#8D8686",
    "gray-500": "#D7D5D5",
    "gray-600": "#E6E5E5",
    "gray-700": "#EDEDED",
    "gray-800": "#F3F2F2",
    "gray-900": "#FAFAFA",
    /* Feedback */
    red: "#E8BAAB",
    "red-light": "#F2DFD8",
    "red-dark": "#C44117",
  },
  "line-height": {
    baloo: {
      xs: `${RFValue(14 * 1.3)}px`,
      sm: `${RFValue(16 * 1.3)}px`,
      md: `${RFValue(20 * 1.3)}px`,
      lg: `${RFValue(24 * 1.5)}px`,
      xl: `${RFValue(36 * 1.5)}px`,
    },
    roboto: {
      xs: `${RFValue(12 * 1.3)}px`,
      sm: `${RFValue(14 * 1.3)}px`,
      md: `${RFValue(16 * 1.5)}px`,
      lg: `${RFValue(20 * 1.5)}px`,
    },
  },
  disabled: 0.72,
};
