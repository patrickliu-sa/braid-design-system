import { makeTokens } from '../baseTokens/seekAsia';

const blue = '#0c4b85';

export default makeTokens({
  name: 'jobsDbDarkMode',
  brand: blue,
  formAccent: blue,
  brandAccent: '#ff9000',
  tokenOverrides: {
    color: {
      foreground: {
        neutral: '#999',
        neutralInverted: '#666',
        formAccent: '#4a3598',
      },
      background: {
        input: '#121212',
        inputDisabled: '#444',
        card: '#232323',
        formAccent: '#4a3598',
      },
    },
  },
});
