import { ApolloProvider } from "@apollo/client";
import React from "react";

import client from "./client";
import { DashboardRoutes } from "./routes/DashboardRoutes";

function App() {
  return (
    <ApolloProvider client={client}>
      <DashboardRoutes />
    </ApolloProvider>
  );
}

export default App;
