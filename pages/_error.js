// pages/404.js
import React from 'react';
import CustomHead from '../components/common/head/Head';
import NotFound from '../components/common/404/NotFound';
import ErrorLayout from '../components/common/layouts/ErrorLayout';

const Custom404 = () => {
  return (
    <div className={`error-page-layout vh-100 d-flex align-items-center justify-content-center`}>
      <CustomHead
        title={"Page not found!"}
      />
      <div className={`error-page-content d-flex align-items-center justify-content-center text-center`}>
        <NotFound
          message="We couldn&apos;t find the page you are looking for."
          link="/"
          linkText="Go to Homepage"
        />
      </div>
    </div>
  );
}

Custom404.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

Custom404.Layout = ErrorLayout;

export default Custom404;