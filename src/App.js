import './App.css';
import React,{useState,useEffect} from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import Favorite from './components/Favorite';
import Login from './components/Login';
import Error from './components/Error';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import { CartProvider } from 'react-use-cart';
import {BsArrow90DegUp} from 'react-icons/bs';



function App() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };

  return (
    <>
    <CartProvider className="app">
    <Router>
      <NavigationBar/>
      <Routes>
        <Route path='/'     element={<Home/>}/>
        <Route path='/cart'     element={<Cart/>}/>
        <Route path='/favorite'     element={<Favorite/>}/>
        <Route path='/login'     element={<Login/>}/>
        <Route path='*'     element={<Error/>}/>
      </Routes>
      <Footer/>
    </Router>
    </CartProvider>
    {showButton && (
        <div className="position-fixed bottom-0 end-0 m-4">
          <button
            className="btn btn-warning rounded-circle"
            onClick={scrollToTop}
            style={{ marginRight: '-10px' }}
          >
            <BsArrow90DegUp />
          </button>
        </div>
      )}
    </>
  );
}

export default App;
