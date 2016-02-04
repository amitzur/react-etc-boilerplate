import React from 'react';

export default React.createClass({

	getInitialState: function() {
		return {
			audience: "..."
		};
	},

	componentWillMount: function() {
		setTimeout(_ => {
			this.setState({ audience: "world" });
		}, 1000);
	},

	render: function() {
		return (
			<div>
				Hello, 
				<span className="something">{this.state.audience}</span>
			</div>
		);
	}
});