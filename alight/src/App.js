import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css';
import Welcome from './pages/welcome';
import './sass/main.scss';

import SignUp from './components/sign-Up';
import Tearm from './pages/ourterm';

function App() {
  return (
  <>
    <Router>
      <Routes>
        <Route path='/' element = {<Welcome/>}></Route>
        <Route path='/tearm' element = {<Tearm/>}></Route>
        <Route path='/signUp' element = {<SignUp/>}></Route>
      </Routes>
    </Router>
  </>
  
  );
}

export default App;
