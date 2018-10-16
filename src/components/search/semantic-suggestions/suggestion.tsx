import * as React from 'react'

export interface ISuggestion {
	text: string
	weight: number
}

export interface ISuggestionProps {
	onClick: (ev: any) => void
	suggestion: ISuggestion
}
export interface ISuggestionState {
	hover: boolean
}
class Suggestion extends React.PureComponent<ISuggestionProps, ISuggestionState> {
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
					color: this.state.hover ? 'black' : '#444',
					cursor: 'pointer',
					display: 'grid',
					gridTemplateColumns: '4fr 1fr',
				}}
			>
				{this.props.suggestion.text} 
				<span 
					style={{
						color: this.state.hover ? 'black' : '#aaa',
						fontSize: '14px',
						textAlign: 'right',
					}}
				>
					{Math.round(100 * this.props.suggestion.weight)}%
				</span>
			</li>
		)
	}
}

export default Suggestion