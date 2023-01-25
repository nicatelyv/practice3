import React from 'react'
import "./style.scss"

function WelcomeSection() {
  return (
    <section className='welcomSec'>
        <h1>Welcome To Our Studio!</h1>
        <h2>IT'S NICE TO MEET YOU</h2>
        <a href='/'><button>TELL ME MORE</button></a>
    </section>
  )
}

export default WelcomeSection