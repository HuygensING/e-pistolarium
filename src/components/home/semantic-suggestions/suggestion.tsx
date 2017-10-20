import * as React from 'react'

export interface ISuggestion {
	text: string
	weight: number
}

interface ISuggestionProps {
	onClick: (ev: any) => void
	suggestion: ISuggestion
}
interface ISuggestionState {
	hover: boolean
}
class Suggestion extends React.Component<ISuggestionProps, ISuggestionState> {
	public state = {
		hover: false,
	}

	public render() {
		return (
			<li
				onClick={this.props.onClick}
				onMouseEnter={() => this.setState({ hover: true })}
				onMouseLeave={() => this.setState({ hover: false })}
				style={{
					background: this.state.hover ? '#245b6d' : `linear-gradient(to right, lightblue 0%, lightblue ${100 * this.props.suggestion.weight}%, white ${20 + (100 * this.props.suggestion.weight)}%, white 100%)`,
					borderRadius: '3px',
					color: this.state.hover ? 'white' : 'inherit',
					cursor: 'pointer',
					marginBottom: '0.3em',
					marginRight: '0.2em',
					padding: '0.1em 0.3em',
				}}
			>
				{this.props.children}
			</li>
		)
	}
}

export default Suggestion