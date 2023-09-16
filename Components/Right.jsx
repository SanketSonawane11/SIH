import Link from 'next/link';
import React from 'react'
import { HiLanguage } from 'react-icons/hi2';
import { LiaUserCircleSolid } from "react-icons/lia";

const Right = () => {
  return (
   <>
       <div className="right">
          <div className="">
            <button
              style={{
                width: '5vw',
                height: '2vw',
                color: '#fff',
                display: 'flex',
                backgroundColor: '#000',
                borderRadius: '2vw',
                gap:".5vw",
                justifyContent:"center",
                alignItems:"center"
              }}
            >
              <HiLanguage /> EN
            </button>
          </div>

          <div
            className=""
            style={{
              width: '3vw',
              height: '3vw',
              background: '#000',
              borderRadius: '2vw',
            }}
          ><Link href="/profile"> <LiaUserCircleSolid style={{color:"#fff",fontSize:"3vw"}}/></Link>
            
          </div>
        </div></>
  )
}

export default Right