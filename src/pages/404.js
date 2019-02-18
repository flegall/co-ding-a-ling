// @flow strict-local
import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>Sorry the page you are looking for is not found.</p>
  </Layout>
);

export default NotFoundPage;
