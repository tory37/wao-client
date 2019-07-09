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
	const colorsArray = ['black', 'red', 'blue', 'purple', 'brown', 'orange', 'green'];

	const [isLoading, setIsLoading] = useState(false);
	const [isEditing, setIsEditing] = useState(false);
	const [isUpdatingPassword, setIsUpdatingPassword] = useState(false);

	const [imageUrl, setImageUrl] = useState(auth.user.imageUrl);
	const [isImageUrlInvalid, setIsImageUrlInvalid] = useState(false);
	const [username, setUsername] = useState(auth.user.username);
	const [isUsernameInvalid, setIsUsernameInvalid] = useState(false);
	const [email, setEmail] = useState(auth.user.email);
	const [isEmailInvalid, setIsEmailInvalid] = useState(false);
	const [color, setColor] = useState(auth.user.color && auth.user.color.length > 0 ? auth.user.color : 'black');

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

		setImageUrl(auth.user.imageUrl);
		setUsername(auth.user.username);
		setEmail(auth.user.email);
		setColor(auth.user.color && auth.user.color.length > 0 ? auth.user.color : 'black');
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
				color: color
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
			updatePassword(password, confirmPassword, auth.user._id)
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
										<Img src={auth.isAuthenticated && auth.user.imageUrl && auth.user.imageUrl.length > 0 ? auth.user.imageUrl : defaultProfileImage} />
									</SkewedBox>
								</div>
							)}

							{isEditing && <DataFieldText state={imageUrl} setState={setImageUrl} isInvalid={isImageUrlInvalid} setIsInvalid={setIsImageUrlInvalid} title="Image Url" />}

							{!isEditing && <div className="userprofile-username">{auth.user.username}</div>}
							{!isEditing && <div className="spacer" />}

							{isEditing && <DataFieldText state={username} setState={setUsername} isInvalid={isUsernameInvalid} setIsInvalid={setIsUsernameInvalid} title="Username" isRequired />}

							{!isEditing && <div className="userprofile-email">{auth.user.email}</div>}

							{isEditing && <DataFieldEmail state={email} setState={setEmail} isInvalid={isEmailInvalid} setIsInvalid={setIsEmailInvalid} title="Email" isRequired />}

							<div className="spacer" />

							<ColorPicker colorsArray={colorsArray} onSelectColor={onSelectColor} selectedColor={color} isEditing={isEditing} />

							{isUpdatingPassword && (
								<div>
									<DataFieldPassword state={password} setState={setPassword} isInvalid={isPasswordInvalid} setIsInvalid={setIsPasswordInvalid} shouldValidate />
									<DataFieldConfirmPassword state={confirmPassword} setState={setConfirmPassword} isInvalid={isConfirmPasswordInvalid} setIsInvalid={setIsConfirmPasswordInvalid} password={password} />
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
										<WAOButton title="Save" color="green" clickCallback={onSave} isLoading={isLoading} isDisabled={isLoading || (isEditing && isProfileInvalid) || (isUpdatingPassword && isPasswordUpdateInvalid)} isSubmit md />
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
