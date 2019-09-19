import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';
import { updatePassword as updatePasswordAction, updateUserProfile as updateUserProfileAction } from '../../actions/authActions';

import WAOForm from '../WAOForm';
import PageWrapper from '../PageWrapper';
import PageCard from '../PageCard';
import SkewedBox from '../SkewedBox';
import WAOButton from '../WAOButton';
import Img from 'react-image';
import ColorPicker from '../ColorPicker';
import DataFieldText from '../dataFields/DataFieldText';
import DataFieldEmail from '../dataFields/DataFieldEmail';
import DataFieldPassword from '../dataFields/DateFieldPassword';
import DataFieldConfirmPassword from '../dataFields/DataFieldConfirmPassword';
import DataFieldCheckbox from '../dataFields/DataFieldCheckbox';

const defaultProfileImage = 'https://upload.wikimedia.org/wikipedia/commons/2/25/Wikipe-tan_silhouette.png';

const StyledUserProfile = styled.div`
	width: 100%;

	.userprofile-content {
		display: flex;
		flex-direction: column;
		width: 100%;

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

		.userprofile-subscriptions-title {
			font-size: 14px;
			margin-top: 10px;
			margin-bottom: 5px;
		}

		.userprofile-subscriptions {
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			align-items: center;
			flex-wrap: wrap;

			.userprofile-subscriptions-entry {
				text-align: center;
				margin-bottom: 5px;
			}
		}

		.userprofile-buttons {
			display: flex;
			flex-direction: row;
			justify-content: flex-end;
			align-items: center;
			margin-top: 10px;
			width: 100%;

			.userprofile-button-wrapper {
				margin-right: 5px;
			}
		}
	}
`;

