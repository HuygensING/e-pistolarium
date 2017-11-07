import * as React from 'react'
import { connect } from 'react-redux'
import { IAnnotation, Button, PergamonUITags, RenderedText } from 'pergamon-ui-components'
import {activateAnnotation, setRootAnnotation} from "../../actions/annotation"
import { Aside } from 'huc-ui-components'
import OffCanvasAside from './aside'
import Metadata from './metadata'

interface IProps {
	activateAnnotation: (a: IAnnotation) => void;
	activeAnnotation: IAnnotation;
	match: any;
	rootAnnotation: IAnnotation;
	setRootAnnotation: (s: string) => void;
}

interface IState {
	activeAside: Aside;
}

const textDivStyle = (activeAside: Aside): React.CSSProperties => ({
	boxSizing: 'border-box',
	padding: '1em',
	transition: 'all 300ms',
	whiteSpace: 'normal',
	width: activeAside === Aside.None ? '100%' : '50%',
});

class Document extends React.Component<IProps, IState> {
	public state = {
		activeAside: Aside.Annotations,
	}

	public componentDidMount() {
		const rootAnnotationId = this.props.match.params.id;
		this.props.setRootAnnotation(rootAnnotationId);
	}

	public componentWillReceiveProps(nextProps) {
		const rootAnnotationId = nextProps.match.params.id;
		if (this.props.rootAnnotation.id !== rootAnnotationId) {
			this.props.setRootAnnotation(rootAnnotationId);
		}
	}
	
	public render() {
		return (
			<section
				style={{
					height: '100%',
					whiteSpace: 'nowrap',
				}}
			>
				<article style={textDivStyle(this.state.activeAside)}>
					<Metadata rootAnnotation={this.props.rootAnnotation} />
					<div style={{ maxWidth: '700px', margin: 'auto' }}>
						<RenderedText
							activateAnnotation={this.props.activateAnnotation}
							activeAnnotation={this.props.activeAnnotation}
							root={this.props.rootAnnotation}
							tags={PergamonUITags}
						/>
					</div>
				</article>
				<OffCanvasAside
					activateAnnotation={this.props.activateAnnotation}
					activeAnnotation={this.props.activeAnnotation}
					onChangeActiveAside={(activeAside) => this.setState({ activeAside })}
					rootAnnotation={this.props.rootAnnotation}
				/>
			</section>
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
