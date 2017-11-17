import * as React from 'react'
import { connect } from 'react-redux'
import { IAnnotation, Button, Metadata, PergamonUITags, RenderedText } from 'pergamon-ui-components'
import {activateAnnotation, setRootAnnotation, fetchKeywords} from "../../actions/annotation"
import { Aside } from 'huc-ui-components'
import OffCanvasAside from './aside'

interface IProps {
	activateAnnotation: (a: IAnnotation) => void
	activeAnnotation: IAnnotation
	fetchKeywords: (root: IAnnotation) => void
	match: any
	rootAnnotation: IAnnotation
	setRootAnnotation: (s: string) => void
}

interface IState {
	activeAside: Aside;
}

const textDivStyle = (activeAside: Aside): React.CSSProperties => ({
	boxSizing: 'border-box',
	padding: '1em 1em 1em calc(65px + 1em)',
	transition: 'all 300ms',
	whiteSpace: 'normal',
	width: activeAside === Aside.None ? '100%' : 'calc(100% - 440px)',
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
					fetchKeywords={this.props.fetchKeywords}
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
		fetchKeywords,
		setRootAnnotation,
	}
)(Document);
