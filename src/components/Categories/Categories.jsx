import React, { useState } from 'react';

const Categories = (props) => {
	const [active, setActive] = useState(null);
	let changeActive = (index) => {
		setActive(index);
	};

	let categoriesButton = props.categories.categories.map((c, index) => (
		<li
			active={active}
			index={index}
			key={`${c.id}_${index}`}
			className={active === index ? 'active' : ''}
			onClick={() => changeActive(index)}
		>
			{c.name}
		</li>
	));
	return (
		<div className='categories'>
			<ul>
				<li
					className={active === null ? 'active' : ''}
					onClick={() => changeActive(null)}
				>
					Все
				</li>
				{categoriesButton}
			</ul>
		</div>
	);
};

export default Categories;
