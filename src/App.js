import logo from './logo.svg';
import './App.css';
import A from './components/A';
import RefExample from './components/RefExample';
import FormExample from './components/FormExample';
import StudentForm from './components/StudentForm';
import useInternet from './useInternet';
import Parent from './components/Parent';

function App() {
 let internetStatus= useInternet();
  return (
    <div className="App">
      <h1>{internetStatus?"You are online":"You are offline"}</h1>
      <Parent/>
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
