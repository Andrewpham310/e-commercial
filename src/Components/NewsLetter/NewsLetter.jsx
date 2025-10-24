import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Subscribe to our Newsletter</h1>
        <p>Get updates about new products and special offers</p>
        <div>
            <input type="email" placeholder='Enter your email' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter