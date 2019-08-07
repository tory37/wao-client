import React from 'react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';

import SkewedBox from './SkewedBox';
import CenteredContent from './CenteredContent';
import Loading from './Loading';

// 500 x 262
const StyledWAOSuperButton = styled.div`
	height: 40px;

	display: inline-flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;

	border: solid 5px black;

	.waosuperbutton-option {
		height: 100%;
		padding: 0 10px;
	}
`;

const WAOButton = ({ options }) => {
	return (
		<StyledWAOSuperButton>
			{options.map((option, index) => (
				<div
					key={option.title}
					className="waosuperbutton-option"
					onClick={option.onClick}
					style={{
						backgroundColor: option.color,
						borderRight: index !== options.length - 1 ? 'solid 5px black' : ''
					}}
				>
					<CenteredContent>{option.title}</CenteredContent>
				</div>
			))}
		</StyledWAOSuperButton>
	);
};

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(mapStateToProps)(WAOButton);
