import './App.scss';
import './App.css'; 

import Header from './sections/Header/Header.jsx'; 
import StickyLinks from './components/StickyLinks.jsx';
import Skills from './sections/Skills/Skills.jsx';
import Projects from './sections/Projects/Projects.jsx';
import Experience from './sections/Experience/Experience';
import PreviewCV from './sections/PreviewCV/PreviewCV';

function App() {


  	return (
		<div className="App">
			<Header /> 
			<StickyLinks />
			<Skills />
			<Projects /> 
			<Experience /> 
			<PreviewCV />
		</div>
  	);
}

export default App;
