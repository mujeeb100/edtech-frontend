// import React from 'react';
// import { UserProvider } from '../src/context/useUserStore'; // Adjust the path if needed
// import '../src/globals.css'; // Import global styles

// function MyApp({ Component, pageProps }: any) {
//   return (
//     <UserProvider>
//       <Component {...pageProps} />
//     </UserProvider>
//   );
// }

// export default MyApp;
import React from 'react';
import { UserProvider } from '../src/context/useUserStore'; // Adjust the path if needed
import '../src/globals.css'; // Import global styles

function MyApp({ Component, pageProps }: any) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp;
