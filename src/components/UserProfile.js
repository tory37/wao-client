import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser } from '../actions/authActions';

import SkewedBox from './SkewedBox';
import CenteredContent from './CenteredContent';
import DataField from './DataField';
import WAOButton from './WAOButton';
import Img from 'react-image';

const defaultProfileImage = 'https://upload.wikimedia.org/wikipedia/commons/2/25/Wikipe-tan_silhouette.png';

const StyledUserProfile = styled.div`
	width: 100%;

	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;

	.userprofile-view {
		width: 100%;
		margin: auto;
		max-width: 500px;

		.userprofile-content {
			display: flex;
			flex-direction: column;
			width: 100%;
			padding-left: 19px;
			padding-right: 30px;
			padding-bottom: 5px;
			padding-top: 20px;

			.userprofile-image {
				width: 120px;
				height: 120px;
				align-self: center;

				img {
					width: 100%;
					height: 100%;
				}
			}

			.spacer {
				height: 10px;
			}

			.userprofile-buttons {
				display: flex;
				flex-direction: row;
				justify-content: flex-end;
				align-items: center;
				margin-top: 10px;
				margin-left: auto;

				.userprofile-button-wrapper {
					margin-right: 5px;
				}
			}
		}
	}
`;

const UserProfile = ({ auth, updateUser, updateUserPassword }) => {
	const [moddedUser, setModdedUser] = useState({
		imageUrl: auth.user.imageUrl,
		username: auth.user.username,
		email: auth.user.email
	});

	const [newPassword, setNewPassword] = useState({
		password: '',
		password2: ''
	});

	const [isEditing, setIsEditing] = useState(false);
	const [isUpdatingPassword, setIsUpdatingPassword] = useState(false);

	const onEdit = e => {
		setIsEditing(true);
	};

	const onCancel = e => {
		if (isEditing) {
			setModdedUser({
				imageUrl: auth.user.imageUrl,
				username: auth.user.username,
				email: auth.user.email
			});

			setIsEditing(false);
		}

		if (isUpdatingPassword) {
			setNewPassword({
				password: '',
				password2: ''
			});

			setIsUpdatingPassword(false);
		}
	};

	const onSave = e => {
		const updatedUser = {
			imageUrl: moddedUser.imageUrl,
			username: moddedUser.username,
			email: moddedUser.email
		};

		updateUser(updatedUser);
	};

	const onUpdatePasswordClick = e => {
		setIsUpdatingPassword(true);
	};

	const onResetPassword = () => {
		updateUserPassword(newPassword.password, newPassword.password2);
	};

	return (
		<StyledUserProfile>
			<div className="userprofile-view">
				<SkewedBox clipPath="2% 3%, 100% 0, 100% 99%, 0 100%" color="darkgray" isSelected>
					<CenteredContent>
						<div className="userprofile-content">
							{!isEditing && (
								<div className="userprofile-image">
									<SkewedBox>
										<Img src={auth.isAuthenticated && auth.user.imageUrl && auth.user.imageUrl.length > 0 ? auth.user.imageUrl : defaultProfileImage} />
									</SkewedBox>
								</div>
							)}

							{isEditing && <DataField statePropertyPath="imageUrl" formState={moddedUser} formSetState={setModdedUser} title="Image URL" isText />}

							{!isEditing && <div className="userprofile-username">{auth.user.username}</div>}
							{!isEditing && <div className="spacer" />}

							{isEditing && <DataField statePropertyPath="username" formState={moddedUser} formSetState={setModdedUser} title="Username" isText />}

							{!isEditing && <div className="userprofile-email">{auth.user.email}</div>}

							{isEditing && <DataField statePropertyPath="email" formState={moddedUser} formSetState={setModdedUser} title="Email" isText />}

							{isUpdatingPassword && (
								<div>
									<DataField statePropertyPath="password" formState={newPassword} formSetState={setNewPassword} title="New Password" isPassword />
									<DataField statePropertyPath="password2" formState={newPassword} formSetState={setNewPassword} title="Confirm New Password" isPassword />
								</div>
							)}

							{!isEditing && !isUpdatingPassword && (
								<div className="userprofile-buttons">
									<div className="userprofile-button-wrapper">
										<WAOButton title="Change Pass" color="purple" clickCallback={onUpdatePasswordClick} xl5 />
									</div>
									<div>
										<WAOButton title="Edit" color="orange" clickCallback={onEdit} md />
									</div>
								</div>
							)}

							{(isEditing || isUpdatingPassword) && (
								<div className="userprofile-buttons">
									<div className="userprofile-button-wrapper">
										<WAOButton title="Quit" color="red" clickCallback={onCancel} md />
									</div>
									<div>
										<WAOButton title="Save" color="green" clickCallback={onSave} md />
									</div>
								</div>
							)}
						</div>
					</CenteredContent>
				</SkewedBox>
			</div>
		</StyledUserProfile>
	);
};

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(
	mapStateToProps,
	{ loginUser }
)(UserProfile);
