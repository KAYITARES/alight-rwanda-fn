import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css';
import Welcome from './pages/welcome';
import './sass/main.scss';

import SignUp from './components/sign-Up';
import Tearm from './pages/ourterm';
import Abouts from './pages/aboutus';
import Blog from './pages/blogsp';
import Testimonials from './pages/testimonials';
import Jobs from './pages/jobs';

import GetOneJobs from './pages/getOneJobs';
import ReadmorePage from './pages/getReadmorep';

function App() {
  return (
  <>
    <Router>
      <Routes>
        <Route path='/' element = {<Welcome/>}></Route>
        <Route path='/team' element = {<Tearm/>}></Route>
        <Route path='/signUp' element = {<SignUp/>}></Route>
        <Route path='/About' element = {<Abouts/>}></Route>
        <Route path='/Blog' element = {<Blog/>}></Route>
        <Route path='/testimonial' element = {<Testimonials/>}></Route>
        <Route path='/job' element = {<Jobs/>}></Route>
        <Route path='/getjob' element = {<GetOneJobs/>}></Route>
        <Route path='/getreadmore' element = {<ReadmorePage/>}></Route>
      </Routes>
    </Router>
  </>
  
  );
}

export default App;
