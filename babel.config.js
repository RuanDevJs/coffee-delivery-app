module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "@assets": "./src/assets",
            "@components": "./src/components",
            "@routes": "./src/routes",
            "@screens": "./src/screens",
            "@services": "./src/services",
            "@theme": "./src/theme",
            "@utils": "./src/utils",
            "@context": "./src/context",
          },
        },
      ],
      ["react-native-reanimated/plugin"],
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env",
          path: ".env",
        },
      ],
    ],
  };
};
