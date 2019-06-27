import React from 'react';
import styled from '@emotion/styled';
import { paths } from '../../routes/index';

import Layout from '../Layout';
import Dashboard from '../Dashboard';
// import PrivateRoute from '../PrivateRoute';

const StyledHomePage = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const HomePage = () => (
  <div />
  // <PrivateRoute path={paths.home}>
  //   <Layout>
  //     <StyledHomePage>
  //       Welcome Home! Thanks for logging in.
  //       <Dashboard />
  //     </StyledHomePage>
  //   </Layout>
  // </PrivateRoute>
);

export default HomePage;
