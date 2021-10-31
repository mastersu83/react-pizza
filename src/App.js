import "./App.css";
import Content from "./components/Cntent/Content";
import Header from "./components/Header/Header";

const App = (props) => {
	return (
		<div className="wrapper">
			<Header />
			<Content />
		</div>
	);
};

export default App;
