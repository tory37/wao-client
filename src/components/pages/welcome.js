import React from 'react';
import styled from '@emotion/styled';

import WelcomeBubble from '../WelcomeBubble';

const StyledWelcomePage = styled.div`
  padding-top: 50px;

  .header-outter {
    border-top: solid 1px black;
    border-bottom: solid 1px black;

    .header-middle {
      border-top: solid 2px gold;
      border-bottom: solid 2px gold;

      .header-inner {
        border-top: solid 1px black;
        border-bottom: solid 1px black;
        padding-top: 10px;
        padding-bottom: 10px;

        text-align: center;

        .title {
          font-size: 24px;
        }
      }
    }
  }

  .content-wrapper {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;

    .content {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      margin-top: 20px;
      flex-wrap: wrap;
      max-width: 1170px;

      .welcome-bubble {
        margin: 20px;
      }
    }
  }
`;

const potentialEmployerDesc = "Click here if you are a potential employer looking for Tory Hebert's resume.";
const returningUserDesc = 'Click here to login if you have already signed up';
const newUserDesc = "Click here to create an account if you'd like to join.";
const curiousCatDesc = 'Click here to see a breakdown of the tools used to build this webapp.';

const WelcomePage = () => (
  <StyledWelcomePage>
    <div className="header-outter">
      <div className="header-middle">
        <div className="header-inner">
          <div className="title">Welcome to BottomsUpStudio.com!</div>
          <div className="subtitle">Why are you here?</div>
        </div>
      </div>
    </div>

    <div className="content-wrapper">
      <div className="content">
        <div className="welcome-bubble">
          <WelcomeBubble
            title="Potential Employer"
            description={potentialEmployerDesc}
            color="#4b0082"
            linkUrl="/building"
            imageUrl="https://images.unsplash.com/photo-1515778767554-42d4b373f2b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
          />
        </div>

        <div className="welcome-bubble">
          <WelcomeBubble
            title="Returning User"
            description={returningUserDesc}
            color="#B22222"
            linkUrl="/login"
            imageUrl="https://images.unsplash.com/photo-1552267349-77e8b9af61c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
          />
        </div>

        <div className="welcome-bubble">
          <WelcomeBubble
            title="New User"
            description={newUserDesc}
            color="#FFDB00"
            linkUrl="/signup"
            imageUrl="https://images.unsplash.com/photo-1469647306420-8af65f90d810?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
          />
        </div>

        <div className="welcome-bubble">
          <WelcomeBubble
            title="Curious Cat"
            description={curiousCatDesc}
            color="#1a700f"
            linkUrl="/building"
            imageUrl="https://images.unsplash.com/photo-1521997888043-aa9c827744f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
          />
        </div>
      </div>
    </div>
  </StyledWelcomePage>
);

export default WelcomePage;
