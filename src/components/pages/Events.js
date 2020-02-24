import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { connect } from "react-redux";
import moment from "moment";
import _ from "lodash";
import { fetchAllEvents as fetchAllEventsAction } from "store/events/actions";

import PageWrapper from "components/PageWrapper";
import EventAdd from "components/events/EventAdd";
import EventView from "components/events/EventView";
import SkewedBox from "components/SkewedBox";
import CenteredContent from "components/CenteredContent";
import WAOButton from "components/WAOButton";

// 500 x 262
const StyledEvents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  .events-no-upcoming {
    width: 285px;
    height: 60px;

    .events-no-upcoming-refresh {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      width: 100%;
    }
  }

  .events-event-wrapper {
    width: 100%;
  }

  .events-no-upcoming {
    width: 200px;
    height: 45px;
  }

  .events-show-past-button {
    margin-top: 10px;
  }

  .divider {
    width: 100px;
    height: 30px;
    margin-left: 100px;
  }
`;

const Events = ( { events, auth, isLoadingEvents, fetchAllEvents } ) => {
  const [ isEditing, setIsEdit ] = useState( false );
  const [ isAdding, setIsAdd ] = useState( false );
  const [ shouldShowPast, setShouldShowPast ] = useState( false );
  const [ futureEvents, setFutureEvents ] = useState( [] );
  const [ pastEvents, setPastEvents ] = useState( [] );

  useEffect( () => {
    let now = moment().unix();

    setFutureEvents(
      _.filter( events, event => {
        return event.endTimestamp >= now;
      } )
    );

    setPastEvents(
      _.filter( events, event => {
        return event.endTimestamp < now;
      } )
    );
  }, [ events ] );

  const onAddStart = () => {
    setIsAdd( true );
    onEditStart();
  };

  const onAddEnd = () => {
    setIsAdd( false );
    onEditEnd();
  };

  const onEditStart = () => {
    setIsEdit( true );
  };

  const onEditEnd = () => {
    setIsEdit( false );
  };

  const onShowPastEvents = () => {
    setShouldShowPast( true );
  };

  return (
    <PageWrapper>
      <StyledEvents>
        { auth.isAuthenticated && auth.user.roles.includes( `ADMIN` ) && (
          <EventAdd
            canAdd={ !isEditing }
            onAddStart={ onAddStart }
            onAddEnd={ onAddEnd }
          />
        ) }

        { isAdding && (
          <div className="divider">
            <SkewedBox
              clipPath="76% 0, 100% 0, 26% 100%, 0% 100%"
              color="black"
              isSelected
            />
          </div>
        ) }

        { futureEvents &&
          futureEvents.length > 0 &&
          futureEvents.map( ( event, i ) => {
            return (
              <div className="events-event-wrapper" key={ event._id }>
                <EventView
                  event={ event }
                  canEdit={
                    !isEditing &&
                    auth.isAuthenticated &&
                    auth.user.roles.includes( `ADMIN` )
                  }
                  onEditStart={ onEditStart }
                  onEditEnd={ onEditEnd }
                />
                { i < events.length - 1 && (
                  <div className="divider">
                    <SkewedBox
                      clipPath="76% 0, 100% 0, 26% 100%, 0% 100%"
                      color="black"
                      isSelected
                    />
                  </div>
                ) }
              </div>
            );
          } ) }

        { ( !futureEvents || futureEvents.length === 0 ) && !shouldShowPast && (
          <div className="events-no-upcoming">
            <SkewedBox
              color="red"
              clipPath="0 0, 99% 13%, 96% 100%, 7% 100%"
              isSelected
            >
              <CenteredContent>No Upcoming Events</CenteredContent>
            </SkewedBox>
          </div>
        ) }

        { shouldShowPast &&
          pastEvents &&
          pastEvents.length > 0 &&
          pastEvents.map( ( event, i ) => {
            return (
              <div className="events-event-wrapper" key={ event._id }>
                <EventView
                  event={ event }
                  canEdit={
                    !isEditing &&
                    auth.isAuthenticated &&
                    auth.user.roles.includes( `ADMIN` )
                  }
                  onEditStart={ onEditStart }
                  onEditEnd={ onEditEnd }
                />
                { i < pastEvents.length - 1 && (
                  <div className="divider">
                    <SkewedBox
                      clipPath="76% 0, 100% 0, 26% 100%, 0% 100%"
                      color="black"
                      isSelected
                    />
                  </div>
                ) }
              </div>
            );
          } ) }

        { ( !events || events.length === 0 ) && (
          <div className="events-no-upcoming">
            <SkewedBox
              clipPath="0% 0, 97% 0, 100% 100%, 3% 100%"
              color="plum"
              isSelected={ true }
            >
              <CenteredContent>
                { isLoadingEvents && <span>Loading Events</span> }
                { !isLoadingEvents && (
                  <div className="events-no-upcoming-refresh">
                    No Events to Show{ " " }
                    <WAOButton
                      title="Refresh"
                      userUserColor
                      color="goldenrod"
                      useUserColor
                      clickCallback={ fetchAllEvents }
                      md
                    />
                  </div>
                ) }
              </CenteredContent>
            </SkewedBox>
          </div>
        ) }

        { !shouldShowPast && pastEvents.length !== 0 && (
          <div className="events-show-past-button">
            <WAOButton
              title="Show Past"
              color="goldenrod"
              xl3
              clickCallback={ onShowPastEvents }
              isLoading={ isLoadingEvents }
              isDisabled={ isLoadingEvents }
            />
          </div>
        ) }
      </StyledEvents>
    </PageWrapper>
  );
};

const mapStateToProps = state => ( {
  events: state.events,
  auth: state.auth,
  isLoadingEvents: state.isLoadingEvents
} );

export default connect(
  mapStateToProps,
  { fetchAllEvents: fetchAllEventsAction }
)( Events );
