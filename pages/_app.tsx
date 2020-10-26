import { AppProps } from 'next/app';
import { MainLayout } from '@/components/layouts/MainLayout';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeProvider>
  );
}

export default MyApp;
