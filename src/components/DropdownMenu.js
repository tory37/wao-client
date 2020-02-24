import React from 'react';
import styled from '@emotion/styled';
import StyledShadowedBox from 'styles/StyledShadowedBox';

const StyledDropdownMenu = styled.div`
    padding: 5px;
`;

// Options should be array of objects with propteries title and callback
const DropdownMenu = ( { options } ) => (
  <StyledShadowedBox>
    <StyledDropdownMenu>
      { options.map( ( option, i ) => (
        <div
          key={ i }
          onClick={ () => {
            console.log( 'clicked' );
          } }
        >
          { option.text }
        </div>
      ) ) }
    </StyledDropdownMenu>
  </StyledShadowedBox>
);

export default DropdownMenu;
