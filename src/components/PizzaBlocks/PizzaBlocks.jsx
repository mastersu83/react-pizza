import PizzaBlock from "./PizzaBlock/PizzaBlock";

const PizzaBlocks = (props) => {
	let pizzaElements = props.pizza.map((p) => (
		<PizzaBlock
			key={p.id}
			id={p.id}
			image={p.image}
			title={p.title}
			dough1={p.dough1}
			dough2={p.dough2}
			size26={p.size26}
			size30={p.size30}
			size40={p.size40}
			price={p.price}
			add={p.add}
			pieces={p.pieces}
		/>
	));
	return <div className="content__items">{pizzaElements}</div>;
};

export default PizzaBlocks;
