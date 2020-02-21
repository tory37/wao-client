import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import aboutUsData from '../../data/aboutUs';

import StaffCard from '../StaffCard';
import StyledHeaderSection from '../../styles/SectionHeader';
import SectionHeader from '../../styles/SectionHeader';

const StyledAboutUs = styled.div`
	width: 100%;
	height: 100%;
	padding-top: 20px;

	.aboutus-section {
		margin-bottom: 50px;
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

const Founders = ( { } ) => {
	return (
		<div className="aboutus-content">
			{ aboutUsData.founders.map( ( founder, index ) => (
				<StaffCard key={ index } isFullBody name={ founder.name } imageUrl={ founder.imageUrl } text1={ founder.roles } text2={ founder.description } stats={ founder.stats } iconName={ founder.iconName } />
			) ) }
		</div>
	);
};

const Contributors = ( { } ) => {
	return (
		<div className="aboutus-content">
			{ aboutUsData.contributors.map( ( contributor, index ) => (
				<StaffCard key={ index } name={ contributor.name } imageUrl={ contributor.imageUrl } text1={ contributor.roles } text2={ contributor.description } stats={ contributor.stats } iconName={ contributor.iconName } />
			) ) }
		</div>
	);
};

const SuperPatrons = ( { } ) => {
	return <div>super patrons</div>;
};

const AboutUs = ( { match, location, history } ) => {
	useEffect( () => { }, [] );

	const types = {
		founders: '/founders',
		contributors: '/contributors',
		superPatrons: '/superpatrons'
	};

	const onNavClick = route => {
		history.push( match.url + route );
	};

	return (
		<StyledAboutUs>
			<div className="aboutus-section">
				<SectionHeader aligned='center'>About Us</SectionHeader>
				<div className="aboutus-header">We'd like to give a special thanks to everyone involed in this awesome project. </div>
			</div>

			<div className="aboutus-section">
				<StyledHeaderSection aligned="center">Founders</StyledHeaderSection>
				<Founders />
			</div>

			<div className="aboutus-section">
				<StyledHeaderSection aligned="center">Contributors</StyledHeaderSection>
				<Contributors />
			</div>
		</StyledAboutUs>
	);
};

const AboutUsFounders = () => { };

export default AboutUs;
