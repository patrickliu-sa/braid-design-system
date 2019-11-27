import { treatTheme, runtimeTokens } from './theme.treat';
import { Theme } from '../theme';

const theme: Theme = {
  ...runtimeTokens,
  name: 'jobsDbDarkMode',
  background: '#121212',
  treatTheme,
};

export default theme;
