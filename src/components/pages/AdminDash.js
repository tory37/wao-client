import React from 'react';
import styled from '@emotion/styled';

import PageCard from 'components/PageCard';
import BugReportList from 'components/BugReportList';

const StyledAdminDash = styled.div`
	width: 100%;

	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: flex-start;
	flex-wrap: wrap;

	.admindash-bugs {
		width: 100%;
	}
`;

const AdminDash = ( { auth } ) => {
	return (
		<StyledAdminDash>
			<div className="admindash-bugs">
				<BugReportList />
			</div>
		</StyledAdminDash>
	);
};

const mapStateToProps = state => ( {
	auth: state.auth
} );

export default AdminDash;
