import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css';
import Welcome from './pages/welcome';
import './sass/main.scss';
import Ourteam from './components/ourteam';
import SignUp from './components/sign-Up';

function App() {
  return (
  <>
    <Router>
      <Routes>
        <Route path='/' element = {<Welcome/>}></Route>
        <Route path='/ourteam' element = {<Ourteam/>}></Route>
        <Route path='/signUp' element = {<SignUp/>}></Route>
      </Routes>
    </Router>
  </>
  
  );
}

export default App;
