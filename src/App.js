import './App.css';
import Services from './Services/Services';
import Home from './HomeComponents/home'
import { Route, Routes } from 'react-router-dom';
import Content from './content/content';
import Header from './header/header';
import Scroll from './Services/Scroll';
import Aboutus from './Aboutus/Aboutus'
import Cartpage from './cartpage/cartpage';
import Cartpage1 from './cartpage/Cartpage1';
function App() {
  return (
    <div className="App">
        <Scroll/>
        <Header/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Aboutus' element={<Aboutus/>}/>
        <Route path='/Services' element={<Services/>}/>
        <Route path='/Services/:id' element={<Content/>}/>
        <Route path='/cart' element={<Cartpage1/>}/>
      </Routes>
    </div>
  );
}

export default App;
