import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import * as IoIcons from 'react-icons/io';

import "./styles.css"
import { Button } from '@mui/material';
function Navbar({division,currentDivision,setCurrentDivision, setNopen,setOpenDiv}) {
  const [sidebar, setSidebar] = useState(true);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
             <h1>{currentDivision}</h1>
             <div className="addNewButton">
             <Button onClick={()=>{setNopen(true)}} variant='contained' >Add new</Button>
             </div>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' >
            <li className='navbar-toggle'>
            <div  className='menu-bars'>
            <Button variant='contained'  onClick={()=>{setOpenDiv(true)}} color="success">Add Div</Button>
              </div>
            </li>
            {division.length>=1 && division.map((item, index) => {
              return (
                <li key={index} className="nav-text" onClick={()=>{setCurrentDivision(item.name)}}>
                  <div className="link">
                  <div>
                    <IoIcons.IoMdPaper></IoIcons.IoMdPaper>
                    <span>{item.name}</span>
                  </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
