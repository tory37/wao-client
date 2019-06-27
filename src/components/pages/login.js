import React from 'react';
import styled from '@emotion/styled';

import Layout from '../Layout';
import Login from '../Login';

const StyledLoginPage = styled.div`
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const LoginPage = ({ history }) => (
  <Layout>
    <StyledLoginPage>
      <Login history={history} />
    </StyledLoginPage>
  </Layout>
);

export default LoginPage;
