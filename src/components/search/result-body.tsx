import * as React from 'react'
import { IResultBody } from 'huc-ui-components'

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

const ResultBody: React.SFC<IResultBody> = (props) =>
	<section>
			<div
				style={{
					display: 'grid',
					gridTemplateRows: '1fr .5fr .5fr 1fr 1fr',
					gridTemplateColumns: '4fr auto 4fr',
				}}
			>
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
			</div>
	</section>

export default ResultBody
				// </div>
				// <div
				// 	style={{
				// 		color: '#888',
				// 		fontSize: '.85em',
				// 	}}
				// >
				// </div>