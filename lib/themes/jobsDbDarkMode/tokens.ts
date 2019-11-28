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
        link: '#71bee0',
        linkHover: '#71bee0',
        neutral: '#ccc',
        neutralInverted: '#333',
        formAccent: '#396AA2',
        info: '#062541',
        critical: '#750000',
        positive: '#233f03',
        promote: '#471f47',
        secondary: '#ddd',
      },
      background: {
        input: '#121212',
        inputDisabled: '#444',
        card: '#333',
        formAccent: '#396AA2',
        defaultBackground: '#1a1a1a',
        selection: '#25a0d0',
      },
    },
  },
});
