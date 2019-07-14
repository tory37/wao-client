import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';
import { fetchAllBugReports as fetchAllBugReportsAction } from '../actions/bugActions';
import _ from 'lodash';

import PageCard from './PageCard';
import BugReport from './BugReport';
import WAOButton from './WAOButton';

const StyledBugReportList = styled.div`
	width: 100%;

	.bugreportlist-title {
		font-size: 14px;
		font-family: NinjaNaruto;
		text-align: left;
		margin-bottom: 10px;
	}

	.bugreportlist-tabs {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		border-bottom: solid 5px black;
		padding-bottom: 5px;
	}

	.bugreportlist-icons {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		margin-top: 10px;

		.descriptions {
			width: 60%;
		}

		.users {
			width: 10%;
		}

		.actions {
			width: 30%;
		}
	}

	.bugreportlist-no-bugs {
		margin-top: 10px;
		font-size: 18px;
		font-weight: 600;
	}
`;

const BugReportList = ({ bugReports, fetchAllBugReports }) => {
	const openTab = 'OPEN';
	const fixedTab = 'FIXED';
	const wontFixTab = 'WONTFIX';

	const [selectedTab, setSelectedTab] = useState(openTab);
	const [isLoading, setIsLoading] = useState(false);

	const [openBugs, setOpenBugs] = useState([]);
	const [fixedBugs, setFixedBugs] = useState([]);
	const [wontFixBugs, setWontFixBugs] = useState([]);
	const [selectedBugs, setSelectedBugs] = useState([]);

	useEffect(() => {
		setIsLoading(true);
		fetchAllBugReports().finally(() => {
			setIsLoading(false);
		});
	}, []);

	useEffect(() => {
		setReports();
	}, [bugReports]);

	const setReports = () => {
		const open = _.filter(bugReports, report => {
			return report.status === openTab;
		});

		setOpenBugs(open);

		const fixed = _.filter(bugReports, report => {
			return report.status === fixedTab;
		});

		setFixedBugs(fixed);

		const rejected = _.filter(bugReports, report => {
			return report.status === wontFixTab;
		});

		setWontFixBugs(rejected);

		switch (selectedTab) {
			case openTab:
				setSelectedBugs(open);
				break;
			case fixedTab:
				setSelectedBugs(fixed);
				break;
			case wontFixTab:
				setSelectedBugs(rejected);
				break;
			default:
				setSelectedBugs(open);
				break;
		}
	};

	const onSelectTab = tab => {
		setSelectedTab(tab);
		switch (tab) {
			case openTab:
				setSelectedBugs(openBugs);
				break;
			case fixedTab:
				setSelectedBugs(fixedBugs);
				break;
			case wontFixTab:
				setSelectedBugs(wontFixBugs);
				break;
			default:
				setSelectedBugs(openBugs);
				break;
		}
	};

	return (
		<StyledBugReportList>
			<PageCard isLoading={isLoading}>
				<div className="bugreportlist-title">Bug Reports</div>

				<div className="bugreportlist-tabs">
					<WAOButton title={'Open'} color="gold" sm clickCallback={() => onSelectTab(openTab)} isSelected={selectedTab === openTab} />
					<WAOButton title={'Fixed'} color="green" sm clickCallback={() => onSelectTab(fixedTab)} isSelected={selectedTab === fixedTab} />
					<WAOButton title={"Won't Fix"} color="red" xl clickCallback={() => onSelectTab(wontFixTab)} isSelected={selectedTab === wontFixTab} />
				</div>

				{selectedBugs.length > 0 && (
					<div className="bugreportlist-icons">
						<div className="descriptions">
							<i className="fas fa-book" />
						</div>

						<div className="users">
							<i className="fas fa-users " />
						</div>

						<div className="actions">
							<i className="fas fa-arrow-circle-right" />
						</div>
					</div>
				)}

				{selectedBugs.length > 0 && selectedBugs.map(bugReport => <BugReport bugReport={bugReport} key={bugReport._id + bugReport.status} />)}
				{selectedBugs.length === 0 && <div className="bugreportlist-no-bugs">There are no {selectedTab == openTab ? 'open' : selectedTab === fixedTab ? 'fixed' : 'rejected'} bugs</div>}
			</PageCard>
		</StyledBugReportList>
	);
};

const mapStateToProps = state => ({
	bugReports: state.bugReports
});

export default connect(
	mapStateToProps,
	{ fetchAllBugReports: fetchAllBugReportsAction }
)(BugReportList);
