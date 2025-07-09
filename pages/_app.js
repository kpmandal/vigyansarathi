
// pages/_app.js

import '../styles/globals.css'; // <-- THIS IS THE CRITICAL LINE

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
