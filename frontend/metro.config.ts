import { getDefaultConfig } from '@expo/metro-config';

const defaultConfig = getDefaultConfig(__dirname);

const config = {
  ...defaultConfig,

  transformer: {
    ...defaultConfig.transformer,
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};

export default config;