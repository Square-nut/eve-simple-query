import SearchBar from './SearchBar'
import Navigator from './Navigator'
import Container from './Container'
import React from 'react'
export default class Main extends React.component {
	render() {
		return (
			<div>
				<Navigator />
				<SearchBar />
				<Container />
			</div>
		)
	}
}
