import { useState } from 'react'
import { itemList } from '../datas/itemList'
import FurnitureItem from './FurnitureItem'
import Categories from './Categories'
import '../styles/DetailList.css'

function DetailList({ box, updateBox }) {
	const [activeCategory, setActiveCategory] = useState('')
	const categories = itemList.reduce(
		(acc, item) =>
			acc.includes(item.category) ? acc : acc.concat(item.category),
		[]
	)

	function addToBox(name, price) {
		const currentFurnitureSaved = box.find((item) => item.name === name)
		if (currentFurnitureSaved) {
			const boxFilteredCurrentItem = box.filter(
				(item) => item.name !== name
			)
			updateBox([
				...boxFilteredCurrentItem,
				{ name, price, amount: currentFurnitureSaved.amount + 1 }
			])
		} else {
			updateBox([...box, { name, price, amount: 1 }])
		}
	}

	return (
		<div className='lmb-allitem-list'>
			<Categories
				categories={categories}
				setActiveCategory={setActiveCategory}
				activeCategory={activeCategory}
			/>

			<ul className='lmb-item-list'>
				{itemList.map(({ id, cover, name, price, category }) =>
					!activeCategory || activeCategory === category ? (
						<div key={id}>
							<FurnitureItem
								cover={cover}
								name={name}
								price={price}
							/>
							<button className='lmb-item-button' onClick={() => addToBox(name, price)}>Ajouter</button>
						</div>
					) : null
				)}
			</ul>
		</div>
	)
}

export default DetailList
