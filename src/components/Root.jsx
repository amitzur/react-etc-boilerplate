import React from 'react';
import style from '../stylesheets/root.scss';

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
			<div className={style.root}>
				Hello, 
				<span className="something">{this.state.audience}</span>
			</div>
		);
	}
});