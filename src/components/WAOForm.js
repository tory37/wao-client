import React from 'react';
import styled from '@emotion/styled';

const StyledWAOForm = styled.div`
	width: 100%;
	height: 100%;
`;

// There must only ever be one active form one the page at any given time
//  -- Active means that onSubmit will respond to the enter key
//  ---- Suggestion: wrap your onSubmit function in an if that checks if you can sabmit,
//  ---- then pass those variables in an array to canSubmitVarsArray
const WAOForm = ({ onSubmit, children, canSubmit }) => {
	const onFormSubmit = e => {
		e.preventDefault();
		if (canSubmit) {
			onSubmit();
		}
	};

	return (
		<StyledWAOForm>
			<form onSubmit={onFormSubmit}>{children}</form>
		</StyledWAOForm>
	);
};

export default WAOForm;
