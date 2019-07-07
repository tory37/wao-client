import React from 'react';
class Autocomplete extends React.Component {
	constructor(props) {
		super(props);
		this.autocompleteInput = React.createRef();
		this.autocomplete = null;
		this.handlePlaceChanged = this.handlePlaceChanged.bind(this);
	}

	componentDidMount() {
		var options = {
			types: ['address'],
			componentRestrictions: {
				country: 'US'
			}
		};
		this.autocomplete = new window.google.maps.places.Autocomplete(this.autocompleteInput.current, options);
		this.autocomplete.addListener('place_changed', this.handlePlaceChanged);
	}

	handlePlaceChanged() {
		const place = this.autocomplete.getPlace();
		this.props.onPlaceChanged(place);
	}

	render() {
		return <input ref={this.autocompleteInput} onChange={this.props.handleChange} value={this.props.address} id="autocomplete" placeholder="Address" type="text" />;
	}
}

export default Autocomplete;
