import type { StorybookConfig } from '@storybook/angular-vite';

const config = {
  stories: ['../projects/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-docs'],
  framework: {
    name: '@storybook/angular-vite',
    options: {
      compodoc: false,
      tsconfig: './.storybook/tsconfig.json',
    },
  },
  docs: {
    autodocs: 'tag',
  },
} satisfies StorybookConfig;

export default config;