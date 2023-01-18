import './App.scss';
import './App.css'; 

import Header from './sections/Header/Header.jsx'; 
import Skills from './sections/Skills/Skills.jsx';
import Projects from './sections/Projects/Projects.jsx';
import Experience from './sections/Experience/Experience';

function App() {


  	return (
		<div className="App">
			<Header /> 
			<Skills />
			<Projects /> 
			<Experience /> 
		</div>
  	);
}

export default App;
