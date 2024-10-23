import { create } from '@storybook/theming/create';

export default create({
  // Typography
  fontBase: '"Nunito", sans-serif',
  fontCode: 'monospace',
  // brand
  base: 'light',
  brandTitle: 'Skyi',
  brandUrl: '',
  brandImage: '/skyi_logo.png',
  brandTarget: '_self',

  // Cores principais
  colorPrimary: '#f9f9f9',
  colorSecondary: '#0080ff',

  // UI
  appBg: '#f9f9f9',
  appContentBg: '#f9f9f9', 
  appBorderColor: '#f9f9f9',
  appBorderRadius: 8,

  // Texto
  textColor: '#0f1a1a',
  textInverseColor: '#f9f9f9', 

  // Toolbar default e active colors
  barTextColor: '#f9f9f9',
  barSelectedColor: '#f58c24',
  barBg: '#0080ff',

  // Form colors
  inputBg: '#f9f9f9',
  inputBorder: '#0f1a1a',
  inputTextColor: '#0f1a1a',
  inputBorderRadius: 8,
})