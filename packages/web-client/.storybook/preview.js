import { addParameters, addDecorator, configure } from '@storybook/react';
import StylesDecorator from './styles-decorator';
import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';

addDecorator(StylesDecorator);


addons.setConfig({
    theme: themes.light
  });

configure(require.context('../src/stories', true, /\.stories\.js$/), module);