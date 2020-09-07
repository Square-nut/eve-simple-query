import React from 'react'
export default class SearchTree extends React.Component {
	constructor() {
		this.state = {
			queryText: '',
		}
	}
	render() {
		return (
			<div>
				<div className="tree-search">
					<input type="text" className="tree-search-inp" />
					<input
						type="button"
						value="查询"
						className="tree-search-btn"
						onClick={() => {
							this.search
						}}
					/>
				</div>
				<div className="tree"></div>
			</div>
		)
	}
	search() {
		this.setState('queryText') = ''
	}
}
