import React from 'react'
import Button from './components/Button'
import Header from './components/Header'

function App() {
	return (
		<div className='App'>
			<Header />
			<main>
				<div className='container'>
					<h1>Welcome To Pizza Kitchen</h1>
					<Button>CREATE YOUR PIZZA</Button>
				</div>
			</main>
		</div>
	)
}

export default App
