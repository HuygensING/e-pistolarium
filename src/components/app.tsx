import * as React from 'react';
import { HucBrandLabel, HucHeader } from 'huc-ui-components';
// import { changeLocation } from '../utils'

const Wrapper = (props) => 
	<div style={{
		display: 'grid',
		gridTemplateRows: '10vh 90vh',
	}}>
		{props.children}
	</div>

export default (props) => (
	<Wrapper>
		<HucHeader
			title="Correspondence"
			menuItems={["Home", "Correspondence", "About"]}
			menuLocations={{
				About: "/about",
				Correspondence: "/search",
				Home: "/",
			}}
		/>
		<HucBrandLabel />
		<main>
			{props.children}
		</main>
	</Wrapper>
)