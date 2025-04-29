// export default MyApp;
import React from 'react';
import { UserProvider } from '../src/context/useUserStore'; 
import '../src/app/globals.css'; 
import type { AppProps } from 'next/app'; // Import proper types

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}   

export default MyApp;
