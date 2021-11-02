
import './App.css';
import Card from './components/Card/Card';
import FuncComp from './components/FuncComp';

function App() {

  

  return (
    <div className="App">
      <h1>Message from App.js 👨‍💻 </h1>
      <FuncComp />
      <Card name='Sebastian' adress='Casa032' number='12345' email='sebas@test.com' />
      <Card name='Rick' adress='Casa034' number='43199' email='rick@test.com' color='white'/>
      <Card name='Bill' adress='Casa941' number='87439' email='bill@test.com' color='yellow'/>
    </div>
  );
}

export default App;
