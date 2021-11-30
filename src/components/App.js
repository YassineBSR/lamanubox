import { useState } from 'react'
import Banner from './Banner'
import logo from '../assets/logo.png'
import Box from './Box'
import DetailList from './DetailList'
import BoxList from './BoxList'
import '../styles/Layout.css'

function App() {
	const [box, updateBox] = useState([])
	return (
		<div>
			<Banner>
				<img src={logo} alt='LA MANU BOX' className='lmb-logo' />
				<h1 className='lmb-title'>LA MANU BOX</h1>
			</Banner>
			<div className='lmb-layout-inner'>
				<Box box={box} updateBox={updateBox} />
				<DetailList box={box} updateBox={updateBox} />
			</div>
			<div>
				<BoxList />
			</div>
		
		</div>
	)
}

export default App
