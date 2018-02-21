import * as React from 'react'
import { PergamonUITags, RenderedText } from 'pergamon-ui-components'
import App from '../app'
import { IProps } from '../../props'
import { Aside } from 'huc-ui-components'
import OffCanvasAside from './aside'
import Header from './header'
import { activateAnnotation } from '../../actions/annotation';

const Article = (props) =>
	<article
		style={{
			boxSizing: 'border-box',
			minWidth: '648px',
			padding: '1em 1em 1em calc(65px + 1em)',
			transition: 'all 300ms',
			whiteSpace: 'normal',
			width: props.activeAside === Aside.None ? '100%' : 'calc(100% - 440px)',
		}}
	>
		{props.children}
	</article>

// ToDo Move to Document as method
const highlightTerm = (el, searchResults, keyword) => {
	const hi = async (term, options = {}) => {
		const Mark = await import('mark.js')
		const inst = new Mark(el)
		inst.unmark()
		inst.mark(term, options)
	}

	if (el != null) {
		if (keyword != null) {
			hi(keyword, { accuracy: "exactly" })
		}
		else if (
			searchResults != null &&
			searchResults.hasOwnProperty('query') &&
			searchResults.query.hasOwnProperty('query_string') &&
			searchResults.query.query_string.hasOwnProperty('query')
		) {
			hi(searchResults.query.query_string.query)
		}
	}
}

interface IState {
	activeAside: Aside
	keyword: string
}
export default class Document extends React.PureComponent<Partial<IProps>, IState> {
	public state = {
		activeAside: Aside.Annotations,
		keyword: null,
	}
	
	public render() {
		return (
			<App>
				<section
					style={{
						height: '100%',
						whiteSpace: 'nowrap',
					}}
				>
					<Article activeAside={this.state.activeAside}>
						<Header
							rootAnnotation={this.props.annotations.rootAnnotation}
							searchResults={this.props.search.results}
						/>
						<div style={{ maxWidth: '700px', margin: 'auto' }}>
							<RenderedText
								activateAnnotation={activateAnnotation}
								activeAnnotation={this.props.annotations.activeAnnotation}
								onRef={(el) => highlightTerm(el, this.props.search.results, this.state.keyword)}
								root={this.props.annotations.rootAnnotation}
								tags={PergamonUITags}
							/>
						</div>
					</Article>
					<OffCanvasAside
						activateAnnotation={activateAnnotation}
						activeAnnotation={this.props.annotations.activeAnnotation}
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
						onClickKeyword={(keyword) => this.setState({ keyword })}
						rootAnnotation={this.props.annotations.rootAnnotation}
					/>
				</section>
			</App>
		);
	}
}

