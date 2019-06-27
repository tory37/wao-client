import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import StyledShadowedBox from '../styles/StyledShadowedBox';

const StyledWelcomeBubble = styled.div`
  min-width: 225px;
  max-width: 225px;

  &:hover {
    box-shadow: 0 0 20px 1px ${props => props.color};
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.textColor};
  }

  .image {
    height: 85px;
    background-color: ${props => props.color};

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  .body {
    padding: 10px;
    background-color: white;
    height: 80px;

    .title {
      font-size: 14px;
      font-weight: 600;
      text-transform: uppercase;
    }

    .description {
      font-size: 12px;
      color: ${props => props.theme.lightTextColor};
      line-height: 12px;
    }
  }
`;

const WelcomeBubble = ({
  title, description, color, linkUrl, imageUrl,
}) => (
  <StyledWelcomeBubble color={color}>
    <Link to={linkUrl}>
      <StyledShadowedBox>
        <div className="image">
          <img src={imageUrl} alt={title} />
        </div>
        <div className="body">
          <div className="title">{title}</div>
          <div className="description">{description}</div>
        </div>
      </StyledShadowedBox>
    </Link>
  </StyledWelcomeBubble>
);

WelcomeBubble.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default WelcomeBubble;
