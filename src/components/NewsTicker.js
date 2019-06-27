import React from 'react';
import styled from '@emotion/styled';

const StyledNewsTicker = styled.div`
  height: 20px;
  width: 100%;
  font-size: 10px;
  background-color: black;
  color: ${({ theme }) => theme.lemon};

  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const NewsTicker = () => (
  <StyledNewsTicker>
    <div className="container">Work in progress, coming soon!</div>
  </StyledNewsTicker>
);

export default NewsTicker;
