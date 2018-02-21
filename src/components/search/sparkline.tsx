import * as React from 'react'

const Wrapper = (props) =>
	<div
		style={{
			bottom: 0,
			display: 'grid',
			gridTemplateColumns: '320px 3em auto 1em',
			margin: '0 auto',
			left: 0,
			right: 0,
			pointerEvents: 'none',
			position: 'fixed',
			width: '1100px',
		}}
	>
		{props.children}
	</div>

const SparklineBorder = (props) =>
	<div
		style={{
			backgroundColor: 'white',
			border: '1px solid #ccc',
			boxShadow: '0 0 20px rgba(0,0,0,0.19), 0 0 6px rgba(0,0,0,0.23)',
			height: '40px',
			padding: '1em 1em 1.25em 1em',
		}}
	>
		{props.children}
	</div>


export interface IProps {
	aggregate: any[]
}

export default class Sparkline extends React.PureComponent<IProps> {
	private timeline

	public async componentDidMount() {
		this.timeline = await import('timeline')
	}

	public render() {
		if (
			this.timeline == null || 
			!this.props.aggregate.length
		) return null

		return (
			<Wrapper>
				<div />
				<div />
				{
					this.props.aggregate.length > 1 &&
					<SparklineBorder>
						<this.timeline.default
							aggregate={this.props.aggregate}
							domains={[{
								domainLabels: true,
								rulers: false,
								type: this.timeline.DomainType.Sparkline,
							}]}
							from={new Date(this.props.aggregate[0].year, 0, 1)}
							to={new Date(this.props.aggregate[this.props.aggregate.length - 1].year, 0, 1)}
						/>
						<div />
					</SparklineBorder>
				}
				<div />
			</Wrapper>

		)
	}
}