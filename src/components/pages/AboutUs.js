import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import aboutUsData from '../../data/aboutUs';

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
		width: calc(100% - 30px);
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		margin-right: 15px;
		margin-left: 15px;
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
			{aboutUsData.founders.map(founder => (
				<PlayerCard name={founder.name} imageUrl={founder.imageUrl} text1={founder.roles} text2={founder.description} stats={founder.stats} iconName={founder.iconName} />
			))}
		</div>
	);
};

const Contributors = ({}) => {
	return (
		<div className="aboutus-content">
			{aboutUsData.contributors.map(contributor => (
				<PlayerCard name={contributor.name} imageUrl={contributor.imageUrl} text1={contributor.roles} text2={contributor.description} stats={contributor.stats} iconName={contributor.iconName} />
			))}
		</div>
	);
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

export default AboutUs;
