'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Right from './Right';

export default function Navbar() {

  const [down, setdown] = useState(false);


  const toggleLanguage = () =>
  {
    setdown(!down);
  }



  return (
    <>
    
    <navbar classname='navbar'>

        <>
        
        <div className='navbar'>

          <div className='logo'>

            <Link href='/'>Safar</Link>

          </div>

          <div className='menu'>

            <Link className='travelinfo' href='/TripPlanner'>
              Travel Info
            </Link>

            <Link className='weather' href='/Weather'>
              Weather Updates
            </Link>

            <Link className='pppcalci' href='https://www.chrislross.com/PPPConverter/' >
              Value Calculator
            </Link>

            <Link  href='/SignIn'>
              <button className='signin'>
                Sign In
              </button>
            </Link>

          <div className="language-drop">
            {/* <button onClick={toggleLanguage}>En</button>
            {setdown && (
              <ul className="lan-dropdown">
                <li>हिंदी</li>
                <li>Fr</li>
                <li>German</li>
              </ul>
            )} */}

            <Right />

          </div>

          </div>

            </div>
        
        </>

    </navbar>
      
    </>
  )
}
