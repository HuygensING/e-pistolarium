import * as React from 'react'
import { connect } from 'react-redux'
import { IAnnotation, PergamonUITags, RenderedText } from 'pergamon-ui-components'
import {activateAnnotation, setRootAnnotation, fetchKeywords} from "../../actions/annotation"
import { Aside } from 'huc-ui-components'
import OffCanvasAside from './aside'
import Header from './header'
import { fetchNextSearchResult } from '../../actions/search';
import { Annotation, TreeNode } from 'pergamon-ui-components'

const textDivStyle = (activeAside: Aside): React.CSSProperties => ({
	boxSizing: 'border-box',
	minWidth: '648px',
	padding: '1em 1em 1em calc(65px + 1em)',
	transition: 'all 300ms',
	whiteSpace: 'normal',
	width: activeAside === Aside.None ? '100%' : 'calc(100% - 440px)',
});

interface IProps {
	activateAnnotation: (id: string) => void
	activeAnnotation: IAnnotation
	fetchKeywords: (root: Annotation) => void
	fetchNextSearchResult: () => void
	match: any
	rootAnnotation: Annotation
	lastSearchResult: any[]
	setRootAnnotation: (s: string) => void
}
interface IState {
	activeAside: Aside
	tree: TreeNode[]
}
class Document extends React.PureComponent<IProps, IState> {
	public state = {
		activeAside: Aside.Annotations,
		tree: null,
	}

	public componentDidMount() {
		const rootAnnotationId = this.props.match.params.id
		this.props.setRootAnnotation(rootAnnotationId)
	}

	public componentWillReceiveProps(nextProps) {
		if (this.props.match.params.id !== nextProps.match.params.id) {
			this.props.setRootAnnotation(nextProps.match.params.id)
		}
		else if (this.props.rootAnnotation !== nextProps.rootAnnotation) {
			this.props.setRootAnnotation(nextProps.rootAnnotation.id)
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
					<Header
						fetchNextSearchResult={this.props.fetchNextSearchResult}
						rootAnnotation={this.props.rootAnnotation}
						lastSearchResult={this.props.lastSearchResult}
					/>
					<div style={{ maxWidth: '700px', margin: 'auto' }}>
						<RenderedText
							activateAnnotation={this.props.activateAnnotation}
							activeAnnotation={this.props.activeAnnotation}
							onChange={(tree) => this.setState({ tree })}
							root={this.props.rootAnnotation}
							tags={PergamonUITags}
						/>
					</div>
				</article>
				<OffCanvasAside
					activateAnnotation={this.props.activateAnnotation}
					activeAnnotation={this.props.activeAnnotation}
					fetchKeywords={this.props.fetchKeywords}
					onChangeActiveAside={(activeAside) => {
						const prevActiveAside = this.state.activeAside
						this.setState({ activeAside }, () => {
							if (prevActiveAside === Aside.None || activeAside === Aside.None) {
								// Set a timeout, because the resize has to be triggered
								// after the aside's slide animation is finished!
								setTimeout(() => {
									window.dispatchEvent(new Event('resize'))
								}, 350)
							}
						})
					}}
					rootAnnotation={this.props.rootAnnotation}
					tree={this.state.tree}
				/>
			</section>
		);
	}
}

export default connect(
	state => ({
		activeAnnotation: state.annotation.active,
		rootAnnotation: state.annotation.root,
		lastSearchResult: state.search.results[state.search.results.length - 1],
	}),
	{
		activateAnnotation,
		fetchKeywords,
		fetchNextSearchResult,
		setRootAnnotation,
	}
)(Document);
