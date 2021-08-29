import "../styles/globals.css";
import Layout from "../components/Layout";
import { AuthProvider, GlobalProvider } from "../context/state";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <GlobalProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </GlobalProvider>
    </AuthProvider>
  );
}

export default MyApp;
