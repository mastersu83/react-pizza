import React from 'react';
import CategoriesContainer from '../Categories/CategoriesContainer';
import PizzaBlocksContainer from '../PizzaBlocks/PizzaBlocksContainer';
import SortContainer from '../Sort/SortContainer';

const Content = (props) => {
	return (
		<div className='content'>
			<div className='container'>
				<div className='content__top'>
					<CategoriesContainer />
					<SortContainer />
				</div>
				<h2 className='content__title'>Все пиццы</h2>
				<PizzaBlocksContainer />
			</div>
		</div>
	);
};

export default Content;
