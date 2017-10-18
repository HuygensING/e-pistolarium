import * as React from 'react'
import {
	RefinementListFilter,
	SearchBox,
	SearchkitComponent,
	SearchkitManager,
	SearchkitProvider
} from 'searchkit'

const searchkit = new SearchkitManager("http://localhost:3000/es")

class Facets extends React.Component<null, null> {
	public render() {
		return (
			<SearchkitProvider searchkit={searchkit}>
				<RefinementListFilter id="count_per_sender" field="sender" title="Senders" />
			</SearchkitProvider>
		)
	}
}

export default Facets