import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import GoogleAutocomplete from '../GoogleAutocomplete';

import StyledDataField from './StyledDataField';

const DataFieldLocation = ({ title, address, setAddress, setLat, setLng, isInvalid, setIsInvalid, isRequired }) => {
	const [errorMessage, setErrorMessage] = useState('');

	const getIsInvalid = newValue => {
		if (isRequired && newValue.length === 0) {
			setErrorMessage('Required');
			return true;
		}

		setErrorMessage('\u00A0');
		return false;
	};

	useEffect(() => {
		setIsInvalid(getIsInvalid(address));
    }, [address]);
    
    const onPlaceSelected = place => {
        if (place &&  place.geometry && place.geometry.location) {
		setAddress(place.formatted_address);
		setLat(place.geometry.location.lat());
        setLng(place.geometry.location.lng());
        } else {
            setAddress('');
            setLat();
            setLng();
        }
	};

	const onChange = e => {
        setAddress(e.target.value);
        setLat();
        setLng();
	};

	return (
		<StyledDataField isInvalid={isInvalid}>
			<span className="datafield-title">{address && address.length > 0 ? title : '\u00A0'}</span>
			<GoogleAutocomplete onPlaceChanged={onPlaceSelected} handleChange={onChange} address={address} />
			<div className="datafield-error">
				{isInvalid && <i className="fas fa-exclamation"></i>}
				<span>{errorMessage}</span>
			</div>
		</StyledDataField>
	);
};

export default DataFieldLocation;
