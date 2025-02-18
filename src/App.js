import logo from './logo.svg';
import './App.css';
import A from './components/A';
import RefExample from './components/RefExample';
import FormExample from './components/FormExample';
import StudentForm from './components/StudentForm';
function App() {
  return (
    <div className="App">
       <FormExample/>
      <h1>React</h1>
      <StudentForm/>
      <hr/>
      <A/>
      <RefExample/> <hr/>
     

    </div>
  );
}

export default App;
