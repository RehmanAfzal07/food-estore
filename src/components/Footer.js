import React from 'react';
import { FaFacebookSquare} from "react-icons/fa";
import { BiLogoWhatsapp} from "react-icons/bi";

import { BsTwitter } from "react-icons/bs";
import { CiInstagram } from "react-icons/ci";





export default function Footer() {
  return (
    <div className='bg-light text-center text-white'>
      <div className=' p-1 pb-3'>
        <section className=' mb-4'>
          <a
            className='btn text-white btn-floating m-2'
            style={{ backgroundColor: '#3b5998' }}
            href='https://www.facebook.com/'
            role='button'
          >
          <FaFacebookSquare/>
          </a>

          <a
            className='btn text-white btn-floating m-2'
            style={{ backgroundColor: '#55acee' }}
            href='https://www.twitter.com/'
            role='button'
          >
           <BsTwitter/>
          </a>

          <a
            className='btn text-white btn-floating m-2'
            style={{ backgroundColor: '#07ae54' }}
            href='https://www.whatsapp.com/'
            role='button'
          >
          <BiLogoWhatsapp/>
          </a>

          <a
            className='btn text-white btn-floating m-2'
            style={{ backgroundColor: '#ac2bac' }}
            href='https://www.instagram.com/'
            role='button'
          >
            <CiInstagram/>
          </a>

         

        
        </section>
      </div>

      <div className='text-center p-3 m-2' style={{ backgroundColor: 'crimson' }}>
        © 2023 Copyright: 
        <a className='text-white p-1 m-2' href='/'>
            Food Store
        </a>
      </div>
    </div>
  );
}