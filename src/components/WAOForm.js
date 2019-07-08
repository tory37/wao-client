import React, { useEffect, useState, useCallback, children } from 'react';
import styled from '@emotion/styled';

const StyledWAOForm = styled.div`
	width: 100%;
	height: 100%;
`;

// There must only ever be one active form one the page at any given time
//  -- Active means that onSubmit will respond to the enter key
//  ---- Suggestion: wrap your onSubmit function in an if that checks if you can sabmit,
//  ---- then pass those variables in an array to canSubmitVarsArray
const WAOForm = ({ onSubmit, children, canSubmitVarsArray }) => {
	const targetKey = 'Enter';

	// If pressed key is our target key then set to true
	const downHandler = ({ key }) => {
		if (key === targetKey) {
			onSubmit();
		}
	};

	// Add event listeners
	useEffect(() => {
		window.addEventListener('keydown', downHandler);

		return () => {
			window.removeEventListener('keydown', downHandler);
		};
	}, canSubmitVarsArray);

	return <StyledWAOForm>{children}</StyledWAOForm>;
};

export default WAOForm;
