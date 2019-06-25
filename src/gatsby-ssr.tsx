import React from "react";

import Layout from "./components/layout";

export const wrapPageElement = ({ element }: { element: React.ReactNode }) => (
  <Layout>{element}</Layout>
);
