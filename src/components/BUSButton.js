import React from 'react';
import styled from '@emotion/styled';

const StyledBUSButton = styled.div`
    background: #1a73e8;
    color: #fff;
    position: relative;
    min-width: 88px;
    height: 36px;

    .inner {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: transparent;
        cursor: pointer;

        span {
            margin: 8px 16px;
            max-width: 300px;
            letter-spacing: 0.25px;
        }
    }
`;

const BUSButton = ({ title, clickAction }) => (
  <StyledBUSButton>
    <div className="inner" onClick={clickAction}>
      <span>{title}</span>
    </div>
  </StyledBUSButton>
);

export default BUSButton;
