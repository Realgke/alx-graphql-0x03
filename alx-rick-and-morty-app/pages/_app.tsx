import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client/react";  // ✅ Correct import
import client from "@/graphql/apolloClient";
import ErrorBoundary from "@/components/ErrorBoundary";

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://2c3d52548a8abf945b4e10d405df6ed3@o4510254990491648.ingest.de.sentry.io/4510254995210320", // replace with your DSN from Sentry dashboard
  tracesSampleRate: 1.0, // 1.0 means capture 100% of transactions (good for dev)
});


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </ErrorBoundary>
  );
}
