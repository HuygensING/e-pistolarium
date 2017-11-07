import * as React from 'react'
import { IAnnotation } from 'pergamon-ui-components'

const MetadataList = (props) =>
	<ul
		style={{
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
			color: '#888',
			fontSize: '.7em',
		}}
	>
		{props.children}
	</label>

export interface IMetadata {
	rootAnnotation: IAnnotation
}
const Metadata: React.SFC<IMetadata> = (props) =>
	<MetadataList>
		<MetadataItem>
			<Label>ID</Label>
			<div>{props.rootAnnotation.id}</div>
		</MetadataItem>
		<MetadataItem>
			<Label>DATE</Label>
			<div>{props.rootAnnotation.metadata.date}</div>
		</MetadataItem>
		<MetadataItem>
			<Label>SENDER</Label>
			<div>{props.rootAnnotation.metadata.sender}</div>
		</MetadataItem>
		<MetadataItem>
			<Label>SENDER LOCATION</Label>
			<div>{props.rootAnnotation.metadata.senderloc}</div>
		</MetadataItem>
		<MetadataItem>
			<Label>RECIPIENT</Label>
			<div>{props.rootAnnotation.metadata.recipient}</div>
		</MetadataItem>
		<MetadataItem>
			<Label>RECIPIENT LOCATION</Label>
			<div>{props.rootAnnotation.metadata.recipientloc}</div>
		</MetadataItem>
	</MetadataList>

export default Metadata
