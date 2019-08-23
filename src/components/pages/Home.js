import React from 'react';
import styled from '@emotion/styled';

import SkewedBox from '../SkewedBox';
import LinkList from '../LinkList';

const linkListWidth = '150px';

const StyledHome = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: flex-start;
	flex-wrap: wrap;

	.home-banner {
		margin-bottom: 10px;
		width: 100%;

		img {
			width: 100%;
		}
	}

	.home-content {
		width: calc(100% - ${props => props.linkListWidth});
	}

	.home-linklist {
		width: ${props => props.linkListWidth};
	}

	.divider {
		width: 80px;
		height: 40px;
		margin-left: 110px;
	}

	.body {
		padding: 10px 15px 10px 33px;
	}
`;

const Home = () => {
	return (
		<StyledHome linkListWidth={linkListWidth}>
			<div className="home-banner">
				<img alt="Weebs and Otakus Banner" src="http://drive.google.com/uc?export=view&id=1_koZwP_aicmT8S12xRRp4zCGbLvKHmLz" />
			</div>
			<div className="home-content">
				<SkewedBox clipPath="3% 0, 100% 0, 98% 100%, 0 100%" color="#c70213">
					<div className="body">Welcome to the home of the Weebs and Otakus. This homepage will be revised soon!</div>
				</SkewedBox>
			</div>
			<div className="home-linklist">
				<LinkList></LinkList>
			</div>
		</StyledHome>
	);
};

export default Home;
