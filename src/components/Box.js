import { useState } from 'react'
import '../styles/Box.css'

function Box({ box, updateBox }) {
	const [isOpen, setIsOpen] = useState(true)
	const total = box.reduce(
		(acc, boxType) => acc + boxType.amount * boxType.price,
		0
	)
	return isOpen ? (
		<div className='lmb-list'>
			<button
				className='lmb-list-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer
			</button>
			{box.length > 0 ? (
				<div>
					<h2>Box Détails</h2>
					<ul>
						{box.map(({ name, price, amount }, index) => (
							<div key={`${name}-${index}`}>
								{name} {price} m3 x {amount}
							</div>
						))}
					</ul>
					<h3>Espace requis : {total} m3</h3>
					<button onClick={() => updateBox([])}>Vider la sélection</button>
				</div>
			) : (
				<div>Vous n'avez rien sélectioner</div>
			)}
		</div>
	) : (
		<div className='lmb-list-closed'>
			<button
				className='lmb-list-toggle-button'
				onClick={() => setIsOpen(true)}
			>
			    Détails de votre Box
			</button>
		</div>
	)
}

export default Box
