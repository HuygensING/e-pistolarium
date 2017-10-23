import * as React from 'react'
import Suggestion, { ISuggestion } from './suggestion';

interface ISemanticSuggestions {
	fullTextSearch: (q: string) => void
	semanticSuggestions: ISuggestion[]
}
const SemanticSuggestions: React.SFC<ISemanticSuggestions> = (props) =>
	<ul style={{marginTop: '.5em'}}>
		{
			props.semanticSuggestions.map(((s: ISuggestion) =>
				<Suggestion
					key={s.text}
					onClick={(ev) => props.fullTextSearch(s.text)}
					suggestion={s}
				>
					{s.text}
				</Suggestion>
			))
		}
	</ul>

export default SemanticSuggestions