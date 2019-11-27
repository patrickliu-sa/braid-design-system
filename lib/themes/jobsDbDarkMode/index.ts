import { treatTheme, runtimeTokens } from './theme.treat';
import { Theme } from '../theme';

const theme: Theme = {
  ...runtimeTokens,
  name: 'jobsDbDarkMode',
  background: '#1a1a1a',
  treatTheme,
};

export default theme;
