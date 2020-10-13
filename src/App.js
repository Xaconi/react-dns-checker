// React Core
import React from "react";

// Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Content from "./components/Content/Content";

// CSS
import './assets/css/global.css';

const App = () => {

	return (
		<>
			<Header></Header>
			<Content></Content>
			<Footer></Footer>
		</>
	);
};

export default App;
