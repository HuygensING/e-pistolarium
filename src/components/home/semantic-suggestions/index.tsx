import * as React from 'react'
import Suggestion, { ISuggestion } from './suggestion';

interface ISemanticSuggestions {
	onClickSuggestion: (query: string) => void
	suggestions: ISuggestion[]
}
const SemanticSuggestions: React.SFC<ISemanticSuggestions> = (props) =>
	<section>
		<ul>
			{
				props.suggestions.map(((s: ISuggestion) =>
					<Suggestion
						key={s.text}
						onClick={(ev) => props.onClickSuggestion(s.text)}
						suggestion={s}
					>
						{s.text}
					</Suggestion>
				))
			}
		</ul>
	</section>

export default SemanticSuggestions