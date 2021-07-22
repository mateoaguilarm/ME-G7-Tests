
import './App.css';
import Example from './components/Example';
import Card from './components/NewsAPI/Card';

function App() {
  return (
    <div className="App">
      <h1>Messaje from App.js 📲</h1>
      <Example />

      <Card img='' title='El Nuevo Helado' desc='El mochi es un pastel japonés hecho de mochigome, un pequeño grano de arroz glutinoso.'/>
    </div>
  );
}

export default App;
