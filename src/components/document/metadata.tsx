import * as React from 'react'

const MetadataList = (props) =>
	<ul
		style={{
			color: '#888',
			fontFamily: "'Roboto', sans-serif",
			margin: '3em auto',
			maxWidth: '550px',
		}}>
		{props.children}
	</ul>

const MetadataItem = (props) =>
	<li
		style={{
			marginBottom: '1em',
		}}>
		{props.children}
	</li>

const Label = (props) =>
	<label
		style={{
			marginLeft: '-65px',
			position: 'absolute',
			textAlign: 'right',
			width: '50px',
		}}
	>
		{props.children}
	</label>

const Bold = (props) =>
	<div style={{color: '#444', fontWeight: 700}}>{props.children}</div>

export interface IMetadata {
	metadata: any
}
const Metadata: React.SFC<IMetadata> = (props) =>
	<MetadataList>
		<MetadataItem>
			<Label>FROM</Label>
			<div>
				<Bold>{props.metadata.sender}</Bold>
				<div>{props.metadata.senderloc}</div>
			</div>
		</MetadataItem>
		<MetadataItem>
			<Label>TO</Label>
			<div>
				<Bold>{props.metadata.recipient}</Bold>
				<div>{props.metadata.recipientloc}</div>
			</div>
		</MetadataItem>
		<MetadataItem>
			<Label>DATE</Label>
			<Bold>{props.metadata.date}</Bold>
		</MetadataItem>
	</MetadataList>

export default Metadata
