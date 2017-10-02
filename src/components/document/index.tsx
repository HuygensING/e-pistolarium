import * as React from 'react';
import { connect } from 'react-redux';
import { IAnnotation, AnnotationList, Button, ePistolariumTags, RenderedText } from 'pergamon-components';
import {activateAnnotation, setRootAnnotation} from "../../actions/annotation";

interface IProps {
	activateAnnotation: (a: IAnnotation) => void;
	activeAnnotation: IAnnotation;
	match: any;
	rootAnnotation: IAnnotation;
	setRootAnnotation: (s: string) => void;
}

enum Aside { None, Annotations, Visualisations }
interface IState {
	activeAside: Aside;
}

const textDivStyle = (activeAside: Aside): React.CSSProperties => ({
	boxSizing: 'border-box',
	padding: '1em',
	transition: 'all 300ms',
	whiteSpace: 'normal',
	width: activeAside === Aside.None ? '100%' : '50%',
});

const asideStyle = (activeAside: Aside): React.CSSProperties => ({
	bottom: 0,
	boxSizing: 'border-box',
	display: 'grid',
	gridTemplateColumns: '40px auto',
	left: activeAside === Aside.None ? 'calc(100% - 40px)' : '50%',
	overflow: 'hidden',
	position: 'absolute',
	right: 0,
	top: '8vh',
	transition: 'left 300ms',
	whiteSpace: 'normal',
	width: '50%',
});

const asideBodyStyle: React.CSSProperties = {
	backgroundColor: '#EEE',
	overflow: 'auto',
	padding: '1em',
};

class Document extends React.Component<IProps, IState> {
	public state = {
		activeAside: Aside.Annotations,
	}

	public componentDidMount() {
		const rootAnnotationId = this.props.match.params.id;
		this.props.setRootAnnotation(rootAnnotationId);
	}
	
	public render() {
		return (
			<div
				style={{
					height: '100%',
					whiteSpace: 'nowrap',
				}}
			>
				<div style={textDivStyle(this.state.activeAside)}>
					<div style={{ maxWidth: '700px', margin: 'auto' }}>
						<RenderedText
							activeAnnotation={this.props.activeAnnotation}
							root={this.props.rootAnnotation}
							tags={ePistolariumTags}
						/>
					</div>
				</div>
				<div style={asideStyle(this.state.activeAside)}>
					<ul
						style={{
							alignSelf: 'center',
							justifySelf: 'end',
						}}
					>
						<li onClick={() => this.setState({ activeAside: Aside.Annotations })}>
							<Button>a</Button>
						</li>
						<li onClick={() => this.setState({ activeAside: Aside.Visualisations })}>
							<Button>v</Button>
						</li>
					</ul>
					<div style={asideBodyStyle}>
						<AnnotationList
							activateAnnotation={this.props.activateAnnotation}
							activeAnnotation={this.props.activeAnnotation}
							rootAnnotation={this.props.rootAnnotation}
						/>
					</div>
					{
						this.state.activeAside !== Aside.None && 
						<Button
							bare
							onClick={() => this.setState({ activeAside: Aside.None })}
							style={{
								position: 'absolute',
								right: '1em',
								top: '1em',
							}}
						>
							x
						</Button>
					}
				</div>
			</div>
		);
	}
}

export default connect(
	state => ({
		activeAnnotation: state.annotation.active,
		rootAnnotation: state.annotation.root,
	}),
	{
		activateAnnotation,
		setRootAnnotation,
	}
)(Document);
