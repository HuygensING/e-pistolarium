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
	fetchKeywords: (root: IAnnotation) => void
	rootAnnotation: IAnnotation
}
class Metadata extends React.Component<IMetadata, null> {
	public componentWillReceiveProps(nextProps) {
		const root = nextProps.rootAnnotation
		if (root.id != null) nextProps.fetchKeywords(root)
	}

	public render() {
		return (
			<MetadataList>
				<MetadataItem>
					<Label>ID</Label>
					<div>{this.props.rootAnnotation.id}</div>
				</MetadataItem>
				<MetadataItem>
					<Label>DATE</Label>
					<div>{this.props.rootAnnotation.metadata.date}</div>
				</MetadataItem>
				<MetadataItem>
					<Label>SENDER</Label>
					<div>{this.props.rootAnnotation.metadata.sender}</div>
				</MetadataItem>
				<MetadataItem>
					<Label>SENDER LOCATION</Label>
					<div>{this.props.rootAnnotation.metadata.senderloc}</div>
				</MetadataItem>
				<MetadataItem>
					<Label>RECIPIENT</Label>
					<div>{this.props.rootAnnotation.metadata.recipient}</div>
				</MetadataItem>
				<MetadataItem>
					<Label>RECIPIENT LOCATION</Label>
					<div>{this.props.rootAnnotation.metadata.recipientloc}</div>
				</MetadataItem>
			</MetadataList>
		)
	}
}


export default Metadata
