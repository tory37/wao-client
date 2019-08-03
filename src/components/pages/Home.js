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
				<img alt="Weebs and Otakus Banner" src="http://4.bp.blogspot.com/-aAjFd-_JEPA/Tmrg-OBX5mI/AAAAAAAAABc/eUfnAlbmJX8/s1600/anime_logo_big-web.jpg" />
			</div>
			<div className="home-content">
				<SkewedBox clipPath="3% 0, 100% 0, 98% 100%, 0 100%" color="#c70213">
					<div className="body">Welcome to the home of the Weebs and Otakus. This homepage will be revised soon!</div>
				</SkewedBox>

				<div className="divider">
					<SkewedBox clipPath="76% 0, 100% 0, 26% 100%, 0% 100%" color="black" isSelected />
				</div>

				<SkewedBox clipPath="3% 0, 100% 0, 98% 100%, 0 100%" color="green">
					<div className="body">If you are a beta tester, or would like to be, please contact ya boi Tory or Brandon and let them know. Arigatou!</div>
				</SkewedBox>
			</div>
			<div className="home-linklist">
				<LinkList>

				</LinkList>
			</div>
		</StyledHome>
	);
};

export default Home;
