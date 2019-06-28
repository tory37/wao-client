import React from 'react';
import styled from '@emotion/styled';

import Layout from './Layout';

const StyledHome = styled.div`
	width: 100%;
`;

const Home = () => {
	return (
		<Layout>
			<StyledHome>Welcome to the home of Acadiana Weebs and Otakus</StyledHome>
		</Layout>
	);
};

export default Home;
