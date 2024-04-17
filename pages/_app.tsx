// pages/_app.tsx
import { QueryClientProvider } from 'react-query';
import { queryClient } from '../src/queryClient';
import '../src/app/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
 return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
 );
}

export default MyApp;
