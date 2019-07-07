import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { updatePassword as updatePasswordAction, updateUserProfile as updateUserProfileAction } from '../../actions/authActions';

import PageWrapper from '../PageWrapper';
import PageCard from '../PageCard';
import SkewedBox from '../SkewedBox';
import DataField from '../DataField';
import WAOButton from '../WAOButton';
import Img from 'react-image';
import ColorPicker from '../ColorPicker';

const defaultProfileImage = 'https://upload.wikimedia.org/wikipedia/commons/2/25/Wikipe-tan_silhouette.png';

const StyledUserProfile = styled.div`
	width: 100%;

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
`;

const UserProfile = ({ auth, updateUserProfile, updatePassword }) => {
	const colorsArray = ['black', 'red', 'blue', 'purple', 'brown', 'orange', 'green'];

	const [isLoading, setIsLoading] = useState(false);

	const [moddedUser, setModdedUser] = useState({
		imageUrl: auth.user.imageUrl,
		username: auth.user.username,
		email: auth.user.email,
		color: auth.user.color && auth.user.color.length > 0 ? auth.user.color : 'black'
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
				email: auth.user.email,
				color: auth.user.color
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
		setIsLoading(true);
		if (isEditing) {
			const updatedUser = {
				imageUrl: moddedUser.imageUrl,
				username: moddedUser.username,
				email: moddedUser.email,
				color: moddedUser.color
			};

			updateUserProfile(updatedUser, auth.user._id)
				.then(() => {
					setIsEditing(false);
				})
				.finally(() => {
					setIsLoading(false);
				});
		}

		if (isUpdatingPassword) {
			updatePassword(newPassword.password, newPassword.password2, auth.user._id)
				.then(() => {
					setIsUpdatingPassword(false);
				})
				.finally(() => {
					setIsLoading(false);
				});
		}
	};

	const onSelectColor = color => {
		setModdedUser({
			...moddedUser,
			color: color
		});
	};

	const onUpdatePasswordClick = e => {
		setIsUpdatingPassword(true);
	};

	return (
		<PageWrapper>
			<StyledUserProfile>
				<PageCard isLoading={isLoading} isSkewed>
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

						<div className="spacer" />

						<ColorPicker colorsArray={colorsArray} onSelectColor={onSelectColor} selectedColor={moddedUser.color} isEditing={isEditing} />

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
				</PageCard>
			</StyledUserProfile>
		</PageWrapper>
	);
};

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(
	mapStateToProps,
	{ updateUserProfile: updateUserProfileAction, updatePassword: updatePasswordAction }
)(UserProfile);
