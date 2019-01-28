import React from 'react';

const Navbar = () =>{
  return(
   <div className="navbar navbar-expand-sm bg-white navbar-primary px-sm-5" id="navId">
     <ul className="navbar-nav">
        <li className="nav-item">
           <a className="nav-link" href="/"><img src="https://img.icons8.com/material-rounded/26/000000/menu.png" alt="menu"/></a>
        </li>
        <li className="nav-item">
           <a className="navbar-brand px-3 font-weight-bold" href="/">USTRAA</a>
         </li>
       </ul>
       <ul className='ml-auto navbar-nav mr-2'>
         <li className="nav-item">
           <a className="nav-link px-3" href="/"><i className="fas fa-search fa-lg" style={{color:'black'}}/></a>
         </li>
         <li className="nav-item">
           <a className="nav-link px-3" href="/"><i className="fas fa-shopping-cart fa-lg" style={{color:'black'}}/></a>
         </li>
         <li className="nav-item">
           <a className="nav-link px-3" href="/"><i className="fas fa-user-circle fa-lg" style={{color:'black'}}/></a>
         </li>
      </ul>
   </div>
  );
}

export default Navbar;