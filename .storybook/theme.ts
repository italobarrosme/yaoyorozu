import { create } from '@storybook/theming/create';

export default create({
  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',
  // brand
  base: 'dark',
  brandTitle: 'Skyi',
  brandUrl: '',
  brandImage: '/skyi_logo_white.png',
  brandTarget: '_self',

  //
  colorPrimary: '#0d61ba',
  colorSecondary: '#335250',

  // UI
  appBg: '#121e1e',
  appContentBg: '#121e1e',
  appPreviewBg: '#f9f9f9',
  appBorderColor: '#bad5d1',
  appBorderRadius: 4,

  // Text colors
  textColor: '#f9f9f9',
  textInverseColor: '#f9f9f9',

  // Toolbar default and active colors
  barTextColor: '#f9f9f9',
  barSelectedColor: '#0d61ba',
  barHoverColor: '#bad5d1',
  barBg: '#121e1e',

  buttonBg: '#0d61ba',
  buttonBorder: '#0d61ba',

  // Form colors
  inputBg: '#121e1e',
  inputBorder: '#0d61ba',
  inputTextColor: '#0d61ba',
  inputBorderRadius: 2,
})