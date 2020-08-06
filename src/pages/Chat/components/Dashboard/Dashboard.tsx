import React, { useEffect } from 'react';

import Users from '../Users/Users';

export interface DashboardProps {}

const Dashboard: React.FunctionComponent<DashboardProps> = () => {
  return (
    <>
      <p style={{ margin: '100px' }}>Dashboard</p>

      <Users />
    </>
  );
};

export default Dashboard;
