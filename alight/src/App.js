import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css';
import Welcome from './pages/welcome';
import './sass/main.scss';

import SignUp from './components/sign-Up';
import Tearm from './pages/ourterm';
import Abouts from './pages/aboutus';

function App() {
  return (
  <>
    <Router>
      <Routes>
        <Route path='/' element = {<Welcome/>}></Route>
        <Route path='/team' element = {<Tearm/>}></Route>
        <Route path='/signUp' element = {<SignUp/>}></Route>
        <Route path='/About' element = {<Abouts/>}></Route>
      </Routes>
    </Router>
  </>
  
  );
}

export default App;
