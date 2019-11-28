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
        neutral: '#bbb',
        neutralInverted: '#666',
        formAccent: '#396AA2',
        info: '#5481a9',
        critical: '#f14c4c',
        positive: '#7fa851',
        promote: '#b278b2',
        secondary: '#ddd',
      },
      background: {
        input: '#121212',
        inputDisabled: '#444',
        card: '#333',
        formAccent: '#396AA2',
        neutral: '#1a1a1a',
      },
    },
  },
});
