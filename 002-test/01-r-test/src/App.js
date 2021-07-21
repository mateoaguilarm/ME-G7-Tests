
import './App.css';
import Card from './components/Card/Card';
import FuncComp from './components/FuncComp';

function App() {

  

  return (
    <div className="App">
      <h1>Message from App.js 👨‍💻 </h1>
      <FuncComp />
      <Card name='asd' adress='asd2' number='asd3' email='asd4' />
      <Card name='asd' adress='asd2' number='asd3' email='asd4' color='white'/>
    </div>
  );
}

export default App;
