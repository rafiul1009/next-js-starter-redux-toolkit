import React from 'react';
import CustomHead from '../components/common/head/Head';
import LoginLayout from '../components/common/layouts/LoginLayout';
import LoginContentArea from '../components/pages/loginPage/LoginContentArea';

const LoginPage = () => {
  return (<>
    <CustomHead title="Login" />
    <LoginContentArea />
  </>)
}

LoginPage.Layout = LoginLayout;

export default LoginPage;