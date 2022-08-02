import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Article from './Components/Article';
import Bollywood from './Components/Bollywood';

import Fitness from './Components/Fitness';
import Food from './Components/Food';
import Header from './Components/Header';
import Hollywood from './Components/Hollywood';
import Home from './Components/Home';
import PageNotFound from './Components/PageNotFound';
import Technology from './Components/Technology';

function App() {
  return (
        
      <Router>
        <Header />

        <Routes>
          <Route path='/' element={<Navigate to={'/home'} />} />
          <Route path='/home' element={<Home />} />
          <Route path = '/BollyWood' element={<Bollywood/>}/>
          <Route path='/Hollywood' element = {<Hollywood/>}/>
          <Route path='/Fitness' element = {<Fitness/>} />
          <Route path='/Food' element= {<Food/>} />
          <Route path='/Technology' element={<Technology/>}  />
          <Route path='/article/:articleTitle/:articleCategory' element={<Article />} />
          <Route path='/*' element={<PageNotFound />} />
        </Routes>
      </Router>
    
    
  );
}

export default App;
