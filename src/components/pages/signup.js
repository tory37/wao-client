import React from 'react';
import styled from '@emotion/styled';

import Layout from '../Layout';
import Signup from '../Signup';

const StyledSignupPage = styled.div`
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const SignupPage = history => (
  <Layout>
    <StyledSignupPage>
      <Signup history={history} />
    </StyledSignupPage>
  </Layout>
);

export default SignupPage;
