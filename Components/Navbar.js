'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'

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

            <Link className='travelinfo' href='/TravelInfo'>
              Travel Info
            </Link>

            <Link className='weather' href='/Weather'>
              Weather Updates
            </Link>

            <Link href='/Sign In'>
              <button className='signin'>
                Sign In
              </button>
            </Link>

            <div className="language-drop">
          <button onClick={toggleLanguage}>En</button>
          {setdown && (
            <ul className="lan-dropdown">
              <li>हिंदी</li>
              <li>Fr</li>
              <li>German</li>
            </ul>
          )}
        </div>

          </div>

            </div>
        
        </>

    </navbar>
      
    </>
  )
}
