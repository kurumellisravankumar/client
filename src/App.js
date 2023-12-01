
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import Profile from './Profile ';


function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/profile' element={<Profile/>}/>


      </Routes>
     </Router>
    </div>
  );
}

export default App;
