
import Header from './components/header/Header.jsx';
import './App.css';
import Body from './components/body/Body.jsx';
import Projects from './components/projects/Projects.jsx';
import About from './components/about/About.jsx';
import Skills from './components/skills/Skills.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Projects />
      <Skills />
      <About />
    </div>
  );
}

export default App;