const transitions = {
  linear: {
    fast: "all 0.2s linear",
    normal: "all 0.3s linear",
    slow: "all 0.6s linear",
    theme: "all 1s linear",
  },
  easeInOut: {
    fast: "all 0.2s ease-in-out",
    normal: "all 0.3s ease-in-out",
    slow: "all 0.6s ease-in-out",
    theme: "all 1s ease-in-out",
  },
};

export const darkTheme = {
  id: "dark",
  colors: {
    accent_border: "#102e66",
    secondary: "#7eabff",
    primary: "#2873ff",
    accent_hover: "#528fff",
    background_1: "#040b19",
    background_2: "#061229",
    background_3: "#0e1d50",
    background_hover: "#eeeeee",
    text_900: "#eff1ff",
    text_700: "#9aadd1",
    text_500: "#6078a3",
    text_300: "#888888",
    text_100: "#666666",
    text_hover: "#111111",
    text_accent: "#2873ff",
    shadow: "#eeeeee",
  },
  transitions,
  header_width: "1500",
  content_width: "1300",
};

export const lightTheme = {
  id: "light",
  colors: {
    accent_border: "#efd199",
    secondary: "#815400",
    primary: "#d78c00",
    accent_hover: "#ad7000",
    background_1: "#fbf4e6",
    background_2: "#f9edd6",
    background_3: "#f1e2af",
    background_hover: "#111111",
    text_900: "#100e00",
    text_700: "#65522e",
    text_500: "#9f875c",
    text_300: "#777777",
    text_100: "#999999",
    text_hover: "#eeeeee",
    text_accent: "#d78c00",
    shadow: "#111111",
  },
  transitions,
  header_width: "1500",
  content_width: "1300",
};