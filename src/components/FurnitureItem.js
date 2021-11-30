import '../styles/FurnitureItem.css'


function FurnitureItem({ cover, name, price }) {
	return (
		<li className='lmb-furniture-item'>
			<span className='lmb-furniture-item-price'>{price} m3</span>
			<img className='lmb-furniture-item-cover' src={cover} alt={`${name} cover`} />
			{name}
		
		</li>
	)
}

export default FurnitureItem
