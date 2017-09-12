import * as React from 'react';
import {Link} from "react-router-dom";

export default (props) =>
	<div
		className="home"
		style={{
			flex: 9
		}}
	>
		<Link to="/root-annotations">Root annotations</Link><br />
	</div>;

