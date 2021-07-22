
import './App.css';
import Example from './components/Example';
import Card from './components/NewsAPI/Card';
import News from './components/NewsAPI/News';

function App() {
  return (
    <div className="App">
      <h1>Message from App.js 📲</h1>
      {/* <Example /> */}

      {/* <Card img='' title='El Nuevo Helado' desc='El mochi es un pastel japonés hecho de mochigome, un pequeño grano de arroz glutinoso.'/> */}
      <News />
    </div>
  );
}

export default App;
