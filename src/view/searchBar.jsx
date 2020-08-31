class Searchbar extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div className="search-bar">
				<select className="bar-sel dib"></select>
				<input className="bar-inp dib" type="text"></input>
				<button className="bar-btn dib">查询</button>
			</div>
		)
	}
}
