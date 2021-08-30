import "../styles/globals.css";
import Layout from "../components/Layout";
import { AuthProvider, GlobalProvider } from "../context";
import ProtectedRoute from "../components/ProtectedRoute";

function MyApp({ Component, pageProps, router }) {
  return (
    <AuthProvider>
      <ProtectedRoute router={router}>
        <GlobalProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </GlobalProvider>
      </ProtectedRoute>
    </AuthProvider>
  );
}

export default MyApp;