const UserProfile = ({ auth, updateUserProfile, updatePassword }) => {
	const colorsArray = ['#282929', 'red', 'blue', 'purple', 'brown', 'orange', 'green'];
	const SUBSCRIPTIONS = {
		EVENTS: 'EVENTS'
	};

	const { user } = auth;

	const [isLoading, setIsLoading] = useState(false);
	const [isEditing, setIsEditing] = useState(false);
	const [isUpdatingPassword, setIsUpdatingPassword] = useState(false);

	const [imageUrl, setImageUrl] = useState(user.imageUrl);
	const [isImageUrlInvalid, setIsImageUrlInvalid] = useState(false);
	const [username, setUsername] = useState(user.username);
	const [isUsernameInvalid, setIsUsernameInvalid] = useState(false);
	const [email, setEmail] = useState(user.email);
	const [isEmailInvalid, setIsEmailInvalid] = useState(false);
	const [color, setColor] = useState(user.color && user.color.length > 0 ? user.color : 'black');
	const [isSubscribedEvents, setIsSubscribedEvents] = useState(user.subscriptions ? user.subscriptions.includes(SUBSCRIPTIONS.EVENTS) : false);

	const [isProfileInvalid, setIsProfileInvalid] = useState(false);
	const [isPasswordUpdateInvalid, setIsPasswordUpdateInvalid] = useState(false);

	const [password, setPassword] = useState('');
	const [isPasswordInvalid, setIsPasswordInvalid] = useState(false);
	const [confirmPassword, setConfirmPassword] = useState('');
	const [isConfirmPasswordInvalid, setIsConfirmPasswordInvalid] = useState(false);

	useEffect(() => {
		setIsProfileInvalid(isImageUrlInvalid || isUsernameInvalid || isEmailInvalid);
	}, [isImageUrlInvalid, isUsernameInvalid, isEmailInvalid]);

	useEffect(() => {
		setIsPasswordUpdateInvalid(isPasswordInvalid || isConfirmPasswordInvalid);
	}, [isPasswordInvalid, isConfirmPasswordInvalid]);

	const onEdit = e => {
		setIsEditing(true);

		setImageUrl(user.imageUrl);
		setUsername(user.username);
		setEmail(user.email);
		setColor(user.color && user.color.length > 0 ? user.color : 'black');
	};

	const onCancel = e => {
		if (isEditing) {
			setIsEditing(false);
		}

		if (isUpdatingPassword) {
			setIsUpdatingPassword(false);
		}
	};

	const onSave = e => {
		setIsLoading(true);
		if (isEditing) {
			const updatedUser = {
				imageUrl: imageUrl,
				username: username,
				email: email,
				color: color,
				subscriptions: []
			};

			if (isSubscribedEvents) {
				updatedUser.subscriptions.push(SUBSCRIPTIONS.EVENTS);
			}

			updateUserProfile(updatedUser, user._id)
				.then(() => {
					setIsEditing(false);
				})
				.finally(() => {
					setIsLoading(false);
				});
		}

		if (isUpdatingPassword) {
			updatePassword(password, confirmPassword, user._id)
				.then(() => {
					setIsUpdatingPassword(false);
				})
				.finally(() => {
					setIsLoading(false);
				});
		}
	};

	const onSelectColor = color => {
		setColor(color);
	};

	const onUpdatePasswordClick = e => {
		setIsUpdatingPassword(true);

		setPassword('');
		setConfirmPassword('');
	};

	return (
		<PageWrapper>
			<StyledUserProfile>
				<PageCard isLoading={isLoading} isSkewed>
					<WAOForm onSubmit={onSave} canSubmit={!isLoading && ((isEditing && !isProfileInvalid) || (isUpdatingPassword && !isPasswordUpdateInvalid))}>
						<div className="userprofile-content">
							{!isEditing && (
								<div className="userprofile-image">
									<SkewedBox>
										<Img src={auth.isAuthenticated && user.imageUrl && user.imageUrl.length > 0 ? user.imageUrl : defaultProfileImage} />
									</SkewedBox>
								</div>
							)}

							{isEditing && <DataFieldText state={imageUrl} setState={setImageUrl} isInvalid={isImageUrlInvalid} setIsInvalid={setIsImageUrlInvalid} title="Image Url" />}

							{!isEditing && <div className="userprofile-username">{user.username}</div>}
							{!isEditing && <div className="spacer" />}

							{isEditing && <DataFieldText state={username} setState={setUsername} isInvalid={isUsernameInvalid} setIsInvalid={setIsUsernameInvalid} title="Username" isRequired />}

							{!isEditing && <div className="userprofile-email">{user.email}</div>}

							{isEditing && <DataFieldEmail state={email} setState={setEmail} isInvalid={isEmailInvalid} setIsInvalid={setIsEmailInvalid} title="Email" isRequired />}

							<div className="spacer" />

							{/* <ColorPicker colorsArray={colorsArray} onSelectColor={onSelectColor} selectedColor={color} isEditing={isEditing} /> */}

							<div className="userprofile-subscriptions-title">Subscriptions</div>
							<div className="userprofile-subscriptions">
								<div className="userprofile-subscriptions-entry">
									<DataFieldCheckbox color={user.color} state={isSubscribedEvents} setState={setIsSubscribedEvents} isEditing={isEditing} title="New Event Notifications" />
								</div>
							</div>

							{isUpdatingPassword && (
								<div>
									<DataFieldPassword state={password} setState={setPassword} isInvalid={isPasswordInvalid} setIsInvalid={setIsPasswordInvalid} shouldValidate />
									<DataFieldConfirmPassword state={confirmPassword} setState={setConfirmPassword} isInvalid={isConfirmPasswordInvalid} setIsInvalid={setIsConfirmPasswordInvalid} password={password} />
								</div>
							)}

							{!isEditing && !isUpdatingPassword && (
								<div className="userprofile-buttons">
									<div className="userprofile-button-wrapper">
										<WAOButton title="Change Pass" color="goldenrod" clickCallback={onUpdatePasswordClick} iconClass="fas fa-key" xl6 />
									</div>
									<div>
										<WAOButton title="Edit" color="orange" useUserColor clickCallback={onEdit} iconClass="fas fa-edit" />
									</div>
								</div>
							)}

							{(isEditing || isUpdatingPassword) && (
								<div className="userprofile-buttons">
									<div className="userprofile-button-wrapper">
										<WAOButton title="Quit" color="red" clickCallback={onCancel} isLoading={isLoading} isDisabled={isLoading} lg iconClass="far fa-stop-circle" />
									</div>
									<div>
										<WAOButton title="Save" color="green" clickCallback={onSave} iconClass="far fa-play-circle" lg isLoading={isLoading} isDisabled={isLoading || (isEditing && isProfileInvalid) || (isUpdatingPassword && isPasswordUpdateInvalid)} isSubmit md />
									</div>
								</div>
							)}
						</div>
					</WAOForm>
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
