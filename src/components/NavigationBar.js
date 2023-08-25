import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import {BsCartCheck} from 'react-icons/bs';
import {GrFavorite}  from 'react-icons/gr';
import {AiOutlineLogin} from 'react-icons/ai';
import styled from 'styled-components';

const StyledDiv = styled.div`
background-color: #e0e0e0;
color: #333;
transition: background-color 0.3s ease;
padding: 10px;
display: inline-block;
margin:10px;

&:hover {
  background-color: #00bcd4;
  color: white;
}
`;


const NavigationBar = () => {
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);
  

  const toggleOffcanvas = () => {
    setOffcanvasOpen(!offcanvasOpen);
  };

  const closeOffcanvas = () => {
    setOffcanvasOpen(false);
  };

 
  
  return (
    <nav className="navbar bg-body-tertiary  mb-2">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
        <img className='card-img-top img-fluid' src='logo.png' alt='monogram'/> 
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleOffcanvas}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
        
          className={`offcanvas offcanvas-end ${offcanvasOpen ? 'show' : ''}`}
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel"
            style={{backgroundColor:"#EB1527", padding:"10px",color:"white", borderRadius:"2px"}}
            >
               <a style={{color:"white", textDecoration:"none"}} href="/"> Food Store</a>
             
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
              onClick={closeOffcanvas}
            ></button>
          </div>
          <div className="offcanvas-body" >
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <StyledDiv>
            <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page"
                >
                  <AiFillHome style={{marginRight:"10px"}}/>
                 Home
                </Link>
              </li>
            </StyledDiv>
              
             <StyledDiv>
             <li className="nav-item">
                <Link to="/cart" className="nav-link"  >
                <BsCartCheck style={{marginRight:"10px"}}/> 
                  Cart
                </Link>
              </li>
             </StyledDiv>
              
              <StyledDiv>
              <li className="nav-item">
                <Link to="/favorite" className="nav-link">
                  <GrFavorite style={{marginRight:"10px"}}/>
                  Favorite
                </Link>
              </li>
              </StyledDiv>

              <StyledDiv>
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  <AiOutlineLogin style={{marginRight:"10px"}}/>
                  Login
                </Link>
              </li>
              </StyledDiv>
              
             
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;


 
