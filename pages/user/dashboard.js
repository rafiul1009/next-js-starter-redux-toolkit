import React from 'react';
import CustomHead from '../../components/common/head/Head';
import ProtectedRoute from '../../components/common/router/ProtectedRoute';
import DashboardContentArea from '../../components/pages/user/DashboardContentArea';

const UserDashboardPage = () => {
  return (<>
    <ProtectedRoute>
      <CustomHead />
      <DashboardContentArea />
    </ProtectedRoute>
  </>)
}

export default UserDashboardPage;