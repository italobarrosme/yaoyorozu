import { create } from '@storybook/theming/create';

export default create({
  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',
  // brand
  base: 'dark',
  brandTitle: 'Coqueiro Digital',
  brandUrl: '',
  brandImage: '/logo_coqueirodigital_brand_horizontal.png',
  brandTarget: '_self',

  //
  colorPrimary: '#fda000',
  colorSecondary: '#FFA000',

  // UI
  appBg: '#121e1e',
  appContentBg: '#121e1e',
  appPreviewBg: '#f9f9f9',
  appBorderColor: '#FFD7A0',
  appBorderRadius: 4,

  // Text colors
  textColor: '#f9f9f9',
  textInverseColor: '#f9f9f9',

  // Toolbar default and active colors
  barTextColor: '#f9f9f9',
  barSelectedColor: '#FFB000',
  barHoverColor: '#FFD7A0',
  barBg: '#121e1e',

  // Form colors
  inputBg: '#121e1e',
  inputBorder: '#FFB000',
  inputTextColor: '#FFB000',
  inputBorderRadius: 2,
})