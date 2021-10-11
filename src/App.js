import React from 'react';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';


//Components
import Header from './components/Header';
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';
////Plain old JS Syntax
//const Star = () => React.createElement('div',null,'This is as little star')

//// JSX Syntax
//function Star2() {
//    return (
//        <div>
//            This is a little star.
//        </div>);
//            }

//Styles
import {GlobalStyle} from './GlobalStyle'

function App() {
  return (
    <Router>
          <Header/> 
          <Routes>
          <Route path='/' element={<Home />} />
          {/*movieId ist ein belieb benannter parameter der der route übergeben wird*/}
          <Route path='/:movieId' element={<Movie/>}/>
          {/*durch den stern wird diese route bei allen nicht existenten routen aufgerufen*/}
          <Route path='*' element={<NotFound/>}/>
          </Routes>
          <GlobalStyle/>
    </Router>
  );
}

export default App;
