import * as React from 'react';
import { connect } from 'react-redux';
import { IAnnotation, AnnotationList, Button, RenderedText } from 'pergamon-components';
import {activateAnnotation, setRootAnnotation} from "../../actions/annotation";

interface IProps {
	activateAnnotation: (a: IAnnotation) => void;
	activeAnnotation: IAnnotation;
	rootAnnotation: IAnnotation;
	setRootAnnotation: (s: string) => void;
}

enum Aside { None, Annotations, Visualisations }
interface IState {
	activeAside: Aside;
}

const textDivStyle = (activeAside: Aside): React.CSSProperties => ({
	boxSizing: 'border-box',
	display: 'inline-block',
	transition: 'all 300ms',
	verticalAlign: 'top',
	whiteSpace: 'normal',
	width: activeAside === Aside.None ? '100%' : '50%',
});

const asideStyle: React.CSSProperties = {
	backgroundColor: '#EEE',
	boxSizing: 'border-box',
	display: 'inline-block',
	height: '100%',
	padding: '1em',
	position: 'relative',
	verticalAlign: 'top',
	width: '50%',
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
					<div style={{ width: '700px', margin: 'auto' }}>
						<RenderedText
							activeAnnotation={this.props.activeAnnotation}
							root={this.props.rootAnnotation}
						/>
					</div>
				</div>
				<div style={asideStyle}>
					<ul
						style={{
							position: 'absolute',
							left: '-2em',
							top: '50%',
							width: '2em',
						}}
					>
						<li onClick={() => this.setState({ activeAside: Aside.Annotations })}>
							<Button>a</Button>
						</li>
						<li onClick={() => this.setState({ activeAside: Aside.Visualisations })}>
							<Button>v</Button>
						</li>
					</ul>
					{
						this.state.activeAside !== Aside.None && 
						<Button
							bare
							onClick={() => this.setState({ activeAside: Aside.None })}
							style={{
								position: 'absolute',
								right: 0
							}}
						>
							x
						</Button>
					}
					<AnnotationList
						activateAnnotation={this.props.activateAnnotation}
						activeAnnotation={this.props.activeAnnotation}
						rootAnnotation={this.props.rootAnnotation}
					/>
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
