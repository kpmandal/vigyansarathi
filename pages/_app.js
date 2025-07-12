// pages/_app.js

// This line imports your global stylesheet, which is essential for Tailwind CSS to work.
import '../styles/globals.css';

// This imports the Layout component we created, which contains the Header and Footer.
import Layout from '../components/Layout';

// This is the main App component.
// 'Component' represents the current page being displayed (e.g., index.js, [slug].js).
// 'pageProps' are the props passed to that page (e.g., from getStaticProps).
function MyApp({ Component, pageProps }) {
  
  // By wrapping the Component with Layout, every page on your site will
  // automatically get the Header and Footer.
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

