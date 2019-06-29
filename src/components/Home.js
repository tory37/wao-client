import React from 'react';
import styled from '@emotion/styled';

import Layout from './Layout';
import SkewedBox from './SkewedBox';

const StyledHome = styled.div`
	width: 100%;
`;

const Home = () => {
	return (
		<StyledHome>
			<SkewedBox clipPath="3% 0, 100% 0, 98% 100%, 0 100%" color="lightblue">
				Welcome to the home of the Weebs and Otakus of Acadiana! We area a group of anime, video game, and etc. Welcome to the home of the Weebs and Otakus of Acadiana! We area a group of anime, video game, and etc. Welcome to the home of the Weebs and Otakus of Acadiana! We area a group of
				anime, video game, and etc. Welcome to the home of the Weebs and Otakus of Acadiana! We area a group of anime, video game, and etc. Welcome to the home of the Weebs and Otakus of Acadiana! We area a group of anime, video game, and etc. Welcome to the home of the Weebs and Otakus of
				Acadiana! We area a group of anime, video game, and etc.
			</SkewedBox>
		</StyledHome>
	);
};

export default Home;
