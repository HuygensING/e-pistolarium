import * as React from 'react'
import Suggestion, { ISuggestion } from './suggestion';
import { fontStyle } from 'pergamon-ui-components';
import { searchSemanticSuggestions } from '../../../actions/full-text-search'
import * as debounce from 'lodash.debounce'

const Wrapper: React.SFC<{ suggestions: ISuggestion[] }> = (props) =>
	<div
		style={{
			...fontStyle,
			backgroundColor: '#f9f9f9',
			marginTop: '1em',
			padding: props.suggestions.length > 0 ? '.5em' : 0,
		}}
	>
		{props.children}
	</div>

const Suggestions: React.SFC = (props) =>
	<ul
		style={{
			listStyle: 'none',
			margin: '.5em 0 0 0',
			padding: 0,
		}}
	>
		{props.children}
	</ul>

export interface Props {
	onClick: (q: string) => void
	// requesting: boolean
	// semanticSuggestions: ISuggestion[]
	query: string
}
interface State {
	requesting: boolean
	suggestions: ISuggestion[]
}
export default class SemanticSuggestions extends React.PureComponent<Props, State> {
	state: State = {
		requesting: false,
		suggestions: []
	}

	async componentDidUpdate(prevProps: Props) {
		if (prevProps.query !== this.props.query) {
			this.requestSemanticSuggestions()
		}
	}

	private semanticSuggestions = async () => {
		this.setState({ requesting: true })
		const suggestions = await searchSemanticSuggestions(this.props.query)
		if (Array.isArray(suggestions)) this.setState({ requesting: false, suggestions })
	}
	private requestSemanticSuggestions = debounce(this.semanticSuggestions, 600)

	render() {
		return (
			<Wrapper suggestions={this.state.suggestions}>
				{
					this.state.requesting &&
					<p
						style={{
							alignItems: 'center',
							display: 'grid',
							fontSize: '0.9em',
							gridTemplateColumns: '62px auto',
							justifyItems: 'center',
							padding: '.5em',
						}}
					>
						<img
							src="/static/graphics/ui/loader.svg"
							style={{
								height: 'auto',
								width: '30px',
							}}
						/>
						Generating semantic suggestions for better search results.
					</p>
				}
				{
					(this.state.suggestions.length > 0) &&
					<p>
						The ePistolarium has found {this.state.suggestions.length} terms that are used in the same context.
						You can add them to improve your search results:
					</p>
				}
				{
					(this.state.suggestions.length > 0) &&
					<Suggestions>
						{
							this.state.suggestions.map(((s: ISuggestion) =>
								<Suggestion
									key={s.text}
									onClick={(ev) => this.props.onClick(s.text)}
									suggestion={s}
								/>
							))
						}
					</Suggestions>
				}
			</Wrapper>
		)
	}
}
