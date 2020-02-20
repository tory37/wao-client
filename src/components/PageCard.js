import React from "react";
import styled from "@emotion/styled";

import SkewedBox from "./SkewedBox";
import CenteredContent from "./CenteredContent";
import LoadingOverlay from "./LoadingOverlay";

const StyledPageCard = styled.div`
  width: 100%;
  height: 100%;
  padding: ${props => ( props.isSkewed ? "10px 20px 10px 20px" : "10px" ) };
  position: relative;
`;

const PageCard = ( { children, isLoading, isSkewed, color } ) => {
  return (
    <SkewedBox
      clipPath={
        isSkewed
          ? "3% 0, 100% 0, 97% 100%, 0 100%"
          : "0 0, 100% 0, 100% 100%, 0 100%"
      }
      color={ color ? color : "#4a4a4a" }
      isSelected
    >
      <CenteredContent>
        <LoadingOverlay isLoading={ isLoading } />
        <StyledPageCard isSkewed={ isSkewed }>{ children }</StyledPageCard>
      </CenteredContent>
    </SkewedBox>
  );
};

export default PageCard;
