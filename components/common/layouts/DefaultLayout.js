import React from 'react';
import { classPrefix } from '../../../config/config';
import { connect } from 'react-redux';
import Header from '../header/Header';

import dynamic from 'next/dynamic';
const Footer = dynamic(() => import('../footer/Footer'), {
  loading: () => {
    return ""
  }, ssr: false
});

const DefaultLayout = ({ children }) => {
  return (
    <div id={`__${classPrefix}__`}>
      <Header />
      <div id="__layout__">
        <main className="main">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
export default connect(null, null)(DefaultLayout);