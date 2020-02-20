import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import PageCard from "./PageCard";
import ReactLinkify from "react-linkify";

const StyledStaffCard = styled.div`
  width: 300px;
  height: 420px;
  position: relative;
  margin-bottom: 10px;

  .title-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
    opacity: .99;
  }

  img {
    &:not(.full-body) {
      width: calc(100% - 10px);
      border: black solid 5px;
      margin-top: 5px;
    }

    &.full-body {
      position: absolute;
      width: 100%;
      top: 0;
      left: 0;
      z-index: 0;
    }
  }

  .details {
    &.full-body {
      position: absolute;
      bottom: 10px;
      width: calc(100% - 20px);
      color: black;
      font-weight: 700;
      border: solid darkgray 5px;
      background-color: rgba(255,255,255,.2);
      padding: 2px;
    }

    .text1 {
      margin-bottom: 10px;
    }

    .text2 {
      font-size: 12px;
      font-style: italic;
    }
  }
`;

const StaffCard = ( {
  isFullBody,
  name,
  imageUrl,
  text1,
  text2,
  stats,
  iconName
} ) => {

  return (
    <StyledStaffCard>
      <PageCard color={ isFullBody ? "black" : null }>
        { isFullBody && <img
          className="full-body"
          src={ process.env.PUBLIC_URL + "/img/" + imageUrl }
        />
        }

        <div className="title-row">
          <div className="name">{ name }</div>
          { iconName && <i className={ iconName }></i> }
        </div>

        { !isFullBody && <img
          src={ process.env.PUBLIC_URL + "/img/" + imageUrl }
        /> }

        <div className={ `details ${ isFullBody && 'full-body' }` }>
          <div className="text1">
            { text1 }
          </div>

          <ReactLinkify>
            <div className="text2">
              { text2 }
            </div>
          </ReactLinkify>
        </div>
      </PageCard>
    </StyledStaffCard>
  );
};

export default StaffCard;
