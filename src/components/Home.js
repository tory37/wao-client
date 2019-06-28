import React from 'react';
import styled from '@emotion/styled';

import Layout from './Layout';
import SkewedBox from './SkewedBox';

const StyledHome = styled.div`
	width: 100%;
	height: auto;
`;

const Home = () => {
	return (
		<Layout>
			<StyledHome>
				<SkewedBox clipPath="3% 0, 100% 0, 98% 100%, 0 100%" color="lightblue">
					Welcome to the home of the Weebs and Otakus of Acadiana! We area a group of anime, video game, and etc.
				</SkewedBox>
			</StyledHome>
		</Layout>
	);
};

export default Home;
