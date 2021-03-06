import React from 'react';
import Helmet from 'react-helmet';

const NotFoundPage = () => (
<section className="not-found-page">
  <Helmet
    title="404 Not Found - Keystone4 Universal React"
    meta={[
      {
        name: 'description',
        content: `Boilerplate for a keystone4 website using universally rendered React.`
      }
    ]}
  />
  <div className="grid-container">
    Oh no! 404 Not Found
  </div>
</section>
);

export default NotFoundPage;
