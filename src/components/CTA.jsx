import React from 'react'
import {Link} from 'react-router-dom'

const CTA = () => {
  return (
    <section className='cta'>
        <p className='cta-text'>Do you have a project that you'd like to get started?<br className='sm:block hidden' />
        Let's make your dream site, happen!</p>
        <Link to="/contact" className='btn'>
            Contact
        </Link>
    </section>
  )
}

export default CTA