import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import { logoutUser } from '../actions/authActions';

import DropdownMenu from './DropdownMenu';

const StyledUserMenu = styled.div`
	position: relative;

	.menu-container {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		color: white;

		.image {
			width: 30px;
			height: 30px;
			border-radius: 50%;
			background-color: white;
			padding: 5px;
			overflow: hidden;
			border: solid 1px black;
			margin-right: 5px;

			img {
				width: 100%;
				height: 100%;
			}
		}

		&:hover {
			i {
				color: gray;
			}
		}
	}

	.dropdown-menu {
		position: absolute;
	}
`;

const UserMenu = ({ user }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const node = useRef();

	const handleClick = e => {
		if (node.current.contains(e.target)) {
			if (isMenuOpen) {
				setIsMenuOpen(false);
				return;
			}
			setIsMenuOpen(true);
			// inside click
			return;
		}

		// outside click
		if (isMenuOpen) {
			setIsMenuOpen(false);
		}
	};

	useEffect(() => {
		// add when mounted
		document.addEventListener('mousedown', handleClick);

		// return function to be called when unmounted
		return () => {
			document.removeEventListener('mousedown', handleClick);
		};
	}, [handleClick, isMenuOpen]);

	const options = [
		{
			text: 'Logout',
			callback: logoutUser
		}
	];

	return (
		<StyledUserMenu>
			<div className="menu-container" ref={node}>
				<div className="image">
					<img src={user.imageUrl} alt="user" />
				</div>
				<i className="fas fa-caret-down" />
			</div>

			{isMenuOpen && (
				<div className="dropdown-menu">
					<DropdownMenu options={options} />
				</div>
			)}
		</StyledUserMenu>
	);
};

const mapStateToProps = state => ({
	user: state.auth.user
});

export default connect(mapStateToProps)(UserMenu);
