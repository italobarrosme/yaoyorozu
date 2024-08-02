import { addons } from '@storybook/manager-api';
import theme from './theme';

addons.setConfig({
  toolbar: {
    title: { 
      hidden: true
    },
    zoom: { hidden: false },
    eject: { hidden: false },
    copy: { hidden: true },
    fullscreen: { hidden: false },
    theme: { hidden: true },
    stories: { hidden: false },
    src: { hidden: false },
    backgrounds: { hidden: true },
    viewport: { hidden: false },
    layout: { hidden: false },
    tool: { hidden: false },
  },
  theme,
});