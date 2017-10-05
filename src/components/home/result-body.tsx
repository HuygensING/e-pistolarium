import * as React from 'react'
import { IResultBody } from 'huc-ui-components'

interface ICell {
	colSpan?: number;
	right?: boolean;
}
const Cell: React.SFC<ICell> = (props) =>
	<td
		colSpan={props.colSpan}
		style={{
			textAlign: props.right ? 'right' : 'left'
		}}
	>
		{props.children}
	</td>

const ResultBody: React.SFC<IResultBody> = (props) =>
	<section>
		<table
			style={{
				width: '100%'
			}}
		>
			<tbody>
				<tr
					style={{
						fontWeight: 'bold'
					}}
				>
					<Cell colSpan={2}>{props.result.date}</Cell>
				</tr>
				<tr>
					<Cell>{props.result.sender}</Cell>
					<Cell right>{props.result.recipient}</Cell>
				</tr>
				<tr
					style={{
						color: '#888',
						fontSize: '.85em',
					}}
				>
					<Cell>{props.result.senderloc}</Cell>
					<Cell right>{props.result.recipientloc}</Cell>
				</tr>
			</tbody>
		</table>
	</section>

export default ResultBody