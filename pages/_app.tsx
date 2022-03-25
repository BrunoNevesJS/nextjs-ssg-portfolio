import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../styles/global/global'
import theme from '../styles/theme/theme';

export default function MyApp (
  { Component, pageProps }: AppProps): JSX.Element {

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  );
}
