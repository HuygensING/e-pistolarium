import * as React from 'react'
import { Annotation } from 'pergamon-ui-components'

const downloadStringAsFile = (str, mimeType='text/plain') => {
	const a = document.createElement('a')
	const href = URL.createObjectURL(new Blob([str], { type: mimeType }))
	a.href = href
	a.target = '_blank'
	document.body.appendChild(a)
	a.click()
	document.body.removeChild(a)
	// URL.revokeObjectURL(href)
}

const MetadataList = (props) =>
	<ul
		style={{
			fontFamily: "'Roboto', sans-serif",
			listStyle: 'none',
			margin: '3em 0',
			maxWidth: '550px',
			padding: 0,
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
	fetchKeywords: (root: Annotation) => void
	rootAnnotation: Annotation
}
class Metadata extends React.PureComponent<IMetadata, null> {
	public componentWillReceiveProps(nextProps: IMetadata) {
		const root = nextProps.rootAnnotation
		if (root.id != null) nextProps.fetchKeywords(root)
	}

	public render() {
		return (
			<MetadataList>
				<MetadataItem>
					<Label>XML</Label>
					<div>
						<button
							onClick={async () => {
								const response = await fetch(`/api/documents/${this.props.rootAnnotation.id}/orig`)
								const xml = await response.text()
								downloadStringAsFile(xml, 'text/xml')
							}}
						>
							Download
						</button>
					</div>
				</MetadataItem>
				<MetadataItem>
					<Label>ID</Label>
					<div>{this.props.rootAnnotation.id}</div>
				</MetadataItem>
				<MetadataItem>
					<Label>CORRESPONDENCE</Label>
					<div>{this.props.rootAnnotation.metadata.get('correspondence')}</div>
				</MetadataItem>
				<MetadataItem>
					<Label>DATE</Label>
					<div>{this.props.rootAnnotation.metadata.get('date')}</div>
				</MetadataItem>
				<MetadataItem>
					<Label>SENDER</Label>
					<div>{this.props.rootAnnotation.metadata.get('sender')}</div>
				</MetadataItem>
				<MetadataItem>
					<Label>SENDER LOCATION</Label>
					<div>{this.props.rootAnnotation.metadata.get('senderloc')}</div>
				</MetadataItem>
				<MetadataItem>
					<Label>RECIPIENT</Label>
					<div>{this.props.rootAnnotation.metadata.get('recipient')}</div>
				</MetadataItem>
				<MetadataItem>
					<Label>RECIPIENT LOCATION</Label>
					<div>{this.props.rootAnnotation.metadata.get('recipientloc')}</div>
				</MetadataItem>
			</MetadataList>
		)
	}
}


export default Metadata
