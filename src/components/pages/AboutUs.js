import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { Link, withRouter, Route } from 'react-router-dom';

import WAOButton from '../WAOButton';
import PageCard from '../PageCard';
import WAOSuperButton from '../WAOSuperButton';
import PlayerCard from '../PlayerCard';

const StyledAboutUs = styled.div`
	width: 100%;
	height: 100%;
	padding-top: 20px;

	.aboutus-section {
		margin-bottom: 50px;
	}

	.aboutus-title {
		width: 100%;
		text-align: center;
		font-size: 32px;
		font-weight: 600;
		margin-bottom: 10px;
	}

	.aboutus-header {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		margin: auto;
	}

	.aboutus-superbutton {
		width: 100%;
		text-align: center;
		margin-bottom: 20px;

		@media only screen and (min-width: 500px) {
			display: none;
		}
	}

	.aboutus-content {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;

		flex-wrap: wrap;
	}
`;

const Card = () => {};

const Founders = ({}) => {
	return (
		<div className="aboutus-content">
			<PlayerCard />

			<PlayerCard />
		</div>
	);
};

const Contributors = ({}) => {
	return <div>contributors</div>;
};

const SuperPatrons = ({}) => {
	return <div>super patrons</div>;
};

const AboutUs = ({ match, location, history }) => {
	useEffect(() => {}, []);

	const types = {
		founders: '/founders',
		contributors: '/contributors',
		superPatrons: '/superpatrons'
	};

	const onNavClick = route => {
		history.push(match.url + route);
	};

	return (
		<StyledAboutUs>
			<div className="aboutus-section">
				<div className="aboutus-title">About Us</div>
				<div className="aboutus-header">Hello everyone, this will say what we are and who we are. Maybe something about our backstory. How we got started. etc.</div>
			</div>

			<div className="aboutus-section">
				<div className="aboutus-title">Founders</div>
				<Founders />
			</div>

			<div className="aboutus-section">
				<div className="aboutus-title">Contributors</div>
				<Contributors />
			</div>
		</StyledAboutUs>
	);
};

const AboutUsFounders = () => {};

export default withRouter(AboutUs);
