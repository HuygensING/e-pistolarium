import * as React from 'react';
import { connect } from 'react-redux';
import { Button } from 'pergamon-ui-components';
import { Link } from "react-router-dom";
import {getRootAnnotationIds} from "../../actions/root-annotation-ids";

const RootAnnotations = (props) =>
	<div
		style={{
			flex: 9,
			display: 'flex',
		}}
	>
		<div style={{flex: 1}}>
			<Button onClick={props.getRootAnnotationIds}>⟳</Button>
		</div>
		<div style={{flex: 1}}>
			{
				props.rootAnnotations.map(ra =>
					<li key={ra.id}>
						<Link to={`/documents/${ra.id}`}>{ra.id}</Link>
					</li>
				)
			}
		</div>
	</div>;

export default connect(
	state => ({
		rootAnnotations: state.rootAnnotations,
	}),
	{
		getRootAnnotationIds
	}
)(RootAnnotations);
