import React from 'react';
import styled from "@emotion/styled";

const StyledSectionHeader = styled.div`
  width: 100%;
  text-align: ${props => props.aligned ? props.aligned : 'left' };
  font-size: 32px;
  font-weight: 600;
  margin-top: 10px;
  margin-bottom: 10px;
  font-family: NinjaNaruto;
`;

const SectionHeader = ( { children, aligned } ) => {
  return (
    <StyledSectionHeader aligned={ aligned }>
      { children }
    </StyledSectionHeader>
  )
}

export default SectionHeader;