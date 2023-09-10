'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'




function Home() {

  const [down, setdown] = useState(false);

  // const texts = ["India's heart", "India's Culture", "India"];
  // const [textIndex, setTextIndex] = useState(0);
  // const [text, setText] = useState('');
  // let charIndex = 0;
  // let textType = texts[textIndex];

  // useEffect(() => {
  //   const typingInterval = setInterval(() => {
  //     if (charIndex < textType.length) {
  //       setText(textType.substring(0, charIndex + 1));
  //       charIndex++;
  //     } else {
  //       clearInterval(typingInterval); 
  //       setTimeout(() => {
        
  //         setTextIndex((prevIndex) =>
  //           prevIndex < texts.length - 1 ? prevIndex + 1 : 0
  //         );
  //         setText('');
  //         charIndex = 0;
  //       }, 1000); 
  //     }
  //   }, 1000); 

  //   return () => {
  //     clearInterval(typingInterval); 
  //   };
  // }, [textType, texts, textIndex]);


  const toggleLanguage = () =>
  {
    setdown(!down);
  }


  return (
    <>
    
      <div className='hero-main'>


            <div className='navbar'>

          <div className='logo'>

            Safar

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

            <div style={{ fontFamily: 'Alfa Slab One' }} className='hero-section'>

              <h1 className='line1'>Uncover the</h1>
              <h1 className='line2'>Wonders </h1>
              <h1 className='line3'>of India</h1>
              <button className='visit'>Visit</button>

            </div>

      </div>

      <div className='section2'>
            <hr></hr>
            <div className='welcome-text'>
              <h1>Journey into</h1>
              <p><span className='bold'>India's Culture</span></p>
              <p className='desc'>Where every smile becomes a friend</p>
              <div className='call-buttons'>
                <button className='journey'>Start planning</button>
                <button className='learn'>Learn more</button>
              </div>
            </div>

            <div className='carousel'>
            </div>

      </div>

      <div className='regions'>

            <h1>Explore by Regions</h1>

            <div className='region-cards'>

              <div className='North rcard'>
                <p className='card-desc'>Northern Treasures</p>
              </div>

              <div className='East rcard'>

                <p className='card-desc'>Eastern Charms</p>
              </div>

              <div className='South rcard'>
                <p className='card-desc'>Southern Serenity</p>
              </div>

              <div className='West rcard'>
                <p className='card-desc'>Western Wonders</p>
              </div>

            </div>

            <button className='more-region'>Explore more</button>
            

      </div>

    </>
  )
}

export default Home