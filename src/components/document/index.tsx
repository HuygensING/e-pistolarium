import * as React from 'react';
import { connect } from 'react-redux';
import { IAnnotation, AnnotationList, RenderedText } from 'pergamon-components';
import {activateAnnotation, setRootAnnotation} from "../../actions/annotation";

interface IProps {
	activateAnnotation: (a: IAnnotation) => void;
	activeAnnotation: IAnnotation;
	rootAnnotation: IAnnotation;
	setRootAnnotation: (s: string) => void;
}
class Document extends React.Component<IProps, null> {
	public componentDidMount() {
		const rootAnnotationId = this.props.match.params.id;
		this.props.setRootAnnotation(rootAnnotationId);
	}
	
	public render() {
		return (
			<div
				style={{
					flex: 9,
					display: 'flex',
					flexDirection: 'row',
				}}
			>
				<div style={{flex: 1}}>
					<RenderedText
						root={this.props.rootAnnotation}
					/>
				</div>
				<div style={{flex: 1}}>
					<AnnotationList
						activateAnnotation={this.props.activateAnnotation}
						activeAnnotation={this.props.activeAnnotation}
						rootAnnotation={this.props.rootAnnotation}
					/>
				</div>
			</div>
		);
	}
}

export default connect(
	state => ({
		activeAnnotation: state.annotation.active,
		rootAnnotation: state.annotation.root,
	}),
	{
		activateAnnotation,
		setRootAnnotation,
	}
)(Document);
