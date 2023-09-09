'use client'
import Link from 'next/link'
import React, { useState } from 'react'

function Home() {

  

  return (
    <>
    
    <div className='hero-main'>


    <div className='navbar'>

      <div className='logo'>

        Safar

      </div>

      <div className='menu'>

        <Link href='/TravelInfo'>
          Travel Info
        </Link>

        <Link href='/Weather'>
          Weather Updates
        </Link>

        <Link  href='/Sign In'>
          <button className='signin'>
            Sign In
          </button>
        </Link>

        

      </div>

    </div>


    </div>
    
    </>
  )
}

export default Home