// export default MyApp;
import React from 'react';
import { UserProvider } from '../src/context/useUserStore'; 
import '../src/app/globals.css'; 

function MyApp({ Component, pageProps }: any) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp;
