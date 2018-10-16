import * as React from 'react'

const Wrapper = (props) =>
	<a
		href={`/documents/${props.result.id}`}
		style={{
			display: 'grid',
			gridTemplateRows: '1fr .5fr .5fr 1fr 1fr',
			gridTemplateColumns: '4fr auto 4fr',
			textDecoration: 'none',
		}}
	>
		{props.children}
	</a>

interface ICell {
	bold?: boolean
	small?: boolean
	right?: boolean
}
const Cell: React.SFC<ICell> = (props) =>
	<div
		style={{
			color: props.small ? '#888' : 'black',
			fontSize: props.small ? '.85em' : '1em',
			fontWeight: props.bold ? 'bold' : 'normal',
			textAlign: props.right ? 'right' : 'left'
		}}
	>
		{props.children}
	</div>

const ResultBody: React.SFC<any> = (props) =>
	<Wrapper result={props.result}>
		<Cell bold>{props.result.date}</Cell>
		<div/>
		<Cell right>{props.result.correspondence}</Cell>
		<div style={{ gridColumn: '1 / 4' }} />
		<div style={{ borderTop: '1px solid #CCC', gridColumn: '1 / 4' }} />
		<Cell>{props.result.sender}</Cell>
		<div>⇒</div>
		<Cell right>{props.result.recipient}</Cell>
		<Cell small>{props.result.senderloc}</Cell>
		<div/>
		<Cell right small>{props.result.recipientloc}</Cell>
	</Wrapper>

export default ResultBody
				// </div>
				// <div
				// 	style={{
				// 		color: '#888',
				// 		fontSize: '.85em',
				// 	}}
				// >
				// </div>